var retailDashboard = (function () {
    return {
        topProductInRevenue:function(){
            $('#topProductInRevenue').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Top Products in Revenue'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        ['Product 1',   45.0],
                        ['Product 2',       26.8],
                        {
                            name: 'Product 3',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Product 4',    8.5],
                        ['Product 5',     6.2],
                        ['Product 5',   0.7]
                    ]
                }]
            });
        },
        onlineInStorePurchase:function(){
            $('#onlineInStorePurchase').highcharts({
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Online vs In-Store Purchase'
                },
                xAxis: {
                    categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'Hundred'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000;
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' Thousand'
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: [{
                    name: 'Online',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                }, {
                    name: 'In-Store',
                    data: [180, 310, 254, 356, 339, 818, 2201]
                }]
            });
        }

    }
})();