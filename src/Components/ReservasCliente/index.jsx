import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { reservasClienteColumns, reservasClienteRows } from '../../dataHardcodeo/constants'


export default function ReservasCliente() {

  const rows = reservasClienteRows;
  const columns  = reservasClienteColumns;
  
  return (
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
      />
    </Box>
  );
};