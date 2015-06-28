/************ Colors ************/

var red = '#FF5252';
var darkred = '#D50000';
var offwhite =  '#ECF0F1';
var lightblue =  '#3498DB';
var mediumblue =  '#2980B9';
var darkblue =  '#2C3E50';

var mColors = new Array(6);
mColors[0] = red;
mColors[1] = darkred;
mColors[2] = offwhite;
mColors[3] = lightblue;
mColors[4] = mediumblue;
mColors[5] = darkblue;

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
    'Verbal pressuring',
    'Taking advantage of victim<br/>while drunk/on drugs',
    'Taking advantage of victim<br/>while unconscious/asleep',
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
// This is here because highcharts does some messed up stuff to their arrays
var zeros = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

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
    [4.0, 4.5, 1.1, 0.3, 1.6, 7.2],
    [1.7, 1.2, 0.4, 0, 0.4, 3.3],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

var data_4D4 = [
    [1.9, 1.0, 0.1, 0.2, 0.3, 2.7],
    [0.2, 0, 0.5, 0, 0, 0.7],
    [0.8, 0.4, 0.6, 0.8, 0.4, 1.4],
    [0, 0, 0, 0, 0, 0]
];

var data_4D2_4 = [
    [8.0, 6.7, 1.1, 0.3, 1.8, 11.9],
    [2.3, 1.5, 1.2, 0, 0.8, 4.6],
    [0.9, 0.9, 0.9, 0.8, 1.1, 2.0],
    [0.4, 0, 0, 0, 0, 0.4]
];

var data_4D1_4 = [
    [13.1, 12.8, 2.9, 0.4, 3.9, 22.5],
    [5.7, 3.2, 2.0, 0.4, 1.5, 9.2],
    [3.9, 3.2, 1.7, 0.9, 1.3, 6.8],
    [0.7, 0.4, 0, 0, 0, 1.1]
];

var sa_tile_text = [
    "Fondling, kissing, rubbing up against, or removal of clothes without consent",
    "Non-consensual oral sex",
    "Non-consensual vaginal sex",
    "Non-consensual anal sex",
    "Non-consensual oral, vaginal, or anal sex",
    "Any"
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

function getDataSource_chart_4D(sa_tile_text_in) {        
    switch (sa_tile_text_in) {
        case sa_tile_text[0]:
            return data_4D1;
            
        case sa_tile_text[1]:
            return data_4D2;
            
        case sa_tile_text[2]:
            return data_4D3;
            
        case sa_tile_text[3]:
            return data_4D4;

        case sa_tile_text[4]:
            return data_4D2_4;

        case sa_tile_text[5]:
            return data_4D1_4;

    }
}

var prev_sa_tile = null;
var selected_data;

$(function () {
    $('#chart_4D').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: "Percent of students that have experienced this type of sexual assault"
        },
        subtitle: {
            text: "organized by method of nonconsensual behavior"
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
                text: 'Percentage of students experience the given sexual assault (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '%'
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
                            // Store the selected datapoint
                            selected_data = this;
                            
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
            href: 'https://publicaffairs.vpcomm.umich.edu/wp-content/uploads/sites/19/2015/04/Complete-survey-results.pdf',
            text: 'Source: umich.edu',
        },
        series: [{
            name: 'Male Graduates',
            data: zeros[3],
            color: mColors[4]
        }, {
            name: 'Male Undergraduates',
            data: zeros[2],
            color: mColors[3]
        }, {
            name: 'Female Graduates',
            data: zeros[1],
            color: mColors[1]
        }, {
            name: 'Female Undergraduates',
            data: zeros[0],
            color: mColors[0]
        }]
    });
    
    $('#chart_4D_selected_prompt').css("display", "none");
    
    // Load tiles
    $('#sa_type_4D1').text(sa_tile_text[0]);
    $('#sa_type_4D2').text(sa_tile_text[1]);
    $('#sa_type_4D3').text(sa_tile_text[2]);
    $('#sa_type_4D4').text(sa_tile_text[3]);
    $('#sa_type_4D2-4').text(sa_tile_text[4]);
    $('#sa_type_4D1-4').text(sa_tile_text[5]);
    
    // On sa_tile click, load the other one
    $(".sa_tile").click(function() {
        $('#chart_4D_selected_prompt').css("display", "none");
        $('#chart_4D_default_prompt').css("display", "");
        
        if (prev_sa_tile !== null) {
            prev_sa_tile.style.backgroundColor = '';
            prev_sa_tile.style.color = '';
        }
        this.style.backgroundColor = mediumblue;
        this.style.color = '#FFF';
        prev_sa_tile = this;
        
        // Grab the data related to the type of sexual assault
        var chart_4D = $('#chart_4D').highcharts();
        var new_data = getDataSource_chart_4D(this.innerHTML);
        chart_4D.series[0].setData(new_data[3], false);
        chart_4D.series[1].setData(new_data[2], false);
        chart_4D.series[2].setData(new_data[1], false);
        chart_4D.series[3].setData(new_data[0], false);
        chart_4D.redraw();
        
        console.log(new_data[0]);
        selected_data.select(false);
    });
    
    $("#sa_type_4D1").trigger("click");
});