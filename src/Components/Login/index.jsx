import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import * as React from "react";
import { useDispatch } from "react-redux";
import { LoadingApp } from "../../Redux/actions";

export default function Login_Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated,user, loginWithRedirect, logout ,isLoading} = useAuth0();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogOut = () => {
    window.localStorage.removeItem("redirectPath");
    window.localStorage.removeItem("UserToken");
    window.localStorage.removeItem("UserLogVerificate");
    window.localStorage.removeItem("access_token");
    window.localStorage.setItem("IsLogin", false);
    dispatch(LoadingApp(true))
    logout();
  };
  const handleCuentaCliente = () =>{
    navigate('/home/cuentaCliente')
}
  const getlocalstorage = window.localStorage.getItem("UserLogVerificate")
  const userLocal = JSON.parse(getlocalstorage)

  const handleLogin = () => {
    window.localStorage.setItem("redirectPath", window.location.pathname);
    // dispatch(LoadingApp(true))
    loginWithRedirect();
  };

  // useEffect(() => {
  //   if(user){
  //     dispatch(LoadingApp(false))
  //   }
  // },[user])

console.log(user)
  return (
    <>
      {user ? (
        <>
        {/*No borrar*/}
          {/* <div className={styles.perfil}>
            <img
              className={styles.imagePerfil}
              src={user.picture}
              alt={user.name}
              onClick={() => handleActivatePerfil()}
            />
            {PerfilActive && (
              <div className={styles.perfilDesplegable}>
                <div>
                  <img />
                  <p>Franco Krismann</p>
                </div>
                <ul className={styles.perfilDesplegable__lista}>
                  <li>
                    <p>Configuracion</p>
                  </li>
                  <li>
                    <p>Log Out</p>
                  </li>
                </ul>
              </div>
            )}
          </div> */}
          <Box className={styles.container}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 52, height: 52 }}>{user.name[0] || userLocal.name[0]  }</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            // maxHeight: '200px',
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr:1,
            },
            "&:before": {
              content: '""',
              display: "flex",
              position: "absolute",
              top: 0,
              left: "45%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            pointerEvents: "none",
          }}
        >
          <Avatar /> {user.name || userLocal.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCuentaCliente}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </>
      ) : (
        <>
          <div className={styles.buttonAccount}>
            <button className={styles.btn} onClick={() => handleLogin()}>
              {isLoading ? "Cargando" : "Login"}
            </button>
          </div>
        </>
      )}
    </>
  );
}
