import { Chart } from "./chart.js";
import { ChartData } from "./chart-data.js";


export class ChartsManager {
    static chartsList = [];
    static drawCharts() {
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
                this.insertSwich(chartContainer, element.id);
                chartContainer.appendChild(text);
            }
            else {
                chartContainer.appendChild(text);
                this.insertSwich(chartContainer, element.id);
                chartContainer.appendChild(chartElement);
            }
            chartElement.setAttribute('name', element.id);
            let pos = ChartsManager.chartsList.indexOf(ChartsManager.chartsList.find(chart => chart.id == element.id));
            console.log(pos);
            if (pos > -1) {
                ChartsManager.chartsList[pos] = new Chart(chartElement, ChartsManager.chartsList[pos].getType(), element.id);
            }
            else {
                this.chartsList.push(new Chart(chartElement, 0, element.id));
                pos=this.chartsList.length-1;
            }

            this.chartsList[pos].initDataTable(element.data.columns, element.data.rows);
            this.chartsList[pos].drawChart();
            index = index + 1;
        });
    }

    static insertSwich(chartContainer, id) {
        const button = document.createElement('div');
        button.setAttribute('class', 'btn-three');
        button.setAttribute('id', id);
        button.innerText = 'Switch!';
        chartContainer.appendChild(button);
        button.addEventListener("click", function () {
            ChartsManager.switchChart(this);
        });
    }
    static switchChart(switchElement) {
        const chart = ChartsManager.chartsList.find(chart => chart.id == switchElement.getAttribute('id'));
        chart.changeType();
    }

}
