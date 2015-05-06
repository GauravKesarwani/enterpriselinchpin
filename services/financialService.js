/**
 * Created by nebhavsar on 3/26/15.
 */
module.exports = function module(){
    var YQL = require('yql');
    return{
        getStockData:function getStockData(id){
            var stockQuery = "select * from yahoo.finance.quotes where symbol='"+id+"'";
                var query = new YQL(stockQuery);

            query.exec(function(err, data) {
                var symbol = data.query.results.quote.symbol;
                var bid  = data.query.results.quote.bid;
                var change = data.query.results.quote.Change;
                var currency = data.query.results.quote.Currency;
                var daysLow = data.query.results.quote.DaysLow;
                var daysHigh = data.query.results.quote.DaysHigh;
                var yearLow = data.query.results.quote.YearLow;
                var yearHigh = data.query.results.quote.YearHigh;
                var marketCapitalization = data.query.results.quote.MarketCapitalization;
                var name = data.query.results.quote.Name;
                var open = data.query.results.quote.Open;
                var previousClose  = data.query.results.quote.PreviousClose;
                var changeinPercent = data.query.results.quote.ChangeinPercent;
                var yearRange = data.query.results.quote.YearRange;


                console.log(symbol+' bid: ' + bid + ', change:' + change+', daysLow:'+daysLow+',daysHigh:'+daysHigh);
                console.log(' yearLow: ' + yearLow + ', yearHigh:' + yearHigh+', marketCapitalization:'+marketCapitalization+',name:'+name);
                console.log(' open: ' + open + ', previousClose:' + previousClose+', changeinPercent:'+changeinPercent+',yearRange:'+yearRange);

            });



        },
        getHistoricData : function getHistoricData(id,startDate,endDate){

            var stockQuery = "select * from yahoo.finance.historicaldata where symbol = '"+id+"' and startDate = '"+startDate+"' and endDate = '"+endDate+"'";
            var query = new YQL(stockQuery);

            query.exec(function(err, data) {

                var quotes =data.query.results.quote;

                quotes.forEach(function(item){
                   var date = item.Date;
                   var high = item.High;
                   var low = item.Low;
                   var open = item.Open;
                   var close = item.Close;

                   console.log("Date: "+item.Date)
                   console.log("High: "+item.High);
                   console.log("Low: "+item.Low);
                   console.log("Close: "+item.Close);
                   console.log("Open: "+item.Open);
                });
            });

        }
    }
}