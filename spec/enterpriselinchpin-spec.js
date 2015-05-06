/**
 * Created by nebhavsar on 4/19/15.
 */
var frisby = require('frisby');

/* App is up and running */
frisby.create('GET JSON data from an endpoint')
    .get('https://enterpriselinchpin.herokuapp.com/')
    .expectStatus(200)
    .expectHeader('Content-Type', 'text/html; charset=utf-8')
    .toss();

/* User Sign In*/
frisby.create('Ensure correct user sign-in')
    .post('https://enterpriselinchpin.herokuapp.com/users/signin', {
        username:"nbhavsar",
        password:"admin",
        companyName:"ebay"
    })
    .after(function(err, res, result) {
        var result = JSON.parse(result);
        var user = result.user;

        runs(function() {
            /* Jasmine matchers here, for example: */
            expect(user).toMatch("nbhavsar")
        });

    })
    .toss();

/*Company Not Registered*/
frisby.create('Ensure company name is ebay')
    .get('https://enterpriselinchpin.herokuapp.com/users/companyDetail/jasper')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {

        runs(function() {
            /* Jasmine matchers here, for example: */
            expect(result).toMatch("company not registered")
        });

    })
    .toss();

/*Check for company name*/
frisby.create('Ensure company name is ebay')
    .get('https://enterpriselinchpin.herokuapp.com/users/companyDetail/ebay')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {
        var result = JSON.parse(result)[0];
        var symbol = result.symbol;

        runs(function() {
            /* Jasmine matchers here, for example: */
            expect(symbol).toMatch("EBAY")
        });

    })
    .toss();

/*Check for company name*/
frisby.create('Ensure company name stock symbol is EBAY')
    .get('https://enterpriselinchpin.herokuapp.com/users/companyDetail/ebay')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {
        var result = JSON.parse(result)[0];
        var symbol = result.symbol;

        runs(function() {
            /* Jasmine matchers here, for example: */
            expect(symbol).toMatch("EBAY")
        });

    })
    .toss();

/*Check Facebook Link*/
frisby.create('Ensure facebook page link is correct')
    .get('https://enterpriselinchpin.herokuapp.com/getFacebookStats/ebay')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {
        var result = JSON.parse(result);
        var link = result.link;

        runs(function() {
            /* Jasmine matchers here, for example: */
            expect(link).toMatch("https://www.facebook.com/eBay")
        });

    })
    .toss();

/*Check for Twitter Tweets*/
frisby.create('Ensure facebook page link is correct')
    .get('https://enterpriselinchpin.herokuapp.com/getTweets/ebay')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {
        var result = JSON.parse(result)[0];
        var tweets = result.tweets;

        runs(function() {
            /* Jasmine matchers here */
            expect(tweets.length).toBeGreaterThan(0)
        });

    })
    .toss();

/*Check for YouTube Subscriber*/
frisby.create('Ensure facebook page link is correct')
    .get('https://enterpriselinchpin.herokuapp.com/getYouTubeData/ebay')
    .expectStatus(200)
    .expectHeaderContains('Content-type', 'text/html; charset=utf-8')
    .after(function(err, res, result) {
        var result = JSON.parse(result);
        var subscriber = result.subscriber;

        runs(function() {
            /* Jasmine matchers here */
            expect(subscriber).toBeGreaterThan(0)
        });

    })
    .toss();