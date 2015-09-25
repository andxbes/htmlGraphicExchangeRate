
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
                ['Сентябрь 2014', 92.45],
                ['Октябрь 2014', 86.63],
                ['Ноябрь 2014', 84.21],
                ['Декабрь 2014', 61.05],
                ['Январь 2015', 49.91],
                ['Февраль 2015', 62.03],
                ['Март 2015', 55.67],
                ['Апрель 2015', 57.80],
                ['Май 2015', 52.82 ],
                ['Июнь 2015', 62.71],
                ['Июль 2015', 55.50],
                ['Август 2015', 48.80],
                ['Сентябрь 2015', 46.70]
            
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

