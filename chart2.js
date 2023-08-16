var ctx = document.getElementById('pieChart').getContext('2d'); // Change the context ID
var myChart = new Chart(ctx, {
    type: 'pie', // Change the chart type to 'pie'
    data: {
        labels: ['Open', 'Search', 'Close'], // Labels for each dataset
        datasets: [
            {
                label: 'Data',
                data: [3, 8, 10], // Adjust the data values accordingly
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
        responsive: false
    }
});
