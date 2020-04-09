import { Chart } from "./chart.js";
import { ChartData } from "./chart-data.js";

export class ChartsManager {
    static chartsList = [];
    static drawCharts() {
        this.chartsList=[];
        const container = document.querySelector('chart-wrapper');
        const emptyContainer = container.cloneNode(false);
        container.parentElement.appendChild(emptyContainer);
        container.remove();

        let index = 0;
        ChartData.forEach(element => {
            const chartContainer = document.createElement('chart-container');
            emptyContainer.appendChild(chartContainer);
            const chartElement = document.createElement('chart');
            const text = document.createElement('p');
            text.innerHTML = element.text;
            if (index % 2 == 0) {
                chartContainer.appendChild(chartElement);
                chartContainer.appendChild(text);
            }
            else {
                chartContainer.appendChild(text);
                chartContainer.appendChild(chartElement);
            }
            chartElement.setAttribute('name', element.id);
            const chart = new Chart(chartElement, 1, element.id);
            this.chartsList.push(chart);
            chart.initDataTable(element.data.columns, element.data.rows);
            chart.drawChart();
            index = index + 1;
        });
    }

}
