/**
 * Created by nebhavsar on 3/21/15.
 */
module.exports = function module() {
    return{
        getDBConnection:function getDBConnection(){
            //var databaseUrl = 'mongodb://localhost:27017/enterpriselinchpindb';
            //var collections = ["twitter","facebook","linkedIn","youtube","user"]
            //var db = require("mongojs").connect(databaseUrl, collections);
            var mongo = require('mongodb');
            var monk = require('monk');
            var db = monk('mongodb://heroku_app36006117:iaavf827ue2euuqkfil9nffa00@ds061691.mongolab.com:61691/heroku_app36006117');
            return db;
        }

    }
};