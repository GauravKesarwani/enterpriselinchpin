var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET Company Details. */
router.get('/companyDetail/:name', function(req, res) {
    var db = req.db;
    var collection = db.get('companyCollection');
    collection.find({name:new RegExp(req.params.name, 'i')},{},function(e,data){
        if(data.length > 0) {
            res.send(JSON.stringify(data));
        }else{
            res.send('company not registered');
        }
    });
});

/* GET Company Income Statement Details. */
router.get('/companyDetail/incomeStatement/:name', function(req, res) {
    var db = req.db;
    var collection = db.get('companyCollection');
    collection.find({name:req.params.name},{},function(e,data){
        res.send(JSON.stringify(data[0].incomeStatement));
    });
});

/* GET Company Balance Sheet Details. */
router.get('/companyDetail/balanceSheet/:name', function(req, res) {
    var db = req.db;
    var collection = db.get('companyCollection');
    collection.find({name:req.params.name},{},function(e,data){
        res.send(JSON.stringify(data[0].balanceSheet));
    });
});
/* GET Company Cash Flow Details. */
router.get('/companyDetail/cashFlow/:name', function(req, res) {
    var db = req.db;
    var collection = db.get('companyCollection');
    collection.find({name:req.params.name},{},function(e,data){
        res.send(JSON.stringify(data[0].cashFlow));
    });
});



/*Sign In User*/
router.post('/signin',function(req,res){
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userPassword = req.body.password;
    var companyName = req.body.companyName;
    console.log("Username: "+userName+" Password: "+userPassword);
    var collection = db.get('usercollection');
    collection.find({"contact.username":userName,"contact.password":userPassword,"department.company_name":companyName},{},function(err,data){
        if(data.length > 0){

            // And forward to success page
            var successMsg = "Welcome "+userName+" !";
            res.send(JSON.stringify({msg:successMsg,user:req.body.username,user_id:data[0]._id}));
        }else{
            res.send(JSON.stringify({msg:"Invalid Username or Password !"}));
        }


    });

});

/*Add Dashboard to the User Collections*/
router.post('/dashboard',function(req,res){
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var dashboardName = req.body.dashboardName;
    var user_id = req.body.user_id;
    console.log("User ID: "+user_id+" dashboardName: "+dashboardName);
    var collection = db.get('dashboardCollection');
    var dashboard = {
        "user_id":user_id,
        "dashboardName":dashboardName,
        "widgets":[]
    }

    collection.insert(dashboard, {},function (err,data) {

        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(data));
        }
    });


});

/*Get User Dashboard*/
router.get('/dashboard/:userId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');
    console.log("User id: "+req.params.userId);
    collection.find({"user_id": req.params.userId},{},function(e,data){
        res.send(JSON.stringify(data));
    });
});

/*Get User Dashboard Detail*/
router.get('/dashboardDetail/:name',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');
    collection.find({"dashboardName": req.params.name},{},function(e,data){
        res.send(JSON.stringify(data[0]));
    });
});

/*Get User Dashboard Detail By ID*/
router.get('/dashboardDetailByID/:dashboardId/:userId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');
    collection.find({"_id":ObjectId(req.params.dashboardId),"user_id":req.params.userId},{},function(e,data){
        res.send(JSON.stringify(data[0]));
    });
});

/*Update Dashboard*/
router.post('/dashboard/modify/:dashboardId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');

    collection.update({"_id":ObjectId(req.params.dashboardId)},{$set:{"dashboardName":req.body.dashboardName}},{upsert:true},function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(data));
        }
    });
});

/* Delete Dashboard*/
router.delete('/dashboard/:dashboardId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');

    collection.remove({"_id" : ObjectId(req.params.dashboardId)},{safe: true},function(err,data){
        if(err){
            console.log("Err:"+err);
        }else{
            res.send(JSON.stringify(data));
        }
    });
});

/*Update Users Dashboard Widget*/
router.post('/userDashboard/modify/:dashboardId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');

    collection.update({"_id":ObjectId(req.params.dashboardId)},{$push:{"widgets":req.body.widgets}},{upsert:true},function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(data));
        }
    });
});

/*Delete Users Dashboard Widget*/
router.delete('/userDashboard/widgets/:widgetId/:dashboardId',function(req,res){
    var db = req.db;
    var collection = db.get('dashboardCollection');

    collection.update({"_id":ObjectId(req.params.dashboardId)},{$pull:{"widgets":req.params.widgetId}},{upsert:true},function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(data));
        }
    });
});

var userController = require('./userController')();

/* ADD User. */
router.get('/addUser/', userController.addUser);
module.exports = router;
