/**
 * Created by nebhavsar on 4/17/15.
 */
var sentimentDashboard = (function () {
    return {
        getSentimentGraph:function(data){

            $('#sentimentGraph').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Sentiment Analysis'
                },
                xAxis: {
                    categories: ['Positive', 'Neutral', 'Negative'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Percentage',
                        align: 'high'
                    }

                },
                tooltip: {
                    valueSuffix: ' %'
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Sentiment Result',
                    data: data
                }]
            });
        },getTopUsers:function(data){
            $('#topUsersChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Top Users'
                },

                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'User Contribution'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: ' <b>{point.y:.1f}</b>'
                },
                series: [{
                    name: 'Top Users',
                    data: data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',

                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });

        },getTopKeywords:function(data){
            $('#topKeywordsChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Top Keywords'
                },
                plotOptions: {
                    column: {
                        color: '#7D0552'
                    }
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Top Keywords'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: ' <b>{point.y:.1f}</b>'
                },
                series: [{
                    name: 'Top Keywords',
                    data: data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '##FFFFFF',
                        align: 'right',

                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });

        },getTopHashtags:function(data){
            $('#topHashtagsChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Top Hashtags'
                },
                plotOptions: {
                    column: {
                        color: '#C68E17'
                    }
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Top Hashtags'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: ' <b>{point.y:.1f}</b>'
                },
                series: [{
                    name: 'Top Hashtags',
                    data: data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '##FFFFFF',
                        align: 'right',

                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });

        }
    }
})();

