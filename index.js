var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};

var config = {
    type: 'line',
    data: {
        labels: ["0", "0-100", "100-200", "200-300", "300-400", "400+"],
        datasets: [{
            label: "Standart request",
            backgroundColor: chartColors.orange,
            borderColor: chartColors.orange,
            data: [
                null, 5.5, 10, 15, 20, 30, 55
            ],
            fill: false,
        }, {
            label: "Randomized request",
            fill: false,
            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
            data: [
                null, 15, 20, 25, 30, 50, 75
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'label',
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Requests'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Avg response time (sec)'
                }
            }]
        }
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx, config);
});