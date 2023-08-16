var ctx = document.getElementById('pieChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Open', 'Search', 'Close'],
        datasets: [
            {
                label: 'Data',
                data: [3, 8, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(0, 255, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                left: 130,
                right: 6,
                top: 0,
                bottom: 0
            }
        }
    }
});
