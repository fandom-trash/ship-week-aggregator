# ship-week-aggregator

Cross-platform ship week? Get all your content in one place.


## Setup
Install yarn if you haven't already. It's recommended that you install this via npm

`npm install --global yarn`

Then install dependancies with 
`yarn install`

To start the app, run 
`yarn start`

## ENV variables
You need to create a file at `packages/api/.env` If you're using the dummy data, you can ignore this, but to see real data you'll need a file that looks like this: 
```
INSTAGRAM_PASSWORD=password
INSTAGRAM_USERNAME=username
TUMBLR_CONSUMER_KEY=consumer_key
TUMBLR_SECRET_KEY=secret_key
TWITTER_BEARER_TOKEN=bearer_token
FOR_REAL=false
```
The `FOR_REAL` value controls whether we make real api requests or just use the dummy data. 

### FYI About Data Fetching
The default is for it to use dummy data in dev. This is because we're relying on in-memory caching rather than an actual data store. This is great in production when the app spins up once and then chills, less so for development when you're constantly restarting the server and re-requesting a bunch of data that instagram sort of doesn't want us to have in the first place. So the dummy data is there to protect us from getting rate limited or banned while backend development is underway. 

For frontend development, react hot reloads, so this is less important. Feel free to make real requests if you prefer. 

## Deploying
It's automatic when you merge into `main` 🎉

# General Structure
This is essentially structured as two separate apps, one for the frontend and one for the backend. These live at `packages/api` and `packages/frontend`. The backend is an Express app, the frontend is a React app. 

The tags that we search for across platforms are defined in `packages/api/tags.json`. For now these are set to whatever version of "Kataang Week 2020" applied to a given platform (or the more general "kataang" for twitter because they make requesting year-old content a huge pain in the ass). 

We request data on those tags from each platform, sort the posts, and send that to the react app. 

## Frontend overview
Main entry point in `packages/frontend/src/App.js`. It accepts a list of posts, and matches the `source` attribute of each to platform-specific components that live in `packages/frontend/src/components`. These components are pretty much just whatever I needed to see to make sure things were wired up correctly.

## Backend overview
This is a *lot* of data that we're requesting. If you want to limit to only a certain type of post, a good place to do that is in `packages/api/routes/index.js`. This is where the data fetchers get initialized and run. There is list of fetchers, 1 for each platform. Just comment out the ones you don't want to use. 

```
// For example, to only see ao3 posts:

   const fetchers = [
     new ao3.Ao3Fetcher(),
     // new insta.InstaFetcher(),
     // new tumblr.TumblrFetcher(),
     // new twitter.TwitterFetcher(),
   ];

```

## Prettier
You can run prettier on the whole repo with `yarn prettier --write .`. Replace `.` with a specific file if you prefer.

## Tests
lol yeah i should probably write some

## Post Data
I’m not really sure exactly what we want to display on the page, so right now I’m passing the frontend all post data returned from the various apis (with the addition of a `source` attribute and an id). Some of this data is dummy thicc and we’ll probably want to prune it down a bit once we know exactly what is needed to display things. It's also possible some useful info is missing and I'll need to add additional requests to gather it. (The only thing I know about that's currently missing is the instagram username, so let me know if you see anything else that we need.)

Below are examples of each post type. You can always see the raw data that the express app has gathered by looking at `http://localhost:8081/posts` (or at kataang-week.com/posts`) 

### AO3
This is the simplest cause I’m just scraping the website.
```
  {
   "title": "Kataang Week 2020: Blood/Wounds",
   "author": "TheBakingQueen",
   "summary": "12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 3: Blood/Wounds. On the field of battle, Aang gets hurt. Katara, naturally, freaks out.",
   "date": "2021-01-28T05:00:00.000Z",
   "link": "/works/29033019",
   "author_link": "/users/TheBakingQueen/pseuds/TheBakingQueen",
   "source": "AO3",
   "id": "AO3-Kataang-Week-2020:-BloodWounds"
  }
```
### Insta
Here's where things get rough. 
```
{
   "comments_disabled":false,
   "id":"insta-2539393752567182035",
   "edge_media_to_caption":{
      "edges":[
         {
            "node":{
               "text":"앙타라 하이틴\n⤵️\n.\n.\n#Avatar #ATLA #thelastairbender #aang #katara #kataang  #kataangfanart #kataangweek"
            }
         }
      ]
   },
   "shortcode":"CM9vSnmnPLT",
   "edge_media_to_comment":{
      "count":0
   },
   "taken_at_timestamp":1616939346,
   "dimensions":{
      "height":1080,
      "width":1080
   },
   "display_url":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=f9d14b0b0071f9292207d27beb777173&oe=60A0DD79&_nc_sid=d997c6",
   "edge_liked_by":{
      "count":235
   },
   "edge_media_preview_like":{
      "count":235
   },
   "owner":{
      "id":"43654295961"
   },
   "thumbnail_src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=662e64ccef7787797b9cc27505ccadf6&oe=60A067A2&_nc_sid=d997c6",
   "thumbnail_resources":[
      {
         "src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=646e6cb734a4097d450aa656b180d6da&oe=60A18715&_nc_sid=d997c6",
         "config_width":150,
         "config_height":150
      },
      {
         "src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=f3dc1bb4abe7b9f02bf8c60425f1e024&oe=60A0271D&_nc_sid=d997c6",
         "config_width":240,
         "config_height":240
      },
      {
         "src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=76ba71e95daa6d459e2de53334f90fd5&oe=609F5844&_nc_sid=d997c6",
         "config_width":320,
         "config_height":320
      },
      {
         "src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=bd109e3cc66aa15ed3e91d6cb4fbfae7&oe=60A038C2&_nc_sid=d997c6",
         "config_width":480,
         "config_height":480
      },
      {
         "src":"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/165319362_1129741684139186_4333869530159313042_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ROYAq8WLpa8AX_YwgZ5&edm=AA0rjkIAAAAA&ccb=7-4&oh=662e64ccef7787797b9cc27505ccadf6&oe=60A067A2&_nc_sid=d997c6",
         "config_width":640,
         "config_height":640
      }
   ],
   "is_video":false,
   "date":"2021-03-28T13:49:06.000Z",
   "source":"INSTA"
}

```

### Tumblr

```
{
   "type":"link",
   "blog_name":"avrelia",
   "blog":{
      "name":"avrelia",
      "title":"I am a fan of secret rivers",
      "description":"She/her, old, tired, Russian, 44, living in California, writes, reads. This blog is mainly for Avatar The Last airbender and Legend of Korra stuff, and occasionally my other old and new fannish interests.",
      "url":"https://avrelia.tumblr.com/",
      "uuid":"t:zELIXupxXo88Y52TWjQM7Q",
      "updated":1618771465
   },
   "id":"tumblr-626569313007108096",
   "id_string":"626569313007108096",
   "post_url":"https://avrelia.tumblr.com/post/626569313007108096/weight-of-the-future-avrelia-avatar-the-last",
   "slug":"weight-of-the-future-avrelia-avatar-the-last",
   "date":"2020-08-16 01:57:41 GMT",
   "timestamp":1597543061,
   "state":"published",
   "format":"html",
   "reblog_key":"hqKltxhX",
   "tags":[
      "kataang week 2020",
      "kataang week",
      "kataang",
      "katara x aang",
      "katara",
      "aang"
   ],
   "short_url":"https://tmblr.co/ZAAUsxYo1NXmym00",
   "summary":"Weight of the Future - avrelia - Avatar: The Last Airbender [Archive of Our Own]",
   "should_open_in_legacy":true,
   "recommended_source":null,
   "recommended_color":null,
   "note_count":39,
   "title":"Weight of the Future - avrelia - Avatar: The Last Airbender [Archive of Our Own]",
   "url":"https://archiveofourown.org/works/25925881",
   "link_author":"Organization for Transformative Works",
   "excerpt":"An Archive of Our Own, a project of the Organization for Transformative Works",
   "publisher":"archiveofourown.org",
   "description":"<p>\nA quiet conversation between Aang and Katara about the future - and the past that made some futures impossible <br/></p><p>\nI was writing it for the Kataang week 2020 - Day 5, Heritage. But where \nis Kataang week, and where am I now? And why did it took me so long to \nwrite a rather short fic? Because, I guess. Anyway, here it is. </p><p><a class=\"tumblelog\" href=\"https://tmblr.co/mTWYJCYwmx_dqFH6wo0of6Q\">@kataang-week</a><br/></p>",
   "reblog":{
      "comment":"<p>\nA quiet conversation between Aang and Katara about the future - and the past that made some futures impossible <br></p><p>\nI was writing it for the Kataang week 2020 - Day 5, Heritage. But where \nis Kataang week, and where am I now? And why did it took me so long to \nwrite a rather short fic? Because, I guess. Anyway, here it is. </p><p><a class=\"tumblelog\" href=\"https://tmblr.co/mTWYJCYwmx_dqFH6wo0of6Q\">@kataang-week</a><br></p>",
      "tree_html":""
   },
   "trail":[
      {
         "blog":{
            "name":"avrelia",
            "active":true,
            "theme":{
               "header_full_width":1835,
               "header_full_height":956,
               "header_focus_width":1700,
               "header_focus_height":956,
               "avatar_shape":"square",
               "background_color":"#FAFAFA",
               "body_font":"Helvetica Neue",
               "header_bounds":"0,1767,956,67",
               "header_image":"https://64.media.tumblr.com/ee2d8bc26c783a48995a2b6f7a7eaf6b/3cab48aca6d08a22-b9/s1835x956/b7d20fec2237f45e5a7dfc3ab3c99e5cb74d4bf7.jpg",
               "header_image_focused":"https://64.media.tumblr.com/ee2d8bc26c783a48995a2b6f7a7eaf6b/3cab48aca6d08a22-b9/s2048x3072_c3651,0,96294,100000/c208c64b5458d171f1972b61c98057c30b395302.jpg",
               "header_image_poster":"",
               "header_image_scaled":"https://64.media.tumblr.com/ee2d8bc26c783a48995a2b6f7a7eaf6b/3cab48aca6d08a22-b9/s2048x3072/dd54cd3ee33576c22bf183c838d9ad0a6697a384.jpg",
               "header_stretch":true,
               "link_color":"#529ECC",
               "show_avatar":true,
               "show_description":true,
               "show_header_image":true,
               "show_title":true,
               "title_color":"#444444",
               "title_font":"Gibson",
               "title_font_weight":"bold"
            },
            "share_likes":false,
            "share_following":false,
            "can_be_followed":true
         },
         "post":{
            "id":"626569313007108096"
         },
         "content_raw":"<p>\nA quiet conversation between Aang and Katara about the future - and the past that made some futures impossible <br></p><p>\nI was writing it for the Kataang week 2020 - Day 5, Heritage. But where \nis Kataang week, and where am I now? And why did it took me so long to \nwrite a rather short fic? Because, I guess. Anyway, here it is. </p><p><a class=\"tumblelog\" href=\"https://tmblr.co/mTWYJCYwmx_dqFH6wo0of6Q\">@kataang-week</a><br></p>",
         "content":"<p>\nA quiet conversation between Aang and Katara about the future - and the past that made some futures impossible <br /></p><p>\nI was writing it for the Kataang week 2020 - Day 5, Heritage. But where \nis Kataang week, and where am I now? And why did it took me so long to \nwrite a rather short fic? Because, I guess. Anyway, here it is.&nbsp;</p><p><a href=\"https://tmblr.co/mTWYJCYwmx_dqFH6wo0of6Q\">@kataang-week</a><br /></p>",
         "is_current_item":true,
         "is_root_item":true
      }
   ],
   "can_like":false,
   "can_reblog":false,
   "can_send_in_message":true,
   "can_reply":false,
   "display_avatar":true,
   "source":"TUMBLR"
}
```

### Twitter
```
{
   "created_at":"Sat May 01 04:15:49 +0000 2021",
   "id":"twitter-1388346394789007400",
   "id_str":"1388346394789007365",
   "text":"hey, here’s a #kataang #drawing that I did :) https://t.co/PH3E0pzcPC",
   "truncated":false,
   "entities":{
      "hashtags":[
         {
            "text":"kataang",
            "indices":[
               14,
               22
            ]
         },
         {
            "text":"drawing",
            "indices":[
               23,
               31
            ]
         }
      ],
      "symbols":[
         
      ],
      "user_mentions":[
         
      ],
      "urls":[
         
      ],
      "media":[
         {
            "id":1388346391160893400,
            "id_str":"1388346391160893442",
            "indices":[
               46,
               69
            ],
            "media_url":"http://pbs.twimg.com/media/E0Rlr95XMAILYSl.jpg",
            "media_url_https":"https://pbs.twimg.com/media/E0Rlr95XMAILYSl.jpg",
            "url":"https://t.co/PH3E0pzcPC",
            "display_url":"pic.twitter.com/PH3E0pzcPC",
            "expanded_url":"https://twitter.com/112aang/status/1388346394789007365/photo/1",
            "type":"photo",
            "sizes":{
               "thumb":{
                  "w":150,
                  "h":150,
                  "resize":"crop"
               },
               "medium":{
                  "w":1200,
                  "h":1144,
                  "resize":"fit"
               },
               "small":{
                  "w":680,
                  "h":648,
                  "resize":"fit"
               },
               "large":{
                  "w":1384,
                  "h":1319,
                  "resize":"fit"
               }
            }
         }
      ]
   },
   "extended_entities":{
      "media":[
         {
            "id":1388346391160893400,
            "id_str":"1388346391160893442",
            "indices":[
               46,
               69
            ],
            "media_url":"http://pbs.twimg.com/media/E0Rlr95XMAILYSl.jpg",
            "media_url_https":"https://pbs.twimg.com/media/E0Rlr95XMAILYSl.jpg",
            "url":"https://t.co/PH3E0pzcPC",
            "display_url":"pic.twitter.com/PH3E0pzcPC",
            "expanded_url":"https://twitter.com/112aang/status/1388346394789007365/photo/1",
            "type":"photo",
            "sizes":{
               "thumb":{
                  "w":150,
                  "h":150,
                  "resize":"crop"
               },
               "medium":{
                  "w":1200,
                  "h":1144,
                  "resize":"fit"
               },
               "small":{
                  "w":680,
                  "h":648,
                  "resize":"fit"
               },
               "large":{
                  "w":1384,
                  "h":1319,
                  "resize":"fit"
               }
            }
         }
      ]
   },
   "metadata":{
      "iso_language_code":"en",
      "result_type":"recent"
   },
   "source":"TWITTER",
   "in_reply_to_status_id":null,
   "in_reply_to_status_id_str":null,
   "in_reply_to_user_id":null,
   "in_reply_to_user_id_str":null,
   "in_reply_to_screen_name":null,
   "user":{
      "id":1317109899915108400,
      "id_str":"1317109899915108353",
      "name":"hails 🌪",
      "screen_name":"112aang",
      "location":"21 • she/her ",
      "description":"“it’s easy to do nothing, but it’s hard to forgive” - avatar aang 🧡 #kataang",
      "url":"https://t.co/Hi1pH37UcH",
      "entities":{
         "url":{
            "urls":[
               {
                  "url":"https://t.co/Hi1pH37UcH",
                  "expanded_url":"https://linktr.ee/Aang.gaang.112",
                  "display_url":"linktr.ee/Aang.gaang.112",
                  "indices":[
                     0,
                     23
                  ]
               }
            ]
         },
         "description":{
            "urls":[
               
            ]
         }
      },
      "protected":false,
      "followers_count":41,
      "friends_count":21,
      "listed_count":0,
      "created_at":"Fri Oct 16 14:27:37 +0000 2020",
      "favourites_count":1613,
      "utc_offset":null,
      "time_zone":null,
      "geo_enabled":false,
      "verified":false,
      "statuses_count":251,
      "lang":null,
      "contributors_enabled":false,
      "is_translator":false,
      "is_translation_enabled":false,
      "profile_background_color":"F5F8FA",
      "profile_background_image_url":null,
      "profile_background_image_url_https":null,
      "profile_background_tile":false,
      "profile_image_url":"http://pbs.twimg.com/profile_images/1346682316542894086/FqXSs0XG_normal.jpg",
      "profile_image_url_https":"https://pbs.twimg.com/profile_images/1346682316542894086/FqXSs0XG_normal.jpg",
      "profile_banner_url":"https://pbs.twimg.com/profile_banners/1317109899915108353/1615064666",
      "profile_link_color":"1DA1F2",
      "profile_sidebar_border_color":"C0DEED",
      "profile_sidebar_fill_color":"DDEEF6",
      "profile_text_color":"333333",
      "profile_use_background_image":true,
      "has_extended_profile":true,
      "default_profile":true,
      "default_profile_image":false,
      "following":null,
      "follow_request_sent":null,
      "notifications":null,
      "translator_type":"none",
      "withheld_in_countries":[
         
      ]
   },
   "geo":null,
   "coordinates":null,
   "place":null,
   "contributors":null,
   "is_quote_status":false,
   "retweet_count":0,
   "favorite_count":1,
   "favorited":false,
   "retweeted":false,
   "possibly_sensitive":false,
   "lang":"en",
   "date":"2021-05-01T04:15:49.000Z",
   "url":"https://t.co/PH3E0pzcPC",
   "img_urls":[
      "https://pbs.twimg.com/media/E0Rlr95XMAILYSl.jpg"
   ],
   "userProfileLink":"twitter.com/112aang"
}
```

