/**
 * Created by nebhavsar on 4/16/15.
 */
'use strict'

module.exports = function module(){

    return{
        addCompany:function addCompany(req,res,next){

            // Set our internal DB variable
            var db = req.db;

            // Set our collection
            var collection = db.get('companyCollection');

            var company ={
                "name":"yahoo",
                "symbol":"YHOO"

            };

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