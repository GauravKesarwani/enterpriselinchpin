/**
 * Created by nebhavsar on 3/28/15.
 */

'use strict'

module.exports = function module(){
    var service = require('../services/sentimentService.js')();
    return {
        getSentimentData : function getSentimentData(req,res,next){
            service.getSentimentData(req.params.id,function onData(err,data){
                res.send(JSON.stringify(data));

            });
        },getTopKeywords : function getTopKeywords(req,res,next){
            service.getTopKeywords(req.params.id,function onData(err,data){
                res.send(JSON.stringify(data));

            });
        },getTopUsers : function getTopUsers(req,res,next){
            service.getTopUsers(req.params.id,function onData(err,data){
                res.send(JSON.stringify(data));

            });
        },getTopHashTags : function getTopHashTags(req,res,next){
            service.getTopHashTags(req.params.id,function onData(err,data){
                res.send(JSON.stringify(data));

            });
        },getSentimentStats: function getSentimentStats(req,res,next) {
            service.getSentimentStats(req.params.id, function onData(err, data) {
                res.send(JSON.stringify(data));

            });
        }
    }
}
