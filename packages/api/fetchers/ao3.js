const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fakeHTML = require('./mockAo3HTML');
const slugify = require('slugify')
const dayjs = require('dayjs')
const tags = require("../tags.json");

const url = `https://archiveofourown.org/tags/${tags.AO3}/works`;

class Ao3Fetcher {
    constructor(forReal = true) {
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
        console.log('ao3 updating')
        const htmlString = this.forReal
            ? await this.fetchPosts()
            : await this.fakeFetch();

        const ao3Posts = await this.parsePosts(htmlString);
        const postsForCache = ao3Posts.map(post => ({
            ...post, id: slugify(`${post.source} ${post.title}`)
        }));

        //todo: only add new things
        //todo: update pagination code to grap page 1 (probs)

        this.cache = postsForCache;

    }

    async fakeFetch() {
        return fakeHTML;
    }

    async fetchPosts() {
        let response = await fetch(url);
        return await response.text();
    };


    async parsePosts(htmlString) {
        let dom = new JSDOM(htmlString, {url: url});
        let document = dom.window.document;
        let ficData = this.getPageOfFics(document);

        const isPaginaged = document.querySelector("ol.pagination.actions") !== null;

        if (isPaginaged) {
            // # of children of the pagination element
            const childCount = document.querySelector("ol.pagination.actions").childElementCount;
            const lastPageLink = document.querySelector("ol.pagination.actions").children[childCount - 2];
            const strPageCount = lastPageLink.querySelector('a').innerHTML;
            const intPageCount = parseInt(strPageCount);
            const pageCountIsValid = Number.isInteger(intPageCount);
            let paginatedUrl;

            if (pageCountIsValid) {
                for (let thisPage = 2; thisPage < intPageCount + 1; thisPage++) {
                    paginatedUrl = `${url}?page=${thisPage}`;
                    let response = await fetch(paginatedUrl);
                    let html = await response.text();
                    let dom = new JSDOM(html, {url: url});
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
