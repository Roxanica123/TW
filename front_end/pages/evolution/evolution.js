import { Request } from "./../../services/request.js"
import { FiltersQuery } from "../../services/filters-query.js";
import { Modal } from "../../modals-scripts.js";

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

window.onresize = (event) => {
    drawLogScales();
  };

async function getData() {
  const dates = [];
  const req = new Request("GET", `http://localhost:5000/accidents/evolution?${FiltersQuery.queryInstance.getQueryString()}`);
  const requestedData = await req.getData();
  const evolutionData = requestedData.evolutionData;
  evolutionData.forEach(element => {
    dates.push([new Date(element.year, element.month, element.day), element.number]);
  });

  return dates;
}

async function drawLogScales() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Accidents');

      const dates = await getData();
      data.addRows(dates);

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
    
window.onload = async function(){
  Modal.init();
    
    await drawLogScales();
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
  