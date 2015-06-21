$(document).ready(function(){
    $(".bar").hover(function(){
        // Change the background color (light blue)
        $(this).css("background-color", "#D0E4F2");
        
        // Append width value within/next to div depending on the width
        //$(this).innerHTML = $(this).width();
        $(this).append(function() {
            var data_value = '<div class="data">';
            data_value += $(this).width();
            data_value += '</div>';
            return data_value;
        });
        
    }, function(){
        // Revert back to original background color
        $(this).css("background-color", "#4A6491");
        
        // Remove appended width value
        $(".data").remove();
    });
});

var mArray = [];

// pushes an additional 50 numbers into mArray
function push50() {    
    for (var i = 0; i < 100; ++i) {
        var num = Math.random() * 98;
        mArray.push(num);
    }
}

push50();

d3.select("body").selectAll("div")
        .data(mArray)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("width", function(d) {
            var barWidth = d; // scale bars
            return barWidth + "%";
        });