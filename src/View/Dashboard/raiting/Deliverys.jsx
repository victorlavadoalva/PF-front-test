import { Line } from 'react-chartjs-2';
import style from './Rating.module.css';

const ValorationsMonth = (props) => {

    {/* INFORMACION DEL DASHBOARD */}

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sptiembre', 'Octubre', 'Noviembre', 'diciembre'],
        datasets: [
            {
                label: '# de Deliverys',
                data: props.data.ratingPerMonth ? props.data.deliverysPerMonth : [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 8,
                pointHoverRadius: 6
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

    return(
        <div style={{ width: '1000px', height: '400px' }} className={style.container}>
            <center style={{height: '300px' }}>
                <h2>Deliverys y Reservas Mensuales</h2>
                <Line data={data} options={options} />
            </center>
        </div>
    );
}

export default ValorationsMonth;