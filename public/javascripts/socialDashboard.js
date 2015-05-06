/**
 * Created by nebhavsar on 4/4/15.
 */
$(document).ready(function() {
    var companyName = localStorage.getItem('companyName');

    //console.log("Company: "+companyName);
    var imageName = "images/"+companyName+".jpg";
    $("#companyImage").attr("src",imageName);
    console.log("Compnay Name:"+companyName);
    socialAjax.getTwitter(companyName);
    socialAjax.getFacebookFeeds(companyName);
    socialAjax.getFacebookStats(companyName);
    socialAjax.getYouTubeStats(companyName);
    socialAjax.getYouTubeVideos(companyName);
    sentimentAjax.getSentimentData(companyName);
});

function populateTweets(data, textStatus, jqXHR){
    var data = JSON.parse(data)[0];
    console.log("Twitter Data: "+data.companyName);
    $("#twitter_followers").text(data.followerCount);
    $("#twitter_following").text(data.following);
    $("#twitter_favourites").text(data.favourites_count);
    var tweetsArray = data.tweets;
    for(var i=0;i<tweetsArray.length;i++){
        var tweet="<li><h4><i class=\"icon-twitter\"></i>"+
        tweetsArray[i]+"</h4></li>";
        $("#tweets").append(tweet);
    }
}

function populateFacebookFeeds(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    console.log("Facebook Feeds: "+data.length);
    for(var i=0;i<data.length;i++){
        var feed="<li>" +
                "<img src="+data[i].picture+" />"+
                "<a href="+data[i].link+"><i class=\" icon-facebook\"></i>"+
                data[i].link+"</a></li>";

        $("#facebookfeeds").append(feed);
    }

}

function populateFacebookStats(data, textStatus, jqXHR){
    var data = JSON.parse(data);

    $("#fb_likes").text(data.likes);
    $("#fb_checkins").text(data.checkins);
    $("#fb_taking_about_count").text(data.talking_about_count);
}

function populateYouTubeStats(data, textStatus, jqXHR){
    var data = JSON.parse(data);

    $("#youtube_subscriber").text(data.subscriber);
    $("#youtube_totalviews").text(data.totalviews);

}

function populateYouTubeVideos(data, textStatus, jqXHR){
    var data = JSON.parse(data);
   /* for(var i=0;i<data.length;i++){
        var video = "<iframe style=\"margin-left:10%\" width=\"30%\" height=\"30%\"  frameborder=\"0\" allowfullscreen src="+data[i].url+"></iframe>"
        $("#youTubeVideos").append(video);
    }*/
    for(var i=0;i<data.length;i++){
        console.log("Content: "+data[i].content);
        if(data[i].content == null){
            data[i].content = "";
        }
        var video="<li>" +
            "<img src="+data[i].thumbnail+" />"+
            "<a href="+data[i].url+"><i class=\" icon-facetime-video\"></i>"+
            data[i].content+"</a></li>";

        $("#youTubeVideos").append(video);
    }
    //<iframe id ="movieTrailer" style="margin-left:10%" width="80%" height="100%"  frameborder="0" allowfullscreen></iframe>
}

function populateSentimentData(data, textStatus, jqXHR){
    var data = JSON.parse(data);



}