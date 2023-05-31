import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/actions';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { reservasRows, reservasColumns } from '../../dataHardcodeo/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";

export default function DataGridDemo() {

    const [isActive, setIsActive] = React.useState();
    const reservs = useSelector(state => state.reservs);
    const dispatch = useDispatch();
    const restDataStorage = window.localStorage.getItem('RestData');
    const restData = JSON.parse(restDataStorage);
    const restoId = restData.restaurant.id;

    const handleDelete = (id) => {
        const activeReservs = reservs.filter(reserv => reserv.id !== id);
        setIsActive(activeReservs);
    }

    React.useEffect(() => {
        dispatch(actions.getReservs(restoId));
    }, [dispatch, restoId]);

    const rows = reservasRows;
    const columns = reservasColumns;

    return (
        <>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );
};
