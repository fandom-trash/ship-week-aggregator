const Instagram = require('instagram-web-api')
const username = process.env.INSTAGRAM_USERNAME;
const password = process.env.INSTAGRAM_PASSWORD;
const client = new Instagram({ username, password });
const slugify = require('slugify')
const fakeData = require('./mockInstaData');
const dayjs = require('dayjs')

class InstaFetcher {
    constructor(forReal = true) {
        this.isLoggedIn = false;
        this.forReal = forReal;
        this.cache = [];
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
        console.log('insta updating, forReal = ', this.forReal)
        const results = this.forReal
            ? await this.fetchPosts()
            : await this.fakeFetch();

        const posts = results.hashtag.edge_hashtag_to_media.edges.map(edge => edge.node);
        const parsedPosts = this.parsePosts(posts);

        const postsForCache = parsedPosts.map(post => ({
            ...post, id: slugify(`insta ${post.id}`)
        }));

        //todo: only add new things
        //todo: update pagination code to grap page 1 (probs)

        this.cache = postsForCache;
    }

    async fakeFetch() {
        return fakeData;
    }

    async fetchPosts() {
        if (!this.isLoggedIn) {
            await client.login()
            this.isLoggedIn = true;
        }

        return await client.getPhotosByHashtag({ hashtag: 'kataangweek' })
    };

    parsePosts(posts) {
        return posts.map(post => {
            return {...post, date: dayjs.unix(post.taken_at_timestamp)};
        });
    }
}

module.exports = {InstaFetcher};
