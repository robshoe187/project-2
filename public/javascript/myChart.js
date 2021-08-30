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