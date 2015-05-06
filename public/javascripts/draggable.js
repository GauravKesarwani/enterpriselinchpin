/**
 * Created by nebhavsar on 4/12/15.
 */
$(document).ready(function() {

    $("#addportlet").click(function () {
        console.log("button click");
        var newPortlet  = "<div class=\"span4 column sortable\">"+
            "<div class=\"portlet box red\">"+
            "<div class=\"portlet-title\">"+
            "<h4>"+
            "<i class=\"icon-cogs\"></i>Tooltips"+
            "</h4>"+
            "<div class=\"tools\">"+
            "<a href=\"#\" class=\"collapse\"></a> " +
            "<a href=\"#\" class=\"remove\"></a>"+
            "</div>"+
            "</div>"+
            "<div class=\"portlet-body\">"+
            "<p>"+
            "Portlet Body"+
            "</p>"+

            "</div>"+
            "</div>"+
            "</div>";
        $("#sortable_portlets").append(newPortlet);
        $("a").click(function () {
            var classes = $(this).attr('class');
            console.log("Classes: " + classes);
            var parentPortlet = $(this).parents(".portlet").children(".portlet-body");
            if (classes == "collapse") {
                $(this).removeClass("collapse").addClass("expand");
                parentPortlet.slideUp(200);
            } else if (classes == "expand") {
                $(this).removeClass("expand").addClass("collapse");
                parentPortlet.slideDown(200);
            }
        });

        $(".portlet .tools a.remove").click(function () {
            var removable = $(this).parents(".portlet");
            if (removable.next().hasClass('portlet') || removable.prev().hasClass('portlet')) {
                $(this).parents(".portlet").remove();
            } else {
                $(this).parents(".portlet").parent().remove();
            }
        });

    });



});