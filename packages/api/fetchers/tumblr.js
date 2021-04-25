const tumblr = require('tumblr.js');
const tags = require("../tags.json");
const constants = require("../constants.json");
const fakeData = require('./mockTumblrData');

class TumblrFetcher {
    constructor(forReal = true) {
        this.forReal = forReal;
        this.cache = [];
        this.cacheIds = [];

        this.client = tumblr.createClient({
            consumer_key: process.env.TUMBLR_CONSUMER_KEY
        });
        this.client.returnPromises();

        this.update();

        this.refreshRateMinutes = 5;
        setInterval(
            () => this.update(),
            (this.refreshRateMinutes * 60) * 1000 // milliseconds
        );
    }

    posts() {
        return this.cache;
    }

    async update() {
        console.log('tumblr updating')

        const posts = this.forReal
            ? await this.fetchPosts()
            : await this.fakeFetch();

        const postsForCache = posts.map(post => ({
            ...post, source: constants.TUMBLR
        }));

        this.addPostsToCache(postsForCache);
    }

    async fetchPosts() {
        const targetTag = tags.TUMBLR;
         let postData = await this.client.taggedPosts(targetTag, function (err, data) {
             return data;
         });

        if (this.cache.length === 0) {
            let thisPage = postData;

            while (thisPage.length) {
                let lastTimestampInResponse = thisPage[thisPage.length - 1].timestamp;

                thisPage = await this.client.taggedPosts(targetTag, {before: lastTimestampInResponse}, function (err, data) {
                    return data;
                });

                if (thisPage.length) {
                    postData = [].concat(postData, thisPage);
                }

            }
        }

        return postData;
    }

    async fakeFetch() {
        return fakeData;
    }


    refreshCacheIds() {
        this.cacheIds = this.cache.map(post => post.id);
    }

    addPostsToCache(posts) {
        // we only paginate through the full results
        // if the cache is empty. checking this prevents
        // first page dupes from being cached

        if (this.cacheIds.length !== this.cache.length) {
            this.refreshCacheIds();
        }

        posts.forEach(post => {
            if (!this.cacheIds.includes(post.id)) {
                this.cache.push(post);
            }
        });

        this.refreshCacheIds();
    }
}

module.exports = {TumblrFetcher};
