/**
 * Created by nebhavsar on 4/12/15.
 */
var companyName;
$(document).ready(function() {
    companyName = localStorage.getItem('companyName');
    var imageName = "images/"+companyName+".jpg";
    $("#companyImage").attr("src",imageName);
    $("#usernameUI").text(localStorage.getItem('username'));
    var dashboardID = localStorage.getItem('dashboardId');
    if(dashboardID != null) {
        dashboardAjax.getDashboardDetailByID(localStorage.getItem('dashboardId'),localStorage.getItem('user_id'));
    }


    $("a").click(function () {
       var classes = $(this).attr('class');
        console.log("Classes clicked: "+classes);
        if(classes =="btn purple-stripe"){ //handle widget add
            updateUserDashboard($(this).attr('id'));
        }
        if(classes =="icon-remove"){
            /* Delete Dashboard*/
            dashboardAjax.deleteDashboard(localStorage.getItem('dashboardId'));
        }

        if(classes =="icon-cog"){

            $("#updateDashboardName").val($("#filterTextField").val());
        }
    });



});

function populateDashboardByID(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var widgetArray = data.widgets;

    for(var i=0;i<widgetArray.length;i++){
        renderWidgets(widgetArray[i]);
    }
}


function faceBookFeeds(){
    var fbFeeds  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box purple\" id=\"fbFeeds_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-facebook-sign\"></i>Facebook Feeds"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body wrap_space\">"+
        "<ul style=\"list-style-type: none;\" id=\"facebookfeeds\">"+

        " </ul>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(fbFeeds);

    //populate the data
    socialAjax.getFacebookFeeds(companyName);
}
function faceBookStats(){
    var fbStats  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box purple\" id=\"fbStats_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-facebook-sign\"></i>Facebook Stats"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\">"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"fb_likes\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Likes</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"fb_checkins\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Checkins</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"fb_taking_about_count\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Taking About</b>"+
        "</div>"+
        "</a>"+

        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(fbStats);

    //populate the data
    socialAjax.getFacebookStats(companyName);
}
function twitterTweets(){
    var twitterFeeds  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box blue\" id=\"twitterTweets_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-twitter\"></i>Twitter Tweets"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body wrap_space\">"+
        "<ul style=\"list-style-type: none;\" id=\"tweets\">"+

        " </ul>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(twitterFeeds);

    //populate the data
    socialAjax.getTwitterFeeds(companyName);
};
function twitterStats(){
    var twitterStats  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box blue\" id=\"twitterStats_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-twitter\"></i>Twitter Stats"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\">"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"twitter_followers\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Followers</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"twitter_following\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Following</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"twitter_favourites\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Favourites</b>"+
        "</div>"+
        "</a>"+

        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(twitterStats);

    //populate the data
    socialAjax.getTwitterStats(companyName);

};
function youTubeFeeds(){
    var youTubeFeeds  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box red\" id=\"youTubeFeeds_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-facetime-video\"></i>YoutTube Feeds"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body wrap_space\">"+
        "<ul style=\"list-style-type: none;\" id=\"youTubeVideos\">"+

        " </ul>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(youTubeFeeds);

    //populate the data
    socialAjax.getYouTubeVideos(companyName);
}

function youTubeStats(){
    var youTubeStats  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box red\" id='youTubeStats_Div'>"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-play\"></i>YouTube Stats"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\">"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"youtube_subscriber\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Subscribers</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"youtube_totalviews\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Total Views</b>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(youTubeStats);

    //populate the data
    socialAjax.getYouTubeStats(companyName);
}
function revenueYtd(){
    var revenueYtd  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box yellow\" id=\"revenueYtd_Div\">"+
            "<div class=\"portlet-title\">"+
                "<h4>"+
                    "<i class=\"icon-bar-chart\"></i>Revenue YTD"+
                "</h4>"+
                "<div class=\"tools\">"+
                    "<a href=\"#\" class=\"collapse\"></a> " +
                    "<a href=\"#\" class=\"remove\"></a>"+
                "</div>"+
            "</div>"+
            "<div class=\"portlet-body\">"+
                "<div class=\"row-fluid\" id=\"revenue\" >"+


                "</div>"+
            "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(revenueYtd);
    financeDashboard.getRevenueYTDChart();

    portletTools();
}
function globalFinancePerf(){
    var globalFinancePerf  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box grey\" id='globalFinancePerf_Div'>"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Global Financial Performance"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"globalFinancialPerf\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(globalFinancePerf);
    financeDashboard.getGlobalPerfChart();

    portletTools();
}
function shortTermAssets(){
    var shortTermAssets  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box grey\" id=\"shortTermAssets_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Short Term Assest"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"shortTermAssest\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(shortTermAssets);
    financeDashboard.getShortTermAssest();

    portletTools();
}

function currentStocks(){
    var stockSymbol = localStorage.getItem('stockSymbol');
    var url = "https://chart.finance.yahoo.com/t?s="+stockSymbol+"&amp;lang=en-US&amp;region=US&amp;width=500&amp;height=280%22";
    var currentStocks  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box red\" id=\"currentStocks_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Current Stocks"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
            "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(currentStocks);
    portletTools();
}

function topRevenueProducts(){
    var topRevenueProducts  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box green\" id=\"topRevenueProducts_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Top Revenue Products"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"topProductInRevenue\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(topRevenueProducts);
    retailDashboard.topProductInRevenue();

    portletTools();
}
function onlineInStore(){
    var onlineInStore  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box yellow\" id=\"onlineInstore_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Online vs Instore"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"onlineInStorePurchase\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(onlineInStore);
    retailDashboard.onlineInStorePurchase();

    portletTools();
}

function moneyFlowIndex(){
    var stockSymbol = localStorage.getItem('stockSymbol');
    var url = "https://chart.finance.yahoo.com/z?s="+stockSymbol+"&t=6m&q=l&l=on&z=m&p=m50,e200,v&a=f14&c=%5EDJI,EURUSD=X&region=US";
    var moneyFlowIndex  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box purple\" id=\"moneyFlowIndex_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Money Flow Index"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
        "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(moneyFlowIndex);
    portletTools();
}

function rateOfChange(){
    var stockSymbol = localStorage.getItem('stockSymbol');
    var url = "https://chart.finance.yahoo.com/z?s="+stockSymbol+"&t=6m&q=l&l=on&z=m&p=m50,e200,v&a=p12&c=%5EDJI,EURUSD=X&region=US";
    var rateOfChange  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box green\" id=\"rateOfChange_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Rate Of Change"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
        "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(rateOfChange);
    portletTools();
}

function relativeStrength(){
    var stockSymbol = localStorage.getItem('stockSymbol');
    var url = "https://chart.finance.yahoo.com/z?s="+stockSymbol+"&t=6m&q=l&l=on&z=m&p=m50,e200,v&a=r14&c=%5EDJI,EURUSD=X&region=US";
    var relativeStrength  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box grey\" id=\"relativeStrength_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Relative Strength Index"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
        "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(relativeStrength);
    portletTools();
}

function nasdaq(){

    var url = "https://chart.finance.yahoo.com/v?s=%5eIXIC&lang=en-US&region=US&width=600&height=280";
    var nasdaq  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box yellow\" id=\"nasdaq_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>NASDAQ"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
        "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(nasdaq);
    portletTools();
}

function dow(){

    var url = "https://chart.finance.yahoo.com/v?s=%5eDJI&lang=en-US&region=US&width=600&height=280";
    var dow  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box blue\" id=\"dow_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Dow Jones Industrial Average (DOW)"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\" style='height: 300px;'>"+

        "<iframe src="+url+" width=\"100%\" height=\"100%;\">"+
        "<p>Your browser does not support iframes.</p>"+
        "</iframe>"+

        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(dow);
    portletTools();
}

function sentimentAnalysis(){
    var sentimentAnalysis  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box yellow\" id=\"sentimentAnalysis_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Sentiment Analysis"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"sentimentGraph\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(sentimentAnalysis);

    sentimentAjax.getSentimentData(localStorage.getItem('companyName'));
    portletTools();
}

function topUsers(){
    var topUsers  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box grey\" id=\"topUsers_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Top Users on Social Media"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"topUsersChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(topUsers);

    sentimentAjax.getTopUsers(localStorage.getItem('companyName'));
    portletTools();
}

function topKeywords(){
    var topKeywords  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box green\" id=\"topKeywords_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Top Keywords on Social Media"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"topKeywordsChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(topKeywords);

    sentimentAjax.getTopKeywords(localStorage.getItem('companyName'));
    portletTools();
}

function topHashtags(){
    var topHashtags  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box blue\" id=\"topHashtags_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Top Hashtags on Social Media"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"topHashtagsChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(topHashtags);

    sentimentAjax.getTopHashtags(localStorage.getItem('companyName'));
    portletTools();
}


function socialStats(){
    var socialStats  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box purple\" id=\"socialStats_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bullhorn\"></i>Social Mention Stats"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\">"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"strength\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Strength</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"sentimentRatio\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Sentiment</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"passion\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Passion</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span3\">"+
        "<i class=\"\" id=\"reach\"></i>"+
        "<div>"+
        "<b style=\"color: maroon\">Reach</b>"+
        "</div>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span6\" style='margin: 0px;padding-left: 0px;padding-right: 0px;'>"+
        "<i class=\"\" id=\"perMention\"></i>"+
        "</a>"+
        "<a href=\"#\" class=\"icon-btn span6\" style='margin: 0px;padding-left: 0px;padding-right: 0px;'>"+
        "<i class=\"\" id=\"lastMention\"></i>"+
        "</a>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(socialStats);

    //populate the data
    sentimentAjax.getSentimentStats(localStorage.getItem('companyName'));
    portletTools();
}
function balanceSheet(){
    var balanceSheet  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box red\" id=\"balanceSheet_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Balance Sheet"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"balanceSheetChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(balanceSheet);
    userajax.getCompanyBalanceSheet(localStorage.getItem('companyName'));

    portletTools();
}

function incomeStatement(){
    var incomeStatement  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box purple\" id=\"incomeStatement_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Income Statement"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"incomeStatementChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(incomeStatement);
    userajax.getCompanyIncomeStatement(localStorage.getItem('companyName'));

    portletTools();
}

function cashFlow(){
    var cashFlow  = "<div class=\"span6 column sortable\" style='padding-left: 30px;margin: 0px'>"+
        "<div class=\"portlet box yellow\" id=\"cashFlow_Div\">"+
        "<div class=\"portlet-title\">"+
        "<h4>"+
        "<i class=\"icon-bar-chart\"></i>Cash Flow"+
        "</h4>"+
        "<div class=\"tools\">"+
        "<a href=\"#\" class=\"collapse\"></a> " +
        "<a href=\"#\" class=\"remove\"></a>"+
        "</div>"+
        "</div>"+
        "<div class=\"portlet-body\">"+
        "<div class=\"row-fluid\" id=\"cashFlowChart\" >"+


        "</div>"+
        "</div>"+
        "</div>";

    //add Portlet to the div
    $("#sortable_portlets").append(cashFlow);
    userajax.getCompanyCashFlow(localStorage.getItem('companyName'));

    portletTools();
}

function updateUserDashboard(id){
    //get the current dashboard id
    var dashboardID = localStorage.getItem('dashboardId');
    var updatedUserDashboard = {
        "widgets":id
    };

    //update the user dasboards's widgets in the database
    dashboardAjax.updateUserDashboard(updatedUserDashboard,dashboardID);

    console.log("ID: "+id);
    //render the widget on to the screen
    renderWidgets(id);

}

function renderWidgets(id){
    switch(id){
        case 'fbFeeds':faceBookFeeds();
            break;
        case 'fbStats':faceBookStats();
            break;
        case 'twitterTweets': twitterTweets();
            break;
        case 'twitterStats':twitterStats();
            break;
        case 'youTubeFeeds':youTubeFeeds();
            break;
        case 'youTubeStats':youTubeStats();
            break;
        case 'revenueYtd':revenueYtd();
            break;
        case 'globalFinancePerf':globalFinancePerf();
            break;
        case 'shortTermAssets':shortTermAssets();
            break;

        case 'currentStocks':currentStocks();
            break;
        case 'balanceSheet':balanceSheet();
            break;
        case 'incomeStatement':incomeStatement();
            break;
        case 'cashFlow':cashFlow();
            break;
        case 'topRevenueProducts':topRevenueProducts();
            break;
        case 'onlineInstore':onlineInStore();
            break;
        case 'moneyFlowIndex':moneyFlowIndex();
            break;
        case 'rateOfChange':rateOfChange();
            break;
        case 'relativeStrength':relativeStrength();
            break;
        case 'nasdaq':nasdaq();
            break;
        case 'dow':dow();
            break;
        case 'sentimentAnalysis':sentimentAnalysis();
            break;
        case 'topUsers':topUsers();
            break;
        case 'topHashtags':topHashtags();
            break;
        case 'topKeywords':topKeywords();
            break;
        case 'socialStats':socialStats();
            break;
    }
}

function populateUpdatedUserDashboard(data, textStatus, jqXHR){

}


function populateTwitterFeeds(data, textStatus, jqXHR){
    var data = JSON.parse(data)[0];

    var tweetsArray = data.tweets;
    for(var i=0;i<tweetsArray.length;i++){
        var tweet="<li><h4><i class=\"icon-twitter\"></i>"+
            tweetsArray[i]+"</h4></li>";
        $("#tweets").append(tweet);

    }
    portletTools();
}
function populateTwitterStats(data, textStatus, jqXHR){
    var data = JSON.parse(data)[0];

    $("#twitter_followers").text(data.followerCount);
    $("#twitter_following").text(data.following);
    $("#twitter_favourites").text(data.favourites_count);
    portletTools();
}



function populateFacebookFeeds(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    //console.log("Facebook Feeds: "+data.length);
    for(var i=0;i<data.length;i++){
        var feed="<li>" +
            "<img src="+data[i].picture+" /> <br>"+
            "<a href="+data[i].link+"><i class=\" icon-facebook\"></i>"+
            data[i].link+"</a></li>";

        $("#facebookfeeds").append(feed);
    }
    portletTools();
}

function populateFacebookStats(data, textStatus, jqXHR){
    var data = JSON.parse(data);

    $("#fb_likes").text(data.likes);
    $("#fb_checkins").text(data.checkins);
    $("#fb_taking_about_count").text(data.talking_about_count);
    portletTools();

}

function populateYouTubeStats(data, textStatus, jqXHR){
    var data = JSON.parse(data);

    $("#youtube_subscriber").text(data.subscriber);
    $("#youtube_totalviews").text(data.totalviews);
    portletTools();

}

function populateYouTubeVideos(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    /* for(var i=0;i<data.length;i++){
     var video = "<iframe style=\"margin-left:10%\" width=\"30%\" height=\"30%\"  frameborder=\"0\" allowfullscreen src="+data[i].url+"></iframe>"
     $("#youTubeVideos").append(video);
     }*/
    for(var i=0;i<data.length;i++){

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
    portletTools();
}

/* Handel portlet toggel and remove*/

function portletTools(){
    $("a").unbind("click").click(function () {

        var classes = $(this).attr('class');
        console.log("Classes: " + classes);

        var parentPortlet = $(this).parents(".portlet").children(".portlet-body");
        if (classes == "collapse") {
            $(this).removeClass("collapse").addClass("expand");
            parentPortlet.slideUp(200);
        } else if (classes == "expand") {
            $(this).removeClass("expand").addClass("collapse");
            parentPortlet.slideDown(200);
        }if(classes =="btn purple-stripe"){ //handle widget add
            updateUserDashboard($(this).attr('id'));
        }
        if(classes =="icon-remove"){
            /* Delete Dashboard*/
            dashboardAjax.deleteDashboard(localStorage.getItem('dashboardId'));
        }

        if(classes =="icon-cog"){

            $("#updateDashboardName").val($("#filterTextField").val());
        }
    });

    $(".portlet .tools a.remove").unbind("click").click(function () {
        var removable = $(this).parents(".portlet");

        if (removable.next().hasClass('portlet') || removable.prev().hasClass('portlet')) {
            //$(this).parents(".portlet").remove();
        } else {
            //$(this).parents(".portlet").parent().remove();
        }
        //delete the widget from the user dashboard
        var widgetId= removable.attr('id').substr(0,removable.attr('id').indexOf("_"));
        dashboardAjax.deleteDashboardWidgets(widgetId,localStorage.getItem('dashboardId'));
    });
}
/* Populate the Social mention response*/
function populateSentimentData(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var sentimentData = [{y:parseInt(data.sentiment.positive),color:'#008000'},{y:parseInt(data.sentiment.neutral),color:'#1589FF'},{y:parseInt(data.sentiment.negative),color:'red'}];
    sentimentDashboard.getSentimentGraph(sentimentData);
}
/* Populate the Top User response*/
function populateTopUsers(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var topUsersData = [];
    data = data.top_users.topUsers;
    for(var i=0;i<data.length;i++){

        topUsersData.push([data[i].name,parseInt(data[i].value)]);
    }
    sentimentDashboard.getTopUsers(topUsersData);
}

/* Populate the Top Keywords response*/
function populateTopKeywords(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var topKeywordsData = [];
    data = data.top_keywords.topKeywords;
    for(var i=0;i<data.length;i++){

        topKeywordsData.push([data[i].name,parseInt(data[i].value)]);
    }
    sentimentDashboard.getTopKeywords(topKeywordsData);
}

/* Populate the Top Hashtags response*/
function populateTopHashtags(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var topHashtagsData = [];
    data = data.top_hashtags.topHashTags;
    for(var i=0;i<data.length;i++){

        topHashtagsData.push([data[i].name,parseInt(data[i].value)]);
    }
    sentimentDashboard.getTopHashtags(topHashtagsData);
}

/* Populate the Social Mention response*/
function populateSentimentStats(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    var percentageData = data.percentageData;
    var socialStats = data.socialStats;
    console.log("Strength: "+percentageData.sentiment);
    console.log("Last mention: "+socialStats[0]);

    $("#strength").text(percentageData.strength);
    $("#sentimentRatio").text(percentageData.sentiment);
    $("#passion").text(percentageData.passion);
    $("#reach").text(percentageData.reach);

    $("#perMention").text(socialStats[0]);
    $("#lastMention").text(socialStats[1]);
}
/* Populate the Company Income Statement response*/
function populateCompanyIncomeStatement(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    if(data != undefined){
        financeDashboard.getCompanyIncomeStatementChart(data[0].data,data[1].data,data[2].data,data[3].data);
    }
}

/* Populate the Company Balance Sheet response*/
function populateCompanyBalanceSheet(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    if(data != undefined){
        financeDashboard.getCompanyBalanceSheetChart(data[0].data,data[1].data,data[2].data);
    }
}

/* Populate the Company Cash Flow response*/
function populateCompanyCashFlow(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    if(data != undefined){
        financeDashboard.getCompanyCashFlowChart(data[0].data,data[1].data,data[2].data,data[3].data);
    }
}