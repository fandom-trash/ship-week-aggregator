const tags = require("../tags.json");
const constants = require("../constants.json");
const fetch = require("node-fetch");
const fakeData = require("./mockTwitterData");
const slugify = require("slugify");
const dayjs = require("dayjs");

class TwitterFetcher {
  constructor() {
    this.baseTwitterSearchUrl =
      "https://api.twitter.com/1.1/search/tweets.json?q=%23" +
      tags.TWITTER +
      "&-filter:retweets&result_type=recent";
    this.bearerToken = process.env.TWITTER_BEARER_TOKEN;
    this.forReal = process.env.FOR_REAL === "true";
    this.cache = [];
    this.cacheIds = [];

    this.update();

    this.refreshRateMinutes = 5;
    setInterval(
      () => this.update(),
      this.refreshRateMinutes * 60 * 1000 // milliseconds
    );
  }

  posts() {
    return this.cache;
  }

  async update() {
    console.log("twitter updating");

    const posts = this.forReal
      ? await this.fetchPosts()
      : await this.fakeFetch();

    // filter out retweets since the retweet filter
    // doesnt seem to work
    // console.log(posts[0].entities.media);
    const filteredPosts = posts.statuses.filter((post) => !post.retweeted_status);

    const postsForCache = filteredPosts.map((post) => ({
      ...post,
      source: constants.TWITTER,
      date: dayjs(post.created_at)["$d"],
      id: slugify(`twitter ${post.id}`),
      url: this.getUrl(post),
      img_urls: this.getImgUrls(post),
      video_url: this.getVideoUrl(post),
      userProfileLink: `twitter.com/${post.user.screen_name}`,
    }));

    this.addPostsToCache(postsForCache);
  }

  getUrl(post) {
    if (post.entities.urls.length) {
      return post.entities.urls[0].url;
    } else if (post.entities.media.length) {
      return post.entities.media[0].url;
    }
    return null;
  }

  getImgUrls(post) {
    if (post.extended_entities && post.extended_entities.media.length) {
      return post.extended_entities.media.map((mediaObj) => {
        return mediaObj.media_url_https;
      });
    } else {
      const hasImgs = post.entities.media && post.entities.media.length;
      return hasImgs ? post.entities.media[0].media_url_https : [];
    }
  }

  getVideoUrl(post) {
    let vid_url;
    if (
      post.extended_entities &&
      post.extended_entities.media.length &&
      post.extended_entities.media[0].video_info
    ) {
      const media = post.extended_entities.media;

      media.forEach((m) => {
        if (m.video_info) {
          const variants = m.video_info.variants;
          vid_url = variants[variants.length - 1].url;
        }
      });
    }
    return vid_url;
  }

  async fakeFetch() {
    return fakeData;
  }

  async fetchPosts() {
    const defaultFetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    };
    const response = await fetch(
      this.baseTwitterSearchUrl,
      defaultFetchOptions
    );
    return await response.json();
  }

  refreshCacheIds() {
    this.cacheIds = this.cache.map((post) => post.id);
  }

  addPostsToCache(posts) {
    if (this.cacheIds.length !== this.cache.length) {
      this.refreshCacheIds();
    }

    posts.forEach((post) => {
      if (!this.cacheIds.includes(post.id)) {
        this.cache.push(post);
      }
    });

    this.refreshCacheIds();
  }
}

module.exports = { TwitterFetcher };
