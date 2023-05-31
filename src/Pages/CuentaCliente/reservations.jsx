import { Box, Paper, Typography } from "@mui/material";
import ReservasCliente from "../../Components/ReservasCliente";

export const Reservations = () => {
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
            Mis Reservas
          </Typography>
          <ReservasCliente />
        </Paper>
      </Box>
    </Box>
  );
};
