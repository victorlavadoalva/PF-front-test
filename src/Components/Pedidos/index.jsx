import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/actions';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { pedidosColumns, pedidosRows } from '../../dataHardcodeo/constants'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";

export default function DataGridDemo() {

  const [isActive, setIsActive] = React.useState();
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();
  const restDataStorage = window.localStorage.getItem('RestData');
  const restData = JSON.parse(restDataStorage);
  const restoId = restData.restaurant.id;

  const handleDelete = (id) => {
    const activeOrders = orders.filter(order => order.id !== id);
    setIsActive(activeOrders);
  }

  React.useEffect(() => {
    dispatch(actions.getOrders(restoId));
  }, [dispatch, restoId]);

  const rows = pedidosRows;
  const columns = pedidosColumns;

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
