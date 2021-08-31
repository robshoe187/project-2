let myChart = document.getElementById('myChart').getContext('2d');

// global options
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


let batterChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Hits', 'Average', 'Home runs', 'RBI'],
        dataset1: [{
            label: "Batter's Stats",
            data: [batter.hits, batter.average, batter.hone_runs, batter.rbi] // batter stats,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
        }],
        dataset2: [{
            label: 'League Average',
            data: [41.5, .218, 8.8, 25.6],
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
        }],
    },
    options: {
        title: {
            display: true,
            text: 'His Stats vs. League Average',
            fontSize: 28
        },
        legend: {
            position: 'right'
        }
    }
})







const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top';
            }
        }
    }
};

const labels = [
    'Hits',
    'Average',
    'Home runs',
    'RBI'
];

const data = {
    labels: labels,
    datasets: [{
        backgroundColor: '',
        borderColor: '',
        data: []
    }]
}