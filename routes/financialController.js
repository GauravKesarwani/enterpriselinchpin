/**
 * Created by nebhavsar on 3/26/15.
 */
'use strict'

module.exports = function module(){
    var service = require('../services/financialService.js')();
    return {
        getStockData : function getStockData(req, res, next) {
            service.getStockData(req.params.id,function onGetStocks(err){
                return res.redirect('/');
            })
        },
        getHistoricData : function getHistoricData(req, res, next){
            service.getHistoricData(req.params.id,req.params.startDate,req.params.endDate,function onGetStocks(err){
                return res.redirect('/');
            })


        }
    }
}