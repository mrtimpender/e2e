console.log('in uber chart chartingController')
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
            fillColor: "#ffffff",
            strokeColor: "#ffffff",
            highlightFill: "#ffffff",
            highlightStroke: "#ffffff",
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

var createBarChart = (chart) => {
  var lineChart = document.getElementById(chart.id).getContext("2d")
  // uber pricing bar chart
  var trendingBarChart = document.getElementById(chart.id).getContext("2d");
  window.trendingBarChart = new Chart(trendingBarChart).Bar(dataBarChart,{
    scaleShowGridLines : false,///Boolean - Whether grid lines are shown across the chart
    showScale: true,
    tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label
    responsive : true
  });
}

$(document).ready(function(){
    //loop through our charts
    var barCharts = $('.uber_price_estimate_bar_chart')
    barCharts.each((i, chart) => createBarChart(chart))
});
