/**
 * Created by nebhavsar on 4/9/15.
 */
$(document).ready(function() {

   /*Get User Name from the local Storage*/
    var username = localStorage.getItem('username');

    /*Get User Name from the local Storage*/
    var user_id = localStorage.getItem('user_id');

   /*Get User Dashboard*/
    dashboardAjax.getUserDashboard(user_id);

    /*Update Dashboard name on change of select*/
    $("#filterDropDown").change(function(){
        var dashboardName = $( "#filterDropDown option:selected" ).text();
        $("#filterTextField").val(dashboardName);
        dashboardAjax.getDashboardDetail(dashboardName);


    });

    /*Add New Dashboard*/
    $("#addDashboardBtn").click(function(){

        var dashboardName = $("#dashboardName").val()

        var adddashboard = {
                "dashboardName":dashboardName,
                "user_id":user_id
        };
        $("#filterDropDown").append('<option value='+dashboardName+'selected="selected">'+dashboardName+'</option>');
        $("#filterTextField").val(dashboardName);

        dashboardAjax.addDashboard(adddashboard);


    });
    /* Update Dashboard*/
    $("#updateDashboardBtn").click(function(){

        var dashboardName = $("#updateDashboardName").val();
        var dashboardId = localStorage.getItem('dashboardId');
        var updateDashboard = {
            "dashboardName":dashboardName,
            "user_id":user_id
        };
        dashboardAjax.updateDashboard(updateDashboard,dashboardId);

    });



});


/* Handle add dashboard service response*/
function addDashboardResponse(data, textStatus, jqXHR){
    console.log("Add Dashboard Response: "+data);
    var data = JSON.parse(data);
    location.reload();
    dashboardAjax.getDashboardDetailByID(data._id,localStorage.getItem('user_id'));
}

/* Handle getUserDashboard service response*/
function populateUserDashboard(data, textStatus, jqXHR){
    var data = JSON.parse(data);
    for(var i=0;i<data.length;i++){
        $("#filterDropDown").append('<option value='+data[i].dashboardName+'selected="selected">'+data[i].dashboardName+'</option>');
        $("#filterTextField").val(data[i].dashboardName);
        localStorage.setItem('dashboardId', data[i]._id);
    }

    if(data != undefined) {
        dashboardAjax.getDashboardDetail($("#filterTextField").val());
    }
}

/* Handle getDashboardDetail service response*/
function populateDashboard(data, textStatus, jqXHR){
    var data = JSON.parse(data);

    localStorage.setItem('dashboardId', data._id);
    $("#sortable_portlets" ).empty();
    dashboardAjax.getDashboardDetailByID(data._id,localStorage.getItem('user_id'));
}

/*Handle populateUpdatedDashboard response*/
function populateUpdatedDashboard(data, textStatus, jqXHR){
    location.reload();
}

/*Handle deleteDashboard response*/
function deleteDashboardResponse(data, textStatus, jqXHR){
    location.reload();
}

/*Handle delete widget response*/
function populateDeleteDashboardWidgets(data, textStatus, jqXHR){
    location.reload();
}
