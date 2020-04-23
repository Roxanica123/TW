export const BubbleChartOptions = {
        height: '800',
        backgroundColor: 'none',
        legend: { textStyle: { color: '#cccccc' } },
        colors: ['#14A098', '#CB2D6F', '#501F3A'],
        hAxis: {
            textStyle: { color: '#cccccc', fontName: 'Segoe UI', fontSize: 9 },
            title: 'Longitude',
            titleTextStyle: { color: 'none', fontName: 'Segoe UI', italic: false },
            gridlines: { color: 'none' },
            minValue: 25,
            maxValue: 50
        },
        vAxis: {
            textStyle: { color: '#cccccc', fontName: 'Segoe UI', fontSize: 9 },
            title: 'Latitude',
            titleTextStyle: { color: 'none', fontName: 'Segoe UI', italic: false },
            gridlines: { color: 'none' },
            minValue: -60
        },
        bubble: {
            textStyle: {

                color: 'none',
            },
            stroke: 'none',
            opacity: '0.6'
        },
        sizeAxis: {
            maxSize: 15
        },
        colorAxis: {
        },
        legend: {
            textStyle: { color: '#cccccc', fontName: 'Segoe UI' },
            scrollArrows: { inactiveColor: "#cccccc", activeColor: "#cccccc" },
            pagingTextStyle: { color: '#cccccc', fontName: 'Segoe UI' }
        }
        //explorer: {}
    };