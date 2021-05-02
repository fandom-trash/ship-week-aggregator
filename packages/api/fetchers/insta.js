const Instagram = require("instagram-web-api");
const username = process.env.INSTAGRAM_USERNAME;
const password = process.env.INSTAGRAM_PASSWORD;
const client = new Instagram({ username, password });
const slugify = require("slugify");
const fakeData = require("./mockInstaData");
const dayjs = require("dayjs");
const tags = require("../tags");
const constants = require("../constants.json");

class InstaFetcher {
  // {"message":"Please wait a few minutes before you try again.","status":"fail"} 5:48pm
  constructor() {
    this.authState = { authenticated: false, status: "not attempted" };
    this.forReal = process.env.FOR_REAL === "true";
    console.log("insta for real = ", this.forReal);
    this.cache = [];
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
    console.log("insta updating, forReal = ", this.forReal);
    const results = this.forReal
      ? await this.fetchPosts()
      : await this.fakeFetch();

    if (!results) {
      // TODO log + alert
      return false;
    }

    const posts = results.hashtag.edge_hashtag_to_media.edges.map(
      (edge) => edge.node
    );

    //TODO merge parsePosts and the id map for cache
    const parsedPosts = this.parsePosts(posts);

    const postsForCache = parsedPosts.map((post) => ({
      ...post,
      id: slugify(`insta ${post.id}`),
      source: constants.INSTA,
    }));

    //todo: only add new things
    //todo: update pagination code to grap page 1 (probs)

    this.cache = postsForCache;
  }

  async fakeFetch() {
    return fakeData;
  }

  async fetchPosts() {
    if (!this.authState.authenticated) {
      try {
        this.authState = await client.login();
      } catch (err) {
        // err.statusCode === 429 means you're rate limited

        //TODO log auth failure + alert
        console.log(
          `INSTAGRAM AUTH FAILED WITH STATUS CODE = ${err.statusCode}`
        );
      }

      if (this.authState.authenticated) {
        return await client.getPhotosByHashtag({ hashtag: tags.INSTA });
      } else {
        return [];
      }
    }
  }

  parsePosts(posts) {
    return posts.map((post) => {
      return { ...post, date: dayjs.unix(post.taken_at_timestamp) };
    });
  }
}

module.exports = { InstaFetcher };
