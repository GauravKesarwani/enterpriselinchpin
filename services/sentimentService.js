/**
 * Created by nebhavsar on 4/17/15.
 */
/**
 * Created by nebhavsar on 3/28/15.
 */


module.exports = function module() {
    var request = require('request');
    var cheerio = require('cheerio');

    return {
        getSentimentData:function getSentimentData(id,callback){
            var url = "http://socialmention.com/search?q="+id+"&amp;t=all&amp;f=json&amp;metadata=sentiment";
            request(url,function(err,response,html){
                if(!err && response.statusCode == 200){
                    var $ = cheerio.load(html);

                    var sentiment ={positive:"",neutral:"",negative:""};

                    $('.box_segment h4').each(function(index, value){
                        var type = $(this).text();

                        $(this).siblings().each(function(index, value){

                            $(this).children().each(function(index, value){

                                var children = $(this).text().trim().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                                var childArray = children.split(",");

                                if(type == "Sentiment"){

                                    if(childArray[0] == "positive"){
                                        sentiment.positive = childArray[2].trim();
                                    }else if(childArray[0] == "neutral"){
                                        sentiment.neutral = childArray[2].trim();
                                    }else{
                                        sentiment.negative = childArray[2].trim();
                                    }
                                }

                            });
                        });
                    });
                    var sentimentData = {
                        sentiment: sentiment

                    };

                    console.log("Sentiment: "+JSON.stringify(sentiment));

                    callback(null, sentimentData);

                }
            });
        },getTopKeywords:function getTopKeywords(id,callback){
            var url = "http://socialmention.com/search?q="+id+"&amp;t=all&amp;f=json&amp;metadata=sentiment";
            request(url,function(err,response,html){
                if(!err && response.statusCode == 200){

                    var $ = cheerio.load(html);
                    var topKeywordsArray ={topKeywords:[]};


                    $('.box_segment h4').each(function(index, value){
                        var type = $(this).text();

                        $(this).siblings().each(function(index, value){

                            $(this).children().each(function(index, value){

                                var children = $(this).text().trim().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                                var childArray = children.split(",");
                                if(type =="Top Keywords"){
                                    var temp = {
                                        name:childArray[0],
                                        value:childArray[2].trim()
                                    };
                                    //temp[childArray[0]] = childArray[2].trim();
                                    topKeywordsArray.topKeywords.push(temp);
                                }


                            });
                        });
                    });
                    var topKeywordsData = {
                        top_keywords:topKeywordsArray

                    };
                    console.log("Top Keywords: "+JSON.stringify(topKeywordsArray));
                    callback(null, topKeywordsData);

                }
            });
        },getTopUsers:function getTopUsers(id,callback){
            var url = "http://socialmention.com/search?q="+id+"&amp;t=all&amp;f=json&amp;metadata=sentiment";
            request(url,function(err,response,html){
                if(!err && response.statusCode == 200){

                    var $ = cheerio.load(html);
                    var topUsersArray = {topUsers:[]};


                    $('.box_segment h4').each(function(index, value){
                        var type = $(this).text();

                        $(this).siblings().each(function(index, value){

                            $(this).children().each(function(index, value){

                                var children = $(this).text().trim().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                                var childArray = children.split(",");
                                if(type =="Top Users"){

                                    var temp = {
                                        name:childArray[0],
                                        value:childArray[2].trim()
                                    };
                                    //temp[childArray[0]] = childArray[2].trim();
                                    topUsersArray.topUsers.push(temp);
                                }


                            });
                        });
                    });
                    var topUsersData = {
                        top_users:topUsersArray

                    };
                    console.log("Top Users: "+JSON.stringify(topUsersData));
                    callback(null, topUsersData);

                }
            });
        },getTopHashTags:function getTopHashTags(id,callback){
            var url = "http://socialmention.com/search?q="+id+"&amp;t=all&amp;f=json&amp;metadata=sentiment";
            request(url,function(err,response,html){
                if(!err && response.statusCode == 200){

                    var $ = cheerio.load(html);
                    var topHashTagsArray = {topHashTags:[]};

                    $('.box_segment h4').each(function(index, value){
                        var type = $(this).text();

                        $(this).siblings().each(function(index, value){

                            $(this).children().each(function(index, value){

                                var children = $(this).text().trim().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                                var childArray = children.split(",");
                                if(type =="Top Hashtags"){
                                    var temp = {
                                        name:childArray[0],
                                        value:childArray[2].trim()
                                    };
                                    //temp[childArray[0]] = childArray[2].trim();
                                    topHashTagsArray.topHashTags.push(temp);
                                }

                            });
                        });
                    });
                    var topHashtagsData = {
                        top_hashtags:topHashTagsArray

                    };
                    console.log("Top Hashtags: "+JSON.stringify(topHashtagsData));
                    callback(null, topHashtagsData);

                }
            });
        },getSentimentStats:function getSentimentStats(id,callback){
            var url = "http://socialmention.com/search?q="+id+"&amp;t=all&amp;f=json&amp;metadata=sentiment";
            request(url,function(err,response,html){
                if(!err && response.statusCode == 200){
                    var $ = cheerio.load(html);
                    var positive,neutral,negative;
                    var percentageJson = {strength:"",sentiment:"",passion:"",reach:""};

                    percentageJson.strength = $('.score','#score_strength').text();
                    percentageJson.sentiment = $('.score','#score_sentiment').text();
                    percentageJson.passion = $('.score','#score_passion').text();
                    percentageJson.reach = $('.score','#score_reach').text();

                    console.log("Percentage Data: "+JSON.stringify(percentageJson));

                    var socialStatsJson = [] ;
                    var socialStats = $('.box','#column_left').text().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                    var arr = socialStats.split(",");
                    for(var i in arr){
                        if(arr[i] != "")
                            socialStatsJson.push(arr[i])

                    }

                    console.log("Social Stats: "+JSON.stringify(socialStatsJson));

                    var sentimentStats = {
                        percentageData: percentageJson,
                        socialStats:socialStatsJson
                    }
                    callback(null, sentimentStats);

                }
            });
        }
    }

}