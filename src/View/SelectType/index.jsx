import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import styles from "./styles.module.css"
import { PostUser } from "../../Redux/actions";

export default function UserType() {
  const navigate = useNavigate()
  const {postuser} = useSelector(state => state);
  const dispatch = useDispatch();
  const objUser = JSON.parse(window.localStorage.getItem("UserVerificated"))
  

  const [UserNew, setUserNew] = useState({
    id:null,
    name:objUser.name,
    email:objUser.email,
    type_customer:"",
    description:null,
    valoraciones:[],
    rating:null
  })
  const [savedData , setSaveData] = useState(false)
  const [isRestaurant, setIsRestaurant] = useState(false)
  const [isClient, setIsClient] = useState(false)
console.log(postuser)


const handleTypeClient = (event) => {
  event.preventDefault()
  const updatedUser = { ...UserNew, type_customer: "Cliente" };
  setUserNew(updatedUser);
  setSaveData(true)
  setIsClient(true)
}
const handleTypeRestaurant= (event) => {
  event.preventDefault()
  const updatedUser = { ...UserNew, type_customer: "Restaurante" };
  setUserNew(updatedUser);
  setSaveData(true)
  setIsRestaurant(true)
  window.localStorage.setItem("IsLogin", true)
}


useEffect(() => {
  if (savedData) {
    
    console.log(UserNew);
    if (isClient) {
      dispatch(PostUser(UserNew));
      
    } else if (isRestaurant) {
      window.localStorage.setItem("UserLogVerificate", JSON.stringify(UserNew));
      window.localStorage.removeItem("redirectPath")
      
      navigate("/form");
      
    }
  }      
}, [navigate, dispatch, savedData, UserNew, isClient, isRestaurant]);




useEffect(() => {
if(postuser){
  const redirectPath = localStorage.getItem('redirectPath');
      console.log("Obj USER", postuser)
      window.localStorage.setItem("UserLogVerificate", JSON.stringify(postuser));
      console.log(redirectPath)
      window.localStorage.setItem("IsLogin", true);
      navigate(redirectPath)
}
},[postuser.length])



  return (
    <div className={styles.container}>
                <ul>
                    <li>
                        <button onClick={handleTypeClient} value={UserNew.type_customer}>Cliente</button>
                    </li>
                    <li>
                        <button onClick={handleTypeRestaurant} value={UserNew.type_customer}>Restaurante</button>
                    </li>
                </ul>
    </div>
  );
}