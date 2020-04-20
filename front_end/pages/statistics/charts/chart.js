google.load("visualization", "1.1", { packages: ["corechart"] });
google.charts.load('current', { 'packages': ['corechart'] });
export class Chart {
    constructor(element, defaultType, id) {
        this.id = id;
        this.element = element;
        this.type = defaultType;
        this.data = null;
        this.chart = this.initChart();
    }

    getType(){
        return this.type;
    }

    static options = {
        titleTextStyle: { color: '#cccccc' },
        is3D: true,
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        colors: ['#14A098', '#CB2D6F', '#501F3A', '#CCCCCC'],
        hAxis: { baselineColor: '#cccccc', textStyle: { color: '#cccccc' } },
        vAxis: { baselineColor: '#cccccc', textStyle: { color: '#cccccc' } }
    };

    initChart() {
        if (this.type == 1) {
            return new google.visualization.PieChart(this.element);
        }
        else {
            return new google.visualization.BarChart(this.element);
        }
    }
    initDataTable(colums, rows) {
        this.data = new google.visualization.DataTable();
        colums.forEach(element => {
            this.data.addColumn(element);
        });

        this.data.addRows(rows);
    }
    changeType() {
        this.type = 1 - this.type;
        this.chart.clearChart();
        if (this.type == 1) {
            this.chart = new google.visualization.PieChart(this.element);
        }
        else {
            this.chart = new google.visualization.BarChart(this.element);
        }
        this.drawChart();
    }

    drawChart() {
        this.chart.draw(this.data, Chart.options);
    }
}
