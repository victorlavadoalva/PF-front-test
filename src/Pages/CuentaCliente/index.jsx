import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { updateAccount } from "../../Redux/actions";

import styles from "./styles.module.css";
import { Transactions } from "./transactions";
import { Reservations } from "./reservations";

// import PedidosCliente from "../../Components/PedidosCliente";
// import ReservasCliente from "../../Components/ReservasCliente";

export default function CuentaCliente({ userId, userData }) {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { error, updateSuccess } = useSelector((state) => state);

  const userLog = localStorage.getItem("UserLogVerificate");
  const { id, name: storedName, email: storedEmail, phone: storedPhone, address: storedAddress } = JSON.parse(userLog);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate.push("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      console.log("Error al actualizar la cuenta:", error);
    }
  }, [error]);

  useEffect(() => {
    setName(storedName || "");
    setEmail(storedEmail || "");
    //! TODO descomentar cuando haya info del back
    // setPhone(storedPhone || "");
    // setAddress(storedAddress || "");
  }, [storedName, storedEmail, 
    // storedPhone, storedAddress
  ]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleUpdateAccount = () => {
    const userData = {
      name,
      email,
      phone,
      address,
      type_customer: "Cliente",
    };

    const hasChanges =
      name !== storedName ||
      email !== storedEmail
      //! TODO descomentar cuando haya info del back 
      // ||
      // phone !== storedPhone ||
      // address !== storedAddress;

    if (hasChanges) {
      dispatch(updateAccount(id, userData));
    }
  };

  return (
    <div>
      <Box className={styles.container}>
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
              Mi Cuenta
            </Typography>
            <TextField
              label="Nombre Completo"
              value={name}
              onChange={handleChangeName}
              fullWidth
              margin="normal"
              disabled
            />
            <TextField
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              margin="normal"
              disabled
            />
            <TextField
              label="Teléfono"
              value={phone}
              onChange={handleChangePhone}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Dirección"
              value={address}
              onChange={handleChangeAddress}
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              sx={{ background: "#3A506B" }}
              onClick={handleUpdateAccount}
            >
              Actualizar
            </Button>
            {updateSuccess && (
              <Typography variant="body1" color="success" padding="2%">
                ¡La cuenta se ha actualizado con éxito!
              </Typography>
            )}
          </Paper>
        </Box>
        <Transactions />
        {/* ver si se le va a dar funcionalidad a las Reservations */}
        <Reservations />
      </Box>
    </div>
  );
}
