import TableAdmin from "./Table";
import style from './index.module.css';

const AdminView = () => {
    return(
        <div className={style.container}>
            <TableAdmin/>
        </div>
    );
};

export default AdminView;