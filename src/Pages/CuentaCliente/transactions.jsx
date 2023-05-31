import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PedidosCliente from "../../Components/PedidosCliente";
import { pedidosClienteRows } from "../../dataHardcodeo/constants";

// import styles from "./styles.module.css";

export const Transactions = ({ restId }) => {
  const [pedidoRows, setPedidoRows] = useState([]);

  useEffect(() => {
    const fetchPedidosCliente = async () => {
      try {
        const { data } = await axios.get(`/transactions/${restId}`);
        setPedidoRows(data);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidosCliente();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" align="left">
            Mis Pedidos
          </Typography>
          <PedidosCliente rows={pedidosClienteRows} />
        </Paper>
      </Box>
    </Box>
  );
};
