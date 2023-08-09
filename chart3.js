var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
        datasets: [
            {
                label: 'Tesla',
                data: [12, 29, 40, 5, 19, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'BMW',
                data: [8, 15, 28, 10, 8, 12],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: false
    }
});
