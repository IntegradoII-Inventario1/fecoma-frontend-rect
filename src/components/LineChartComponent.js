import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

const LineChartComponent = ({etiquetas=[],datos=[],titulo=""}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

 

  const options = {
    scales: {
      yAxes:{
          ticks:{
              beginAtZero: true,
              color: '#EB966A',
              fontSize: 12,
          }
      },
      xAxes: {    
          ticks:{
              beginAtZero: true,
              color: '#EB966A',
              fontSize: 12,
          }
      },
  },
    plugins:{
      responsive:true,
      legend:{
        position: 'top',
        labels:{
          color: '#EB966A'
        }
      },
      title:{
        display: true,
        text: 'hola mundo',
        color: '#EB966A'
      },
    },
  }
  
  const data = {
    labels: etiquetas,
    datasets: [
      {
        label: titulo,
        data: datos,
        borderColor: "#2563eb",
        backgroundColor: "#2563eb"
      }
    ]
  }
  return (
    <div className='dark:bg-gray-900 w-full bg-white rounded-lg'>
      <Line options={options} data={data}/>
    </div>
  )
}

export default LineChartComponent