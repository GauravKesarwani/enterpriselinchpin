/**
 * Created by nebhavsar on 4/16/15.
 */
module.exports = function module() {
    var dbService = require('../services/DBConnection.js')();
    return{
        addCompany: function addCompany() {

            var company ={
                "name":"apple",
                "symbol":"AAPL"

            };
            var db = dbService.getDBConnection();
            // Set our collection
            var collection = db.get('companyCollection');

            collection.insert(company, {},function (err,data) {

                if(err){
                    res.send(err);
                }else{
                    res.send(JSON.stringify(data));
                }
            });

        }
    }
}