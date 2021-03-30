import { HorizontalBar } from '@reactchartjs/react-chart.js';

export const BaseStatsChart = ({ stats }) => {
  const data = {
    labels: ['HP', 'Ataque', 'Defensa', 'At. Special', 'Def. Special', 'Velocidad'],
    datasets: [
      {
        data: stats
        ? [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
        : '',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes:[
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
  }

  return (
    <HorizontalBar data={data} width={320} height={200} options={options} />
  )
}
