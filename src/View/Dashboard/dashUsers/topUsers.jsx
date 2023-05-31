import imgDafult from '../../../Img/ImgCardLanding/default.png';
import style from './topUsers.module.css';

const TopUsers = ({data}) => {

    return(
        <div className={style.containers}>
            <img src={data.image || imgDafult} alt="img" className={style.image} />
            <div className={style.contDatos}>
                <h2 className={style.datos}>{data.name}</h2>
                <h2 className={style.datos}>{data.email}</h2>
            </div>
        </div>
    );

};

export default TopUsers;