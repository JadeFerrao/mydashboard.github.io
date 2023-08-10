var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['open', 'search', 'close'],
        datasets: [{
            label: 'Statistics',
            data: [12, 29, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(0, 255, 0, 0.2)' // Green color with 0.2 opacity
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(0, 255, 0, 1)' // Solid green border color
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false
    }
});
