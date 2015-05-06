/**
 * Created by nebhavsar on 4/3/15.
 */
var userajax = (function (){
    return{
        getCompanyDetail:function(name){
            var uri='/users/companyDetail/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:redirectToLoginPage
            });
        },sign:function(user){
            var uri = '/users/signin';
            $.ajax({
                type:'POST',
                contentType:'application/json',
                data:JSON.stringify(user),
                url:uri,
                success:redirectToHomePage
            });
        },getCompanyIncomeStatement:function(name){
            var uri='/users/companyDetail/incomeStatement/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateCompanyIncomeStatement
            });
        },getCompanyBalanceSheet:function(name){
            var uri='/users/companyDetail/balanceSheet/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateCompanyBalanceSheet
            });
        },getCompanyCashFlow:function(name){
            var uri='/users/companyDetail/cashFlow/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateCompanyCashFlow
            });
        }
    };
})();

var socialAjax = (function (){
    return{
        getTwitterFeeds:function(name){
            var uri='/getTweets/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateTwitterFeeds
            });
        },getTwitterStats:function(name){
            var uri='/getTweets/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateTwitterStats
            });
        }, getFacebookFeeds:function(name){
            var uri='/getFacebookFeeds/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateFacebookFeeds
            });
        }, getFacebookStats:function(name){
            var uri='/getFacebookStats/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateFacebookStats
            });
        }, getYouTubeStats:function(name){
            var uri='/getYouTubeData/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateYouTubeStats
            });
        }, getYouTubeVideos:function(name){
            var uri='/getYouTubeVideos/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateYouTubeVideos
            });
        }
    };
})();

var financeAjax = (function (){
    return{
        getStockData:function(name){
            var uri='/getStockData/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateStockData
            });
        },getHistoricalData:function(name,startDate,endDate){
            var uri='/getHistoricalData/'+name+'/'+startDate+'/'+endDate;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateHistoricalData
            });
        }
    };
})();

var sentimentAjax = (function (){
    return{
        getSentimentData:function(name){
            var uri='/getSentimentData/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateSentimentData
            });
        },getSentimentStats:function(name){
            var uri='/getSentimentStats/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateSentimentStats
            });
        },getTopKeywords:function(name){
            var uri='/getTopKeywords/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateTopKeywords
            });
        },getTopUsers:function(name){
            var uri='/getTopUsers/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateTopUsers
            });
        },getTopHashtags:function(name){
            var uri='/getTopHashtags/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateTopHashtags
            });
        }
    };
})();

var dashboardAjax = (function (){
    return{
        addDashboard:function(dashboard){
            var uri = '/users/dashboard';
            $.ajax({
                type:'POST',
                contentType:'application/json',
                data:JSON.stringify(dashboard),
                url:uri,
                success:addDashboardResponse
            });
        },
        getUserDashboard:function(userId){
            var uri='/users/dashboard/'+userId;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateUserDashboard
            });
        },
        getDashboardDetail:function(name){
            var uri='/users/dashboardDetail/'+name;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateDashboard
            });
        },getDashboardDetailByID:function(dashboardId,userId){
            var uri='/users/dashboardDetailByID/'+dashboardId+"/"+userId;
            $.ajax({
                type:'GET',
                contentType:'application/json',
                url:uri,
                success:populateDashboardByID
            });
        },
        updateDashboard:function(updatedashboard,dashboardId){
            var uri = '/users/dashboard/modify/'+dashboardId;
            $.ajax({
                type:'POST',
                contentType:'application/json',
                data:JSON.stringify(updatedashboard),
                url:uri,
                success:populateUpdatedDashboard
            });
        },
        updateUserDashboard: function (updatedUserDashboard,dashboardId) {
            var uri = '/users/userDashboard/modify/'+dashboardId;
            $.ajax({
                type:'POST',
                contentType:'application/json',
                data:JSON.stringify(updatedUserDashboard),
                url:uri,
                success:populateUpdatedUserDashboard
            });
        },
        deleteDashboard:function(dashboardId){
            var uri='/users/dashboard/'+dashboardId;
            $.ajax({
                type:'DELETE',
                contentType:'application/json',
                url:uri,
                success:deleteDashboardResponse
            });
        },deleteDashboardWidgets:function(widgetId,dashboardId){
            var uri = '/users/userDashboard/widgets/'+widgetId+'/'+dashboardId;
            $.ajax({
                type:'DELETE',
                contentType:'application/json',
                url:uri,
                success:populateDeleteDashboardWidgets
            });
        }
    };
})();


function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}