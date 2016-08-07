console.log("woot")
/*
* Trending line chart for google maps travel time with traffic
*/
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
// parse unix timestamp to date
var parseTimestamp = (timestamp) => {	
	var d = new Date(Number(timestamp))
	var dateObject = {
		date: d,
		month: ('0' + (d.getMonth() + 1)).slice(-2),
		day: ('0' + d.getDate()).slice(-2),
		hours: d.getHours(),
		minutes: ('0' + d.getMinutes()).slice(-2)
	}

	return dateObject
}

// parse google map directions data
var parseGMChartData = (chartData) => {
	var d = new Date()
	var  fiveDaysAgoTS = d.setDate(d.getDate() - 1);

	var filteredChartData = chartData.rows.filter((row) => {
		if(Number(row.created_at) > fiveDaysAgoTS){return row}
	})
	

	var mappedChartData = filteredChartData.map((row) => {
			return {
				created_at_formatted: parseTimestamp(row.created_at),
				directions_duration_in_traffic_text: row.directions_duration_in_traffic_text,
				directions_duration_in_traffic_val: row.directions_duration_in_traffic_val,
				trip_id: row.trip_id
			}
	})
	return mappedChartData
}

// compile chart data for specific trip_id
var compileChartDataById = (id, rawChartData) => {
	var chartData = rawChartData.filter((data) => data.trip_id === id)
	console.log(chartData);
	
}

$(document).ready(function(){
		// get our chart data from database
		$.ajax({
			method: 'get',
			url: '/trips/googleMapsChartData'
		}).then((res) => {
			var rawChartData = parseGMChartData(res)
			compileChartDataById(201, rawChartData)
		})


    //loop through our charts, create charts.
    var lineCharts = $('.maps_time_estimate_line_chart')
    lineCharts.each((i, chart) => createLineChart(chart))

});
