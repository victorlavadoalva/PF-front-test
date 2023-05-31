import { Bar } from 'react-chartjs-2';
import style from './ValorationsMonth.module.css';

const ValorationsMonth = (props) => {

    {/* INFORMACION DEL DASHBOARD */}
    console.log(props);

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sptiembre', 'Octubre', 'Noviembre', 'diciembre'],
        datasets: [
            {
                label: 'Reseñas',
                data: props.data.ratingPerMonth ? props.data.ratingPerMonth.stockPerMonth : [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Rating',
                data: props.data.ratingPerMonth ? props.data.ratingPerMonth.ratingPerMonth : [],
                backgroundColor: 'rgba(58, 80, 107, 0.5)',
                borderColor: 'rgba(58, 80, 107, 1)',
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

    return(
        <div style={{ width: '1000px', height: '400px' }} className={style.container}>
            <center style={{height: '300px' }}>
                <h2>Reseñas por mes</h2>
                <Bar data={data} options={options} />
            </center>
        </div>
    );
}

export default ValorationsMonth;