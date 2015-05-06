

var financeDashboard = (function () {
    return {
        getRevenueYTDChart: function(){
            $('#revenue').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: 'Revenue YTD 2015',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 50
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Revenue YTD 2013',
                    innerSize: '50%',
                    data: [
                        ['Current $22.5 M',   45.0],
                        ['Traget $35 M ',       26.8]
                    ]
                }]
            });
        },
        getShortTermAssest:function(){
            $('#shortTermAssest').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Short Term Assest'
                },
                xAxis: {
                    categories: ['Nov','Dec','Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ' '
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'percent'
                    }
                },
                series: [{
                    name: 'Cash',
                    data: [5, 3, 4, 7, 2,1,7,3,5,2,1]
                }, {
                    name: 'Investment',
                    data: [2, 2, 3, 2, 1,1,1,3,2,1,2]
                }, {
                    name: 'A/R',
                    data: [3, 4, 4, 2, 5,2,1,3,1,2,1]
                }]
            });
        },
        getGlobalPerfChart:function(){
            $('#globalFinancialPerf').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Global Financial Performance'
                },
                xAxis: {
                    categories: [
                        'NA',
                        'Eur',
                        'Asia',
                        'US',
                        'SA'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ' '
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Cash to Cash Cycle Time',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0]

                }, {
                    name: 'Account Rec Days',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0]

                }, {
                    name: 'Inventory Days',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0]

                }, {
                    name: 'Accounts Payable Days',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6]

                }]
            });
        },getCompanyIncomeStatementChart:function(data1,data2,data3,data4){
            $('#incomeStatementChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Income Statement'
                },
                subtitle: {
                    text: 'Source: Yahoo Finance'
                },
                xAxis: {
                    categories: [
                        '2012',
                        '2013',
                        '2014'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cost'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Gross Profit',
                    data: data1

                }, {
                    name: 'Operating Income or Loss',
                    data: data2

                }, {
                    name: 'Net Income',
                    data: data3

                }, {
                    name: 'Total Revenue',
                    data: data4

                }]
            });
        },getCompanyBalanceSheetChart:function(data1,data2,data3){
            $('#balanceSheetChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Balance Sheet'
                },
                subtitle: {
                    text: 'Source: Yahoo Finance'
                },
                xAxis: {
                    categories: [
                        '2012',
                        '2013',
                        '2014'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cost'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Total Assets',
                    data: data1

                }, {
                    name: 'Total Liabilities',
                    data: data2

                }, {
                    name: 'Total Stockholder Equity',
                    data: data3

                }]
            });
        },getCompanyCashFlowChart:function(data1,data2,data3,data4){
            $('#cashFlowChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Cash Flow'
                },
                subtitle: {
                    text: 'Source: Yahoo Finance'
                },
                xAxis: {
                    categories: [
                        '2012',
                        '2013',
                        '2014'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cost'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Cash Flow From Operating Activities',
                    data: data1

                }, {
                    name: 'Cash Flows From Investing Activities',
                    data: data2

                }, {
                    name: 'Cash Flows From Financing Activities',
                    data: data3

                }, {
                    name: 'Change In Cash and Cash Equivalents',
                    data: data4

                }]
            });
        }
    }
})();

