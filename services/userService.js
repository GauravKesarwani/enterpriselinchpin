/**
 * Created by nebhavsar on 4/3/15.
 */
module.exports = function module() {
    var dbService = require('../services/DBConnection.js')();
    return{
        getCompanyDetails: function getCompanyDetails(name) {

        },addUser:function addUser(){
            var contactInfo = [];
            contactInfo.push({
                "firstname":"Neema",
                "lastname":"Bhavsar",
                "username":"nbhavsar",
                "password":"admin",
                "email":"nbhavsar@enterpriselinchpin.com",
                "work_phone":"123-789-8977",
                "home_phone":"123-456-7890"
            });
            var location = [];
            location.push({
                "site":"San Jose",
                "building":"7",
                "floor":"1",
                "desk":"7.1.1",
                "country":"USA"
            });
            var department = [];
            department.push({
                "company_name":"eBay",
                "manager":"John Doe",
                "team":"Shopping",
                "organization":"Merchant"
            });


            var user =[];
            user.push({
                "contact":contactInfo,
                "location":location,
                "department":department

            });
            var db = dbService.getDBConnection();
            // Set our collection
            var collection = db.get('usercollection');
            collection.insert(user);

        }
    }
}