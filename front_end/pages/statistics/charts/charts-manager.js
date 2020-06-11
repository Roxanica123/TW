import { Chart } from "./chart.js";
import { BubbleChartOptions } from "./bubble-chart/bubble-chart-options.js"
import { Request } from "./../../../services/request.js"
import { FiltersQuery } from "./../../../services/filters-query.js"
google.charts.load("current", { packages: ["corechart"] });

export class ChartsManager {
    static chartsList = [];
    static drawCharts() {
        const container = document.querySelector('chart-wrapper');
        const emptyContainer = container.cloneNode(false);
        container.parentElement.appendChild(emptyContainer);
        container.remove();

        let index = 0;

        const req = new Request("GET", `http://localhost:5000/accidents/statistics/charts?${FiltersQuery.queryInstance.getQueryString()}`);
        req.getData().then(resultData => {
            resultData = resultData.chartsData;
            resultData.forEach(element => {
                const chartContainer = document.createElement('chart-container');
                emptyContainer.appendChild(chartContainer);
                const chartElement = document.createElement('chart');
                chartContainer.appendChild(chartElement);
                this.insertChartInfo(chartContainer, element, index);
                chartElement.setAttribute('name', element.id);
                let pos = ChartsManager.chartsList.indexOf(ChartsManager.chartsList.find(chart => chart.id == element.id));
                if (pos > -1) {
                    ChartsManager.chartsList[pos] = new Chart(chartElement, ChartsManager.chartsList[pos].getType(), element.id);
                }
                else {
                    this.chartsList.push(new Chart(chartElement, 0, element.id));
                    pos = this.chartsList.length - 1;
                }

                this.chartsList[pos].initDataTable(element.data.columns, element.data.rows);
                this.chartsList[pos].drawChart();
                index = index + 1;
            });
        });
        this.drawBubbleChart();
    }

    static insertSwich(chartContainer, id) {

        const button = document.createElement('switch');
        button.setAttribute('id', id);
        button.innerText = 'Switch chart type!';
        chartContainer.appendChild(button);
        button.addEventListener("click", function () {
            ChartsManager.switchChart(this);
        });

    }
    static switchChart(switchElement) {
        const chart = ChartsManager.chartsList.find(chart => chart.id == switchElement.getAttribute('id'));
        chart.changeType();
    }
    static insertChartInfo(chartContainer, element, index) {
        const info_container = document.createElement('chart-info-container');
        const text = document.createElement('p');
        text.innerHTML = element.text;
        info_container.appendChild(text);
        this.insertSwich(info_container, element.id);
        chartContainer.appendChild(info_container);
        /*if (index % 2 == 0) {
            chartContainer.appendChild(info_container);
        }
        else {
            chartContainer.prepend(info_container);
        }*/
    }
    static drawBubbleChart() {
        const req = new Request("GET", `http://localhost:5000/accidents/statistics/bubble-chart?${FiltersQuery.queryInstance.getQueryString()}`);
        req.getData().then(resultData => {
            resultData = resultData.bubbleChartData;
            const data = google.visualization.arrayToDataTable(resultData);
            const chart = new google.visualization.BubbleChart(document.querySelector("bubble-chart"));
            chart.draw(data, BubbleChartOptions);
        })
    }
}
