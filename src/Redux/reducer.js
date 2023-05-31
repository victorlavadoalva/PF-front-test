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
  GET_FILTERED,
  GET_RESTOURANT_ID,
  GET_TOKEN,
  GET_USER_EMAIL,
  LOADING,
  LOGIN,
  POST_USER,
  UPDATE_SUCCESS,
  UPDATE_USER,
  GET_RESERVS,
  GET_ORDERS,
} from "./actionsTypes";

const initialState = {
  restorants: {},
  allRestorants: [],
  RestaurantID: [],
  AmountPage: "",
  Admin: [],
  loadingApp: false,
  tokenLogin: [],
  postuser: [],
  userFoundByEmail: [],
  error: [],
  plates: [],
  dishes: [],
  cart: [],
  filter_landing: [],
  user: {},
  updateSuccess: false,
  reservs:{},
  orders:{},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS: 
      return {
        ...state,
        orders: payload
      }
    case GET_RESERVS:
      return {
        ...state,
        reservs: payload
      } 
    case DELETE_CART:
      return {
        ...state,
        cart: [],
      };
    case ADD_FROM_STORE:
      return {
        ...state,
        cart: payload,
      };
    case DELETE_FROM_CART:
      const filtered = state.cart.filter((product) => product.id !== payload);
      return {
        ...state,
        cart: filtered,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case GET_ALL_RESTORANTS:
      return {
        ...state,
        allRestorants: payload,
        restorants: payload,
      };
    case FILTER_LANDING:
      return {
        ...state,
        filter_landing: payload,
      };
    case GET_FILTERED:
      return {
        ...state,
        restorants: payload,
      };
    case POST_USER:
      return {
        ...state,
        postuser: payload,
      };
    case GET_USER_EMAIL:
      return {
        ...state,
        userFoundByEmail: payload,
      };
    case LOADING:
      return {
        ...state,
        loadingApp: payload,
      };
    case GET_TOKEN:
      return {
        ...state,
        tokenLogin: payload,
      };
    case LOGIN:
      return {
        ...state,
        login: payload,
      };
    case GET_RESTOURANT_ID:
      return {
        ...state,
        RestaurantID: payload,
      };
    case GET_DISH:
      return {
        ...state,
        dishes: payload,
      };
    case GET_AMOUNTPAGES:
      return {
        ...state,
        AmountPage: payload,
      };
    case GET_ADMIN_USER:
      return {
        ...state,
        Admin: payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        updateSuccessful: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
