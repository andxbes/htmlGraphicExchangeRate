
 $(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Курс рубля  к доллару '
        },
        subtitle: {
            text: 'Source: <a href="http://www.banki.ru/products/currency/rub/">banki.ru</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Рублей за доллар '
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Рублей : <b>{point.y:.1f} за доллар </b>'
        },
        series: [{
            name: 'Курсы рубля ',
            data: [
                ['Сентябрь 2014', 39.38],
                ['Октябрь 2014', 42.98],
                ['Ноябрь 2014', 47.03],
                ['Декабрь 2014', 53.05],
                ['Январь 2015', 64.30],
                ['Февраль 2015', 65.03],
                ['Март 2015', 62.67],
                ['Апрель 2015', 50.80],
                ['Май 2015', 56.82 ],
                ['Июнь 2015', 56.71],
                ['Июль 2015', 57.50],
                ['Август 2015', 65.80],
                ['Сентябрь 2015', 67.70]
            
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});

