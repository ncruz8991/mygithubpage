// Colors
var mOpacity = "0.30";
var c1 = "rgba(0, 255, 255, " + mOpacity + ")";
var c2 = "rgba(255, 0, 255, " + mOpacity + ")";
var c3 = "rgba(255, 255, 0, " + mOpacity + ")";
var c4 = "rgba(0, 255, 0, " + mOpacity + ")";

var rArray = [];
var xVals = [];
var yVals = [];

var screenWidth = $(window).width();
var screenHeight = $(window).height();

// numDataPoints changes based on the window size
// with a max number of circles at 2560 x 1600 monitor size
var windowRatio = (screenWidth * screenHeight) / (2560 * 1600);
var numDataPoints = windowRatio * 200;

function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

for (var i = 0; i < numDataPoints; ++i) {
    var rNum = getRandomInterval(40, 120);
    rArray.push(rNum);
    xVals.push(Math.random() * screenWidth);
    yVals.push(Math.random() * screenHeight);
}

var svg = d3.select("body")
        .append("svg")
        .attr("class", "svg_class")
        .attr("width", screenWidth)
        .attr("height", screenHeight);

var circles = svg.selectAll("circle")
        .data(rArray)
        .enter()
        .append("circle");

circles.attr("class", "mCircle")
        .attr("cx", function(d, i) {
            return xVals[i];
        })
        .attr("cy", function(d, i) {
            return yVals[i];
        })
        .attr("r", function(d) {
            return d;
        })
        .attr("fill", function(d, i) {
            switch(i % 4) {
                case 0: return c1;
                case 1: return c2;
                case 2: return c3;
                case 3: return c4;
            }
        });
  
$(document).ready(function(){
    $(".mCircle").hover(function(){        
        $(this).velocity({
            r: 200
        }, 300);
    }, function(){
        $(this).velocity("reverse");
    });
});