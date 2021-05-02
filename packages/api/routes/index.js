var express = require("express");
var router = express.Router();

var ao3 = require("../fetchers/ao3");
var insta = require("../fetchers/insta");
var tumblr = require("../fetchers/tumblr");
var twitter = require("../fetchers/twitter");

const fetchers = [
  new ao3.Ao3Fetcher(),
  new insta.InstaFetcher(),
  new tumblr.TumblrFetcher(),
  new twitter.TwitterFetcher(),
];

router.get("/posts", async function (req, res, next) {
  const posts = fetchers.reduce((posts, fetcher) => {
    return [...posts, ...fetcher.posts()];
  }, []);

  posts.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return res.json(posts);
});

module.exports = router;
