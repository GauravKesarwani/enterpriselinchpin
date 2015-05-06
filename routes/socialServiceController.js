'use strict';

module.exports = function module() {


    var socialService = require('../services/socialService.js')();


  return {

    getTweets : function getTweets(req, res, next) {
        socialService.getTweets(req.params.id,function onGetTweets(err,data){
            return res.send(JSON.stringify(data));
        })
    },
    getFacebookFeeds:function getFacebookFeeds(req,res,next){
        socialService.getFacebookFeeds(req.params.id,function onGetFeeds(err,data){
            return res.send(JSON.stringify(data));
        });
    },
    getFacebookStats:function getFacebookStats(req,res,next){
        socialService.getFacebookStats(req.params.id,function onGetStats(err,data){
            return res.send(JSON.stringify(data));
        });
    },
    getYouTubeData:function getYouTubeData(req,res,next){
       socialService.getYouTubeData(req.params.id,function onGetYouTubeData(err,data){
           return res.send(JSON.stringify(data));
       }) ;
    },
    getYouTubeVideos:function getYouTubeVideos(req,res,next){
        socialService.getYouTubeVideos(req.params.id,function onGetYouTubeData(err,data){
            return res.send(JSON.stringify(data));
        }) ;
    },
    getLinkedInData:function getLinkedInData(req,res,next){
        socialService.getLinkedInData(function onGetYouTubeData(err){
            return res.redirect('/');
        }) ;
    }




  };
};