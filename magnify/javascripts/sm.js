/************ Colors ************/

var darkblue =  '#2C3E50';
var red = '#E74C3C';
var offwhite =  '#ECF0F1';
var lightblue =  '#3498DB';
var mediumblue =  '#2980B9';

var mColors = [ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9'];
var gColors = [ '#EA80FC', '#E040FB', '#448AFF', '#2962FF' ];

/************ Global stuff ************/

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Roboto'
        }
    }
});

function setColor(color) {
    return color;
}

/************ Main charts ************/

// Chart 1: Example Chart (currently does nothing)
$(function () { 
    $('#chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ' '
        },
        colors: mColors,
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
                    }
                }
            }
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.030000000000005,
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.9100000000000001
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]
        }],
    credits: false
    });
});


// Chart 4D: Bar chart for Tables 4D.1 - 4D.4, 4D.2-4, 4D.1-4

var categories_4D = [
    'Verbally pressuring',
    'Taking advantage<br/>while drunk/on drugs',
    'Taking advantage<br/>while unconscious/asleep',
    'Threatening physical harm',
    'Using physical force',
    'Yes to any above'
];
var categories_4D_full = [
    "verbally pressured after they said they didn't want to, including being told lies ...",
    "taken advantage of while under the influence of drugs or were too drunk to stop what was happening",
    "taken advantage of while unconscous or asleep or physically incapacitated and could not stop what was happening",
    "threatened, physically",
    "forced, such as being held down, having their arms pinned, or having used a weapoint against them",
    "verbally pressured, taken advantage of while unconscious, asleep, or under the influence, physically threatened, or forced"
];

/*
    For any datasets related to table 4D, each array within data_4Dn should be
        Female Undergraduates
        Female Graduates
        Male Undergraduates
        Male Graduates
*/
var data_4D1 = [
    [10.2,  11.1,  2.6,  0.4,  3.6,  19.5],
    [5.5,    2.9,  1.5,  0.4,  1.5,   9.0],
    [3.2,    3.2,  1.2,  0.7,  0.5,   6.7],
    [0.7,    0.4,    0,    0,    0,   1.1]
];

var data_4D2 = [
    [5.5,  3.6,  0.4,  0.3,  1.1,  7.7],
    [0.4,  0.8,  0.4,  0,    0.4,  0.8],
    [0.9,  0.9,  0.9,  0.3,  0.8,  1.7],
    [0.4,  0,    0,    0,    0,    0.4]
];

var data_4D3 = [
    
];

var data_4D4 = [
    
];

// Returns a full description version of a given category
function get_full_description_chart_4D(cat_in) {
    switch(cat_in) {
        case categories_4D[0]:
            return categories_4D_full[0];
            break;
        case categories_4D[1]:
            return categories_4D_full[1];
            break;
        case categories_4D[2]:
            return categories_4D_full[2];
            break;
        case categories_4D[3]:
            return categories_4D_full[3];
            break;
        case categories_4D[4]:
            return categories_4D_full[4];
            break;
        case categories_4D[5]:
            return categories_4D_full[5];
            break;
        default:
            break;
    }
}

$(function () {
    $('#chart_4D').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: categories_4D,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 25,
            title: {
                text: 'Yes (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '% said yes'
        },
        plotOptions: {
            bar: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                point: {
                    events: {
                        click: function() {                            
                            // Get rid of the default prompt
                            document.getElementById('chart_4D_default_prompt')
                                    .style.display = 'none';
                            document.getElementById('chart_4D_selected_prompt')
                                    .style.display= 'block';
                            
                            // Set the percentage in the block
                            var percent = document.getElementById('chart_4D_percentage');
                            percent.innerHTML = this.y;
                            percent.style.backgroundColor = this.color;
                            percent.style.color = '#FFF';
                            
                            // Set the series name
                            var people = document.getElementById('chart_4D_series');
                            people.innerHTML = this.series.name.toLowerCase();
                            people.style.color = this.color;
                            
                            // Set the category description
                            var cat_desc = document.getElementById('chart_4D_category_description');
                            cat_desc.innerHTML = get_full_description_chart_4D(this.category);
                            cat_desc.style.color = this.color;
                        }
                    }
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            reversed: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Male Graduates',
            data: data_4D1[3],
            color: gColors[3]
        }, {
            name: 'Male Undergraduates',
            data: data_4D1[2],
            color: gColors[2]
        }, {
            name: 'Female Graduates',
            data: data_4D1[1],
            color: gColors[1]
        }, {
            name: 'Female Undergraduates',
            data: data_4D1[0],
            color: gColors[0]
        }]
    });
});