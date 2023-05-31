import axios from "axios";
import {
  ADD_FROM_STORE,
  ADD_TO_CART,
  DELETE_CART,
  DELETE_FROM_CART,
  ERROR,
  FILTER_LANDING,
  GET_ADMIN_USER,
  GET_ALL_RESTORANTS,
  GET_AMOUNTPAGES,
  GET_DISH,
  GET_ORDERS,
  GET_RESERVS,
  GET_RESTOURANT_ID,
  GET_TOKEN,
  GET_USER_EMAIL,
  LOADING,
  POST_USER,
  UPDATE_SUCCESS,
  UPDATE_USER,
} from "./actionsTypes";
//const token = process.env.GET_TOKEN;
//const GET_URL_TOKEN = `https://pf-backend-production-83a4.up.railway.app/${token}`

const token = process.env.GET_TOKEN;
const GET_URL_TOKEN = `https://pf-backend-production-83a4.up.railway.app/${token}`;
const URL_RESTAURANT = "/restaurants";
const URL_USERS = "/users";
const URL_POST = "/posts";
const backendUrl = "/users";

export const getRestorants = ({
  page = 1,
  order,
  rating,
  name,
  country,
  tags,
}) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(URL_RESTAURANT, {
        params: { page, order, rating, name, country, tags },
      });
      console.log("Server Response:", data);
      return (
        dispatch({ type: GET_ALL_RESTORANTS, payload: data[0] }),
        dispatch({ type: GET_AMOUNTPAGES, payload: data[0].totalPages })
      );
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorGetRestorant: "ErrorGetRestorant" }],
      });
    }
  };
};

export const getRestorantFilter = (tags) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(URL_RESTAURANT, {
        params: { tags },
      });
      return dispatch({ type: FILTER_LANDING, payload: data });
    } catch (error) {}
  };
};

export const getDish = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(URL_RESTAURANT + "/" + id);
      const { menu } = response.data;
      console.log("response menu:", JSON.stringify(menu));
      return dispatch({ type: GET_DISH, payload: menu });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};
export const GetUserEmail = ({ saveEmail }) => {
  return async function (dispatch) {
    try {
      console.log(saveEmail);
      const response_user = await axios.get(URL_USERS + `?email=${saveEmail}`);
      const response_restaurant = await axios.get(
        URL_RESTAURANT + `?email=${saveEmail}`
      );
      const dataUser = response_user.data;
      const dataRestaurant = response_restaurant.data;
      if (dataUser) {
        return dispatch({ type: GET_USER_EMAIL, payload: [true, dataUser] });
      } else if (dataRestaurant) {
        return dispatch({
          type: GET_USER_EMAIL,
          payload: [true, dataRestaurant],
        });
      } else {
        return dispatch({ type: GET_USER_EMAIL, payload: [false, null] });
      }
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorPost: "ErrorPostUser" }],
      });
    }
  };
};

export const GetTokenLogin = (typeUser, email) => {
  return async function (dispatch) {
    try {
      if (typeUser === "Cliente") {
        console.log("!!!!!!!ActionsToken", email);
        const { data } = await axios.get(URL_USERS + `/login/${email}`);
        localStorage.setItem("access_token", data.token);

        return dispatch({ type: GET_TOKEN, payload: data });
      } else if (typeUser === "Restaurante") {
        const { data } = await axios.get(URL_RESTAURANT + `/login/${email}`);
        localStorage.setItem("access_token", data.token);

        return dispatch({ type: GET_TOKEN, payload: data });
      }
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorToken: "ErrorToken" }],
      });
    }
  };
};

export const PostUser = (User) => {
  return async function (dispatch) {
    try {
      console.log(User);
      const { data } = await axios.post(URL_USERS, User);
      return dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorPost: "ErrorPostUser" }],
      });
    }
  };
};

export const PostRestaurant = (Restaurant) => {
  return async function (dispatch) {
    try {
      console.log(Restaurant);
      const { data } = await axios.post(URL_RESTAURANT, Restaurant);
      return dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorPost: "ErrorPostUser" }],
      });
    }
  };
};

export const GetAdminUser = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get();
      const admin = data.filter((e) => e.admin === true);
      return dispatch({ type: GET_ADMIN_USER, payload: admin });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};

export const getRestorantsID = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(URL_RESTAURANT + "/" + id);
      const data = response.data;
      return dispatch({ type: GET_RESTOURANT_ID, payload: data });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};

export const LoadingApp = (boolean) => {
  return async function (dispatch) {
    return dispatch({
      type: LOADING,
      payload: boolean,
    });
  };
};

export const updateAccount = (userId, userData) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOADING });
      const token = localStorage.getItem("access_token");
      const resp = await axios.put(
        `${backendUrl}/${userId}`,
        {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: UPDATE_USER, payload: resp.data });

      const updateSuccessful = resp.status === 200;

      dispatch({ type: UPDATE_SUCCESS, payload: updateSuccessful });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: [{ error }, { errorUpdateAccount: "ErrorUpdateAccount" }],
      });
    }
  };
};

export const addToCart = (cart) => {
  return async function (dispatch) {
    return dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };
};

export const addFromStore = (item) => {
  return async function (dispatch) {
    return dispatch({
      type: ADD_FROM_STORE,
      payload: item,
    });
  };
};

export const deleteFromCart = (productId) => {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_FROM_CART,
      payload: productId,
    });
  };
};
export const deleteCart = () => {
  return async function (dispatch) {
    return dispatch({
      type: DELETE_CART,
    });
  };
};
export const getReservs = (restoId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pf-backend-production-83a4.up.railway.app/restorant/${restoId}`
      );
      const data = response.data;
      return dispatch({
        type: GET_RESERVS,
        payload: data,
      });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};
export const getOrders = (restoId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pf-backend-production-83a4.up.railway.app/restorant/${restoId}`
      );
      const data = response.data;
      return dispatch({
        type: GET_ORDERS,
        payload: data,
      });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};
