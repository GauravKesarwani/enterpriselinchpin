/**
 * Created by nebhavsar on 4/3/15.
 */
'use strict'

module.exports = function module(){
    var service = require('../services/userService.js')();
    return{
        getCompanyDetails:function getCompanyDetails(req,res,next){
            service.getCompanyDetails(req.params.name,function onData(data){

            });
        },
        addUser:function addUser(){
            service.addUser();
        }
    }
}