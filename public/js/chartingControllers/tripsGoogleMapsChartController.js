console.log("woot")
/*
* Trending line chart
*/
//var randomScalingFactor = function(){ return Math.round(Math.random()*10)};
var trendingLineChart;
var data = {
	labels : ["Apple","Samsung","SONY","Motorola","Nokia","Microsoft","Xiaomi"],
	datasets : [
		{
			label: "First dataset",
			fillColor : "rgba(128, 222, 234, 0.6)",
			strokeColor : "#ffffff",
			pointColor : "#00bcd4",
			pointStrokeColor : "#ffffff",
			pointHighlightFill : "#ffffff",
			pointHighlightStroke : "#ffffff",
			data: [100, 50, 20, 40, 80, 50, 80]
		},
		{
			label: "Second dataset",
			fillColor : "rgba(128, 222, 234, 0.3)",
			strokeColor : "#80deea",
			pointColor : "#00bcd4",
			pointStrokeColor : "#80deea",
			pointHighlightFill : "#80deea",
			pointHighlightStroke : "#80deea",
			data: [60, 20, 90, 80, 50, 85, 40]
		}
	]
};



/*
Trending Bar Chart
*/

var dataBarChart = {
    labels : ["JAN","FEB","MAR","APR","MAY","JUNE"],
    datasets: [
        {
            label: "Bar dataset",
            fillColor: "#46BFBD",
            strokeColor: "#46BFBD",
            highlightFill: "rgba(70, 191, 189, 0.4)",
            highlightStroke: "rgba(70, 191, 189, 0.9)",
            data: [6, 9, 8, 4, 6, 7]
        }
    ]
};

/*
Line Chart
*/
var lineChartData = {
	labels : ["USA","UK","UAE","AUS","IN","SA"],
	datasets : [
		{
			label: "My dataset",
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "#fff",
			pointColor : "#00796b ",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data: [65, 45, 50, 30, 63, 45]
		}
	]

}
var createLineChart = (chart) => {
  var lineChart = document.getElementById(chart.id).getContext("2d")
  window.lineChart = new Chart(lineChart).Line(lineChartData, {
    scaleShowGridLines : false,
    bezierCurve : false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#fff",
    responsive: true,
  })
}

$(document).ready(function(){
    //loop through our charts
    var lineCharts = $('.maps_time_estimate_line_chart')
    lineCharts.each((i, chart) => createLineChart(chart))

});
