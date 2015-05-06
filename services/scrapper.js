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
                    var sentiment ={positive:"",neutral:"",negative:""};
                    var topKeywordsArray ={topKeywords:[]};
                    var topUsersArray = {topUsers:[]};
                    var topHashTagsArray = {topHashTags:[]};
                    var sourcesArray = {sources:[]};

                    $('.box_segment h4').each(function(index, value){
                        var type = $(this).text();

                        $(this).siblings().each(function(index, value){

                            $(this).children().each(function(index, value){

                                var children = $(this).text().trim().replace(/(\r\n|\n|\r\n|\r)/gm,",").trim();
                                var childArray = children.split(",");

                               // for(var i = 0;i<childArray.length; i++){

                                    if(type == "Sentiment"){

                                        if(childArray[0] == "positive"){
                                            sentiment.positive = childArray[2].trim();
                                        }else if(childArray[0] == "neutral"){
                                            sentiment.neutral = childArray[2].trim();
                                        }else{
                                            sentiment.negative = childArray[2].trim();
                                        }
                                    }else if(type =="Top Keywords"){
                                        var temp = {};
                                        temp[childArray[0]] = childArray[2].trim();
                                        topKeywordsArray.topKeywords.push(temp);
                                    }else if(type =="Top Users"){
                                        var temp = {};
                                        temp[childArray[0]] = childArray[2].trim();
                                        topUsersArray.topUsers.push(temp);
                                    }else if(type =="Top Hashtags"){
                                        var temp = {};
                                        temp[childArray[0]] = childArray[2].trim();
                                        topHashTagsArray.topHashTags.push(temp);
                                    }else if(type =="Sources"){
                                        var temp = {};
                                        temp[childArray[0]] = childArray[2].trim();
                                        sourcesArray.sources.push(temp);
                                    }
                               // }

                            });
                        });
                    });
                    var sentimentData = {
                        sentiment: sentiment,
                        top_keywords:topKeywordsArray,
                        top_hashtags:topHashTagsArray,
                        top_users:topUsersArray,
                        top_source:sourcesArray
                    };

                    console.log("Sentiment: "+JSON.stringify(sentiment));
                    console.log("Top Keywords: "+JSON.stringify(topKeywordsArray));
                    console.log("Top Users: "+JSON.stringify(topUsersArray));
                    console.log("Top HashTags: "+JSON.stringify(topHashTagsArray));
                    console.log("Top Sources: "+JSON.stringify(sourcesArray));
                    callback(null, sentimentData);

                }
            });
        },getToKeywords:function getSentimentData(id,callback){
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
                                                                                  var temp = {};
                                                                                  temp[childArray[0]] = childArray[2].trim();
                                                                                  topKeywordsArray.topKeywords.push(temp);
                                                                              }


                                      });
                                  });
                              });
                              var sentimentData = {
                                top_keywords:topKeywordsArray,

                              };

                              callback(null, sentimentData);

                          }
                      });
                  }
    }

}