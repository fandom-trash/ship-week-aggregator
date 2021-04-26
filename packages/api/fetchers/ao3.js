const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fakeHTML = require('./mockAo3HTML');
const slugify = require('slugify')
const dayjs = require('dayjs')
const tags = require("../tags.json");


class Ao3Fetcher {
    constructor() {
        this.url = `https://archiveofourown.org/tags/${tags.AO3}/works`;
        this.forReal = process.env.FOR_REAL === "true";
        this.cache = [];
        this.cacheIds = [];
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
        // TODO error handling for this whole janky-ass thing
        console.log('ao3 updating')

        const htmlString = this.forReal
            ? await this.fetchPosts(this.url)
            : await this.fakeFetch();

        const ao3Posts = await this.parsePosts(htmlString);
        const postsForCache = ao3Posts.map(post => ({
            ...post, id: slugify(`${post.source} ${post.title}`)
        }));

        this.addPostsToCache(postsForCache);
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

    async fakeFetch() {
        return fakeHTML;
    }

    async fetchPosts(url) {
        let response = await fetch(url);
        return await response.text();
    };


    async parsePosts(htmlString) {
        let dom = new JSDOM(htmlString, {url: this.url});
        let document = dom.window.document;
        let ficData = this.getPageOfFics(document);

        const isPaginaged = document.querySelector("ol.pagination.actions") !== null;
        const isFirstFetch = this.cache.length === 0;

        if (isFirstFetch && isPaginaged) {
            // # of children of the pagination element
            const childCount = document.querySelector("ol.pagination.actions").childElementCount;
            const lastPageLink = document.querySelector("ol.pagination.actions").children[childCount - 2];
            const strPageCount = lastPageLink.querySelector('a').innerHTML;
            const intPageCount = parseInt(strPageCount);
            const pageCountIsValid = Number.isInteger(intPageCount);
            let paginatedUrl;

            if (pageCountIsValid) {
                for (let thisPage = 2; thisPage < intPageCount + 1; thisPage++) {
                    paginatedUrl = `${this.url}?page=${thisPage}`;
                    let html = await this.fetchPosts(paginatedUrl);
                    let dom = new JSDOM(html, {url: paginatedUrl});
                    let document = dom.window.document;
                    let fics = document.querySelectorAll("li.work");
                    let parsedFics = this.getPageOfFics(document);
                    ficData = [].concat(ficData, parsedFics);
                }
            }
        }
        return ficData;
    }


    // take a jsDom document obj and return a list of fic data objects
    getPageOfFics(document) {
        const fics = document.querySelectorAll("li.work");
        let ficDataForPage = [];

        fics.forEach(fic => {
            const heading = fic.querySelector("h4.heading");

            const data = {
                title : heading.querySelector("a").innerHTML,
                author: heading.querySelector("a[rel]").innerHTML,
                summary : this.getSummary(fic),
                date : this.parseDate(fic),
                link : heading.querySelector("a").getAttribute("href"),
                author_link: heading.querySelector("a[rel]").getAttribute("href"),
                source: 'AO3',
            };

            ficDataForPage.push(data);
        });

        return ficDataForPage;
    }

    parseDate(fic) {
        const date = fic.querySelector("p.datetime").innerHTML;
        return dayjs(date).toDate();
    }

    getSummary(fic) {
        const summaryContainer = fic.querySelector("blockquote.summary");
        if (summaryContainer) {
            const paragraphs = summaryContainer.querySelectorAll("p");
            if (!paragraphs) {
                return null;
            }
            let fullSummary = '';
            paragraphs.forEach(p => fullSummary += p.innerHTML);
            return fullSummary;
        }
        return null;
    }

}

module.exports = {Ao3Fetcher};
