import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";

export default function BasicButtons() {
  const navigate = useNavigate();
  const { restoId } = useParams();
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        sx={{ background: "#3A506B" }}
        onClick={() => navigate(`reservas/${restoId}`)}
      >
        Reservas
      </Button>
      <Button
        variant="contained"
        sx={{ background: "#3A506B" }}
        onClick={() => navigate(`menuCliente/${restoId}`)}
      >
        Menú
      </Button>
    </Stack>
  );
}
