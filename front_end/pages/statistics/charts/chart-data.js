export const ChartData = [
    {
        id: 'time-of-day',
        data: {
            columns: [{ id: 'hours', label: 'Hours', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
                ['00:01-03:00', 3],
                ['03:01-06:00', 3],
                ['06:01-09:00', 4],
                ['09:01-12:00', 5],
                ['12:01:15:00', 6],
                ['15:01:18:00', 10],
                ['18:01:21:00', 6],
                ['21:00:24:00', 8]
            ]

        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        id: 'day-of-week',
        data: {
            columns: [{ id: 'days-of-week', label: 'Days of week', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
                ['Monday', 3],
                ['Tuesday', 3],
                ['wednesday', 4],
                ['Thursday', 5],
                ['Friday', 6],
                ['Saturday', 1],
                ['Sunday', 2]
            ]
        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        id: 'weather-condition',
        data: {
            columns: [{ id: 'weather-condition', label: 'Weather condition', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
                ['Mostly Cloudy', 1],
                ['Overcast', 10],
                ['Light Rain', 5],
                ['Rain', 5],
                ['Clear', 6],
                ['Light Snow', 1],
                ['Other', 3]
            ]
        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        id: 'severity',
        data: {
            columns: [{ id: 'severity', label: 'Severity', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
                ['1 - High impact on trafic', 1],
                ['2', 10],
                ['3', 5],
                ['4 - Low impact on trafic', 5]
            ]

        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        id: 'state',
        data: {
            columns: [{ id: 'state', label: 'State', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
                ['California', 4],
                ['Texas', 10],
                ['Ohio', 2],
                ['Virginia', 5],
                ['Others', 3]
            ]
        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        id: 'point-of-interest',
        data: {
            columns: [{ id: 'point-of-interest', label: 'Point of interest', type: 'string' },
            { id: 'accidents', label: 'Accidents', type: 'number' }],
            rows: [
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
            ]
        },
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }

]

