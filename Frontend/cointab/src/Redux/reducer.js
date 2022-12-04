import {
    LOGIN_REQUEST,
    SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
  } from "../Redux/action.type";
  
  import { getItem, setItem,removeItem } from "../Utils/localstorage";
  
  const initState = {
    isAuth: getItem("token") ? true : false,
    token: getItem("token") || "",
    isLoading: false,
    isError: false,
    Email:""
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case SIGNUP_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case SIGNUP_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case SIGNUP_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
  
      case LOGIN_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case LOGIN_SUCCESS: {
        setItem("token", payload.token);
        console.log("Reducer PAyload",payload)
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload.token,
          Email:payload.email
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isAuth: false,
          token: "",
        };
      }
      case LOGOUT: {
        removeItem("token");
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          token: "",
        };
      }
      default: {
        return state;
      }
    }
  };
  