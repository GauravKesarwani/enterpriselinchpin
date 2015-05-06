/**
 * Created by nebhavsar on 4/3/15.
 */
var companyName;
$(document).ready(function() {
    $("#errorMsgDiv").hide();
    companyName  = localStorage.getItem('companyName');
    //console.log("Company: "+companyName);
    var imageName = "images/"+companyName+".jpg";
    $("#companyImage").attr("src",imageName);

   $("#loginBtn").click(function(){
        console.log("inside click");
        var user = {};
        user.username =$("#username").val();
        user.password = $("#password").val();
        user.companyName = localStorage.getItem('companyName');
        userajax.sign(user);
    });
});

function redirectToHomePage(data, textStatus, jqXHR){
    var response = JSON.parse(data);
    if(response.msg != "Invalid Username or Password !"){
        localStorage.setItem('username', response.user);
        localStorage.setItem('user_id', response.user_id);
        $("#errorMsgDiv").hide();
        $(location).attr('href',"home.html");
    }else{
        $("#alertmsg").text(response.msg);
        $("#errorMsgDiv").show();
    }
}