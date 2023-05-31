import { Pie } from 'react-chartjs-2';
import style from './resMensual.module.css';

{/* INFORMACION DEL DASHBOARD */}

const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sptiembre', 'Octubre', 'Noviembre', 'diciembre'],
    datasets: [
        {
            label: 'Reservas',
            data: [12, 19, 6, 0, 2, 10, 5, 9, 10, 3, 1, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',   
                'rgba(54, 162, 235, 0.2)',   
                'rgba(255, 206, 86, 0.2)',  
                'rgba(75, 192, 192, 0.2)',  
                'rgba(153, 102, 255, 0.2)',  
                'rgba(255, 159, 64, 0.2)',   
                'rgba(255, 99, 132, 0.4)',   
                'rgba(54, 162, 235, 0.4)',   
                'rgba(255, 206, 86, 0.4)',  
                'rgba(75, 192, 192, 0.4)',   
                'rgba(153, 102, 255, 0.4)', 
                'rgba(255, 159, 64, 0.4)', 
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)', 
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
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
};

{/* CONFIGURACION DEL DASHBOARD */}
    
const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
};


const ValorationsMonth = () => {
    return(
        <div style={{ width: '1000px', height: '600px' }} className={style.container}>
            <center style={{height: '500px' }}>
                <h2>Reservas mensuales</h2>
                <Pie data={data} options={options} />
            </center>
        </div>
    );
}

export default ValorationsMonth;