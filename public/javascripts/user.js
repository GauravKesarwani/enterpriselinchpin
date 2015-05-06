/**
 * Created by nebhavsar on 4/3/15.
 */

$(document).ready(function() {
    $("#errorMsgDiv").hide();
    $("loginBtn").click(function() {

    });
    $("#companyBtn").click(function(){
        console.log("Company Name: "+$("#companyName").val());
        userajax.getCompanyDetail($("#companyName").val());
    });
});

function redirectToLoginPage(data, textStatus, jqXHR){

    if(data != "company not registered"){
        var tempData = JSON.parse(data);
        $("#errorMsgDiv").hide();
        var companyName = tempData[0].name;
        var stockSymbol = tempData[0].symbol;
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('stockSymbol', stockSymbol);
        $(location).attr('href',"login.html");
    }else{
        $("#alertmsg").text(data);
        $("#errorMsgDiv").show();
    }



}
