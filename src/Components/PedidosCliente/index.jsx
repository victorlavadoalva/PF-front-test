import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function PedidosCliente({ rows }) {

  const columns = [
    {
      field: "day",
      headerName: "Fecha",
      type: "string",
      width: 100,
    },
    { field: "id", headerName: "Pedido N°", width: 90 },
    {
      field: "name",
      headerName: "Restaurant",
      width: 200,
    },
    {
      field: "plate",
      headerName: "Plato",
      type: "objct",
      width: 200,
    },
    {
      field: "status",
      headerName: "Pagado",
      type: "boolean",
      width: 90,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
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
}
