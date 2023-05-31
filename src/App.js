import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Pedidos from "./Components/Pedidos";
import Reservas from "./Components/Reservas";
import RutasAdmin from "./Components/RutasProtegidas/RutasAdmin";
import RutasCliente from "./Components/RutasProtegidas/RutasCliente";
import RutaRestaurant from "./Components/RutasProtegidas/RutasNegocio";
import RutasUsers from "./Components/RutasProtegidas/RutasUsers";
import Error404 from "./Pages/404";
import CuentaCliente from "./Pages/CuentaCliente";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import FormPlatos from "./Pages/FormPlatos";
import ReservasCliente from "./Pages/FormReservas";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
// import { Map } from "./Pages/Map/Map.jsx";
import AboutUs from "./Pages/AboutUs";
import Developers from "./Pages/Developers";
import FormUser from "./Pages/FormUser";
import Map from "./Pages/Map/Map";
import MenuCliente from "./Pages/MenuClientes";
import RestoHome from "./Pages/RestoHome";
import Store from "./Pages/Store";
import { LoadingApp } from "./Redux/actions";
import AdminUser from "./View/AdminUsers";
import AdminView from "./View/AdminUsers/index";
import Dashboard from "./View/Dashboard/RestaurantDashboard";
import Loading_Login from "./View/Loading";
import UserType from "./View/SelectType";
import styles from "./styles.module.css";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loadingApp } = useSelector((state) => state);
  const { isLoading } = useAuth0();
  useEffect(() => {
    if (isLoading) {
      dispatch(LoadingApp(true));
    } else {
      dispatch(LoadingApp(false));
    }
  }, [dispatch, isLoading]);
  return (
    <>
      <div className={styles.app}>
        {isLoading || loadingApp ? (
          // eslint-disable-next-line react/jsx-pascal-case
          <Loading_Login />
        ) : (
          <>
            {location.pathname !== "/" &&
              location.pathname !== "/landing" &&
              location.pathname !== "/user-type" && <Header />}
            <main className={styles.main}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="adminView" element={<AdminView />} />
                <Route path="mapa" element={<Map />} />

                <Route element={<RutasUsers />}>
                  {/* Usuario registrandose */}
                  <Route path="/user-type" element={<UserType />}>
                    <Route exact path="form" element={<Form />} />
                    <Route exact path="formUser" element={<FormUser />} />
                  </Route>
                  {/* Con o sin iniciar sesion */}
                  <Route path="/" element={<Landing />}>
                    <Route path="home" element={<Home />}>
                      <Route path="aboutUs" element={<AboutUs />} />
                      <Route path="developers" element={<Developers />} />
                      {/* Usuaio tipo Cliente */}
                      <Route>
                        <Route path="cart" element={<Store />} />
                      </Route>
                      <Route element={<RutasCliente />}>
                        <Route
                          path="cuentaCliente"
                          element={<CuentaCliente />}
                        />
                      </Route>
                      <Route path="detail/:restoId" element={<Detail />}>
                        <Route
                          path="menuCliente/:id"
                          element={<MenuCliente />}
                        />
                        <Route
                          path="reservas/:id"
                          element={<ReservasCliente />}
                        />
                      </Route>
                    </Route>
                  </Route>
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Error 404 */}
                <Route path="*" element={<Error404 />} />
                {/* -------------------------------------------------------------------------------------- */}
                {/* Usuario tipo Restaurante */}
                <Route element={<RutaRestaurant />}>
                  {/* Cambiar nombre de la ruta form por ¿"create_restaurant"? */}
                  <Route exact path="/form" element={<Form />} />
                  {/* Al componente de la ruta restorant agregarle el Outlet, Ej:El landing tiene para ver*/}
                  <Route path="/restorant" element={<RestoHome />}>
                    {/*Pasarle los componentes por element*/}
                    <Route path="pedidos" element={<Pedidos />} />
                    <Route path="add_food" element={<FormPlatos />} />
                    <Route path="menu" />
                    <Route path="reservas" element={<Reservas />} />
                  </Route>
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Rutas Admin */}
                <Route element={<RutasAdmin />}>
                  <Route path="/admin/usuarios" element={<AdminUser />} />
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Cierra ruta potegida con o sin login */}
              </Routes>
            </main>
            {location.pathname !== "/user-type" && <Footer />}
          </>
        )}
      </div>
    </>
  );
}

export default App;
