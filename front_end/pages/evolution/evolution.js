google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

window.onresize = (event) => {
    drawLogScales();
  };

function drawLogScales() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Accidents');

      data.addRows([
        [new Date(1990, 0), 73],    [new Date(1993, 0), 67],   [new Date(1996, 0), 80],  [new Date(1999, 0), 99],   [new Date(2002, 0), 103],  [new Date(2005, 0), 86],
        [new Date(2008, 0), 89],    [new Date(2011, 0), 67], [new Date(2014, 0), 102], [new Date(2017, 0), 90], [new Date(2019, 0), 145]
       
      ]);

      var options = {
        annotations: {
          textStyle: {
            fontName: 'Times-Roman',
            fontSize: 18,
            bold: true,
            italic: true,
            // The color of the text.
            color: '#871b47',
            // The color of the text outline.
            auraColor: '#d799ae',
            // The transparency of the text.
            opacity: 0.8
          }
        },
        hAxis: {
          title: 'Year',
          logScale: false
        },
        vAxis: {
          title: 'Number of accidents',
          logScale: false
        },
        curveType: 'function',
        width: 900,
        height: 500,
        colors: ['#a52714']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    
window.onload = function() {
    drawLogScales();
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
  