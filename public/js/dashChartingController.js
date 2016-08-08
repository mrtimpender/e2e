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
Pie chart
*/
var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "America"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Canada"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "UK"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Europe"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Australia"
				}

			];



window.onload = function(){
	var trendingLineChart = document.getElementById("chart-dash-trending-line-chart").getContext("2d");
	window.trendingLineChart = new Chart(trendingLineChart).Line(data, {
		scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart
		scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines
		scaleGridLineWidth : 1,//Number - Width of the grid lines
		scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)
		bezierCurve : true,//Boolean - Whether the line is curved between points
		bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points
		pointDot : true,//Boolean - Whether to show a dot for each point
		pointDotRadius : 5,//Number - Radius of each point dot in pixels
		pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke
		pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		datasetStroke : true,//Boolean - Whether to show a stroke for datasets
		datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke
		datasetFill : true,//Boolean - Whether to fill the dataset with a colour
		animationSteps: 15,// Number - Number of animation steps
		animationEasing: "easeOutQuart",// String - Animation easing effect
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label
		scaleFontSize: 12,// Number - Scale label font size in pixels
		scaleFontStyle: "normal",// String - Scale label font weight style
		scaleFontColor: "#fff",// String - Scale label font colour
		tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events
		tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour
		tooltipFontSize: 12,// Number - Tooltip label font size in pixels
		tooltipFontColor: "#000",// String - Tooltip label font colour
		tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels
		tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style
		tooltipTitleFontColor: "#000",// String - Tooltip title font colour
		tooltipYPadding: 8,// Number - pixel width of padding around tooltip text
		tooltipXPadding: 16,// Number - pixel width of padding around tooltip text
		tooltipCaretSize: 10,// Number - Size of the caret on the tooltip
		tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border
		tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
		responsive: true
		});

		var doughnutChart = document.getElementById("doughnut-chart").getContext("2d");
		window.myDoughnut = new Chart(doughnutChart).Doughnut(doughnutData, {
			segmentStrokeColor : "#fff",
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label
			animationSteps : 15,
			segmentStrokeWidth : 4,
			animateScale: true,
			percentageInnerCutout : 60,
			responsive : true
		});
};
