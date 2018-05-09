$(document).ready(function() {
    $('select').formSelect();
});

var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [-10, 10],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': -10,
     'max': 10
   }
  });

window.onload = plot("sin", "x");
  
function plot(expr, args) {
    var data_var = [];
    for (let x = -5; x <= 5; x += 0.001) {
        data_var.push({y: Math.sin(x)});
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        
        theme: "light2",
        title: {
            text: expr
        },
        axisX: {
            title: "x"
        },
        axisY: {
            title: expr
        },
        data: [{
            type: "line",
            color: "#00C2AD",
            dataPoints: data_var
        }]
    });
    chart.render();
}