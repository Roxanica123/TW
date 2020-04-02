

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Useless activities');
    data.addColumn('number', 'Hours');
    data.addRows([
        ['Singing', 3],
        ['Sleeping too much', 3],
        ['Memes', 4],
        ['Youtube', 5],
        ['Being fucking stupid', 6]
    ]);

    // Set chart options
    var options = {
        title: 'How i wasted my time instead on working on this',
        is3D: true,
        backgroundColor: '#0f292f',
        legend : {textStyle: {color: '#cccccc'}},
        slices: [{color: '#501F3A'}, {color:'#CCCCCC'}, {color: '#14A098'}, {color:'#0F292F'},{color: '#CB2D6F'}]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("chart").forEach(element=>{
        const chart= new google.visualization.PieChart(element);
        chart.draw(data, options);
        
    });
}
