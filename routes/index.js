var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});
/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});
/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});
/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});
var socialController = require('./socialServiceController')();
var financialController = require('./financialController')();
var sentimentController = require('./sentimentController')();
var companyController = require('./companyController')();


router.get('/getTweets/:id', socialController.getTweets);
router.get('/getFacebookFeeds/:id', socialController.getFacebookFeeds);
router.get('/getFacebookStats/:id', socialController.getFacebookStats);
router.get('/getYouTubeData/:id', socialController.getYouTubeData);
router.get('/getYouTubeVideos/:id', socialController.getYouTubeVideos);
router.get('/getStockData/:id', financialController.getStockData);
router.get('/getLinkedInData', socialController.getLinkedInData);
router.get('/getHistoricalData/:id/:startDate/:endDate', financialController.getHistoricData);
router.get('/getSentimentData/:id', sentimentController.getSentimentData);
router.get('/getTopKeywords/:id', sentimentController.getTopKeywords);
router.get('/getTopUsers/:id', sentimentController.getTopUsers);
router.get('/getTopHashtags/:id', sentimentController.getTopHashTags);
router.get('/getSentimentStats/:id', sentimentController.getSentimentStats);

/* ADD Company */
router.get('/addCompany/', companyController.addCompany);


module.exports = router;
