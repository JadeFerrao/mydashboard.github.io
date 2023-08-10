var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['9 pm', '11pm', '12am', '5am', '8am', '10am'],
        datasets: [
            {
                label: 'Open',
                data: [3, 7, 3, 6, 4, 12],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Search',
                data: [3, 8, 6, 9, 7, 12],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Close',
                data: [3, 10, 8, 11, 10, 12],
                backgroundColor: 'rgba(0, 255, 0, 0.2)', // Green color with 0.2 opacity
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: false
    }
});
