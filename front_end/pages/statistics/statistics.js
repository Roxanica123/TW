

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

window.onresize = (event) => {
    drawCharts();
    //laaaaaaaaaag pt ca se face prea des draw, trebuie rezolvat
  };
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {
    drawChart_tod();
    drawChart_dow();
    drawChart_wco();
    drawChart_sev();
    drawChart_sta();
    drawChart_poi();
}

function drawChart_tod() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Hours');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['00:01-03:00', 3],
        ['03:01-06:00', 3],
        ['06:01-09:00', 4],
        ['09:01-12:00', 5],
        ['12:01:15:00', 6],
        ['15:01:18:00', 10],
        ['18:01:21:00', 6],
        ['21:00:24:00', 8]
    ]);
    // Set chart options
    var options = {
        title: 'Time of day',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='time-of-day']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });
}
function drawChart_dow() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day of week');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['Monday', 3],
        ['Tuesday', 3],
        ['wednesday', 4],
        ['Thursday', 5],
        ['Friday', 6],
        ['Saturday', 1],
        ['Sunday', 2]
    ]);

    // Set chart options
    var options = {
        title: 'Day of the week',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='day-of-week']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });
}
function drawChart_wco() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Weather Condition');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['Mostly Cloudy', 1],
        ['Overcast', 10],
        ['Light Rain', 5],
        ['Rain', 5],
        ['Clear', 6],
        ['Light Snow', 1],
        ['Other', 3]
    ]);

    // Set chart options
    var options = {
        title: 'Weather Condition',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='weather-condition']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });
}
function drawChart_sev()
{
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Accident Severity');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['1 - High impact on trafic', 1],
        ['2', 10],
        ['3', 5],
        ['4 - Low impact on trafic', 5]
    ]);

    // Set chart options
    var options = {
        title: 'Accident Severity',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='severity']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });

}

function drawChart_sta()
{
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['California', 4],
        ['Texas', 10],
        ['Ohio', 2],
        ['Virginia', 5],
        ['Others', 3]
    ]);

    // Set chart options
    var options = {
        title: 'State',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='state']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });
}
function drawChart_poi()
{
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Point of Interest');
    data.addColumn('number', 'Accidents');
    data.addRows([
        ['Amenity', 4],
        ['Bump', 10],
        ['Crossing', 2],
        ['Give Way', 5],
        ['Junction', 3],
        ['No exit', 2],
        ['Railway', 5],
        ['Roundabout', 3],
        ['Stop', 5],
        ['Other', 9]
    ]);

    // Set chart options
    var options = {
        title: 'Point of interest',
        titleTextStyle:{ color: '#cccccc'},
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        slices: [{ color: '#501F3A' }, { color: '#CCCCCC' }, { color: '#14A098' }, { color: '#CB2D6F' }]
    };

    // Instantiate and draw our chart, passing in some options.
    document.querySelectorAll("[id='point-of-interest']").forEach(element => {
        const chart = new google.visualization.PieChart(element);
        chart.draw(data, options);

    });
}
window.onload = function() {
    drawCharts();
    var modalFilter = document.getElementById("modal-filter");
    var buttonFilter = document.getElementById("fillter-button");
    var closeFilter = document.getElementsByClassName("close")[0];
    var closeDownload = document.getElementsByClassName("close")[1];
    var buttonDownload = document.getElementById("download-button");
    var modalDownload = document.getElementById("modal-download");
    var pageWrapper = document.getElementById("page-wrapper");
    
    buttonFilter.onclick = function() {
      modalFilter.style.display = "block";
      pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
    };
  
    buttonDownload.onclick = function() {
      modalDownload.style.display = "block";
      pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
    };
  
    closeFilter.onclick = function() {
      modalFilter.style.display = "none";
      pageWrapper.style.webkitFilter = "none";
  
    };
  
    closeDownload.onclick = function() {
      modalDownload.style.display = "none";
      pageWrapper.style.webkitFilter = "none";
    };
  
    window.onclick = function(event) {
      if (event.target == modalFilter) {
        modalFilter.style.display = "none";
        pageWrapper.style.webkitFilter = "none";
      }
      else{
          if (event.target == modalDownload){
              modalDownload.style.display = "none";
              pageWrapper.style.webkitFilter = "none";
            }
      }
    };
  };
  