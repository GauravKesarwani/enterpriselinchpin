/**
 * Created by nebhavsar on 3/9/15.
 */
'use strict'

module.exports = function module() {
    var Twitter = require('twitter');
    var YQL = require('yql');
    var LinkedIn = require('node-linkedin')('75yvysvkqi40ox','li5H6j8nwtRKCmwy','https://localhost:3000/')
    var fbsdk = require('facebook-sdk');

    var client = new Twitter({
        consumer_key: 'AXhgqqKAt5Tl3UxUpkkS9F4QL',
        consumer_secret: 'OfWEnm5y3DdA7G5phJWlhwcmx5ZoOrhgOaXUxZaz5tB54Ecm75',
        access_token_key: '111872995-Uq7VVxQn6dJJ6yb3B6QHNZSU3KAh4MAib2LWy7Wv',
        access_token_secret: 'G1lgH8CT8xlmRcj6rdr0vz8T82Tq6WJs3ioYhon020tVz'
    });

    var facebook = new fbsdk.Facebook({
        appId  : '1572072473051725',
        secret : '52bf47945499b751d6123d9720df1d84'
    });


    return{
        getTweets:function getTweets(id,next){

            var params = {screen_name: id};
             //var dbObject = dbService;
             client.get('statuses/user_timeline', params, function(error, tweets, response) {
                 if (!error) {
                     //console.log(tweets);
                     var tweetsData = tweets;

                     var tweets = [];
                     for (var i = 0; i < tweetsData.length; i++) {
                         //console.log('Tweet: ' + tweetsData[i].text);
                         tweets.push(tweetsData[i].text);
                     }
                     var twitterData = [];
                     twitterData.push({
                         companyName:tweetsData[0].user.screen_name,
                         followerCount:tweetsData[0].user.followers_count,
                         following:tweetsData[0].user.friends_count,
                         favourites_count:tweetsData[0].user.favourites_count,
                         tweets:tweets
                     });
                     next(null,twitterData);

                 }

             });


        },
        getFacebookFeeds:function getFacebookFeeds(name,next){
            var uri = "/"+name+"/posts";
            facebook.api(uri, function (res) {

                var facebookFeeds = [];
                for(var i=0;i<10;i++){

                    var feed = {

                        //message:res.data[i].message,
                        picture:res.data[i].picture,
                        link:res.data[i].link
                    }
                    facebookFeeds.push(feed);
                }
                next(null,facebookFeeds);
            });


        },getFacebookStats:function getFacebookStats(name,next){
            var uri = "/"+name;
            facebook.api(uri, function(data) {
                var facebookstats = {
                    likes:data.likes,
                    coverphoto:data.cover.source,
                    link:data.link,
                    website:data.website,
                    checkins:data.checkins,
                    talking_about_count:data.talking_about_count
                };
                next(null,facebookstats);

            });
        }
        ,getYouTubeData:function getYouTubeData(id,next){
            var youTubeQuery = "select * from youtube.user where id='"+id+"'";

            var query = new YQL(youTubeQuery);

            query.exec(function(err, data) {
                var youTubeStats = {
                    title :data.query.results.user.title,
                    thumbnail : data.query.results.user.thumbnail,
                    subscriber : data.query.results.user.statistics.subscribers,
                    totalviews : data.query.results.user.statistics.totalviews
                }
               next(null,youTubeStats);
            });

        },getYouTubeVideos:function getYouTubeData(id,next){
            var youTubeQuery = "select * from youtube.user.videos where id='"+id+"'";

            var query = new YQL(youTubeQuery);

            query.exec(function(err, data) {

                var videoArray =[];
                var videoData = data.query.results.video;

                for(var i=0;i< 10;i++){
                    var video = {
                        url:videoData[i].url,
                        title:videoData[i].title,
                        content:videoData[i].content,
                        thumbnail:videoData[i].thumbnails.thumbnail[3].content
                    }
                    videoArray.push(video);
                }
                next(null,videoArray);
            });

        },
        getLinkedInData:function getLinkedInData(){
            var linkedin = LinkedIn.init('e2e2d3c1-3722-4901-8b27-8b9ca1b7ce6f');
            linkedin.companies.name('logica', function(err, company) {
                // Here you go
                console.log("data: "+company.id);
            });
        }
    }
}
