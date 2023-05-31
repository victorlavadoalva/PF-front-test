import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAdminUser } from "../../Redux/actions";
import { Outlet } from "react-router-dom";

export default function RutasAdmin() {

    const { user, isAuthenticated, loginWithRedirect } = useAuth0()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const admin = useSelector((state) => state.Admin)
    //Modificar como llega en el objeto
    const gmail = admin.map((e) => e.mail)

    useEffect(() => {
        dispatch(GetAdminUser())
    }, [dispatch, user])

    //Probarlo teniendo el localstorage funcionando bien
    useEffect(() => {
        if (!gmail.includes(user.email)) {
            handleErrorNavigate();
        }
    }, [admin, isAuthenticated, user])

    const handleErrorNavigate = () => {
        alert("No tiene permisos para ingresar a esta seccion")
        navigate('/home');
    }

    if (!isAuthenticated) {
        if (!gmail.includes(user.email)) {
            return null
        }
        return <Outlet />
    }
    return loginWithRedirect()
}




