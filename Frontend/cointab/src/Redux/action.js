import {
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_REQUEST,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT,
  } from "../Redux/action.type";
  import axios from "axios";
  import { removeItem } from "../Utils/localstorage";
  
  export const register = (payload) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    return axios
      .post(`https://backenddeploy-production-3cdb.up.railway.app/user/signup`, payload)
      .then((r) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: r.data });
        return SIGNUP_SUCCESS;
      })
  
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, payload: err });
        return SIGNUP_ERROR;
      });
  };
  
  export const login = (detail) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
      .post(`https://backenddeploy-production-3cdb.up.railway.app/user/login`, detail)
      .then((r) => {
        dispatch({ type: LOGIN_SUCCESS, payload: r.data });
        
        return r;
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, payload: err });
        return LOGIN_ERROR;
      });
  };
  
  export const logout =()=> (dispatch) => {
    removeItem("token");
    removeItem("isAuth");
    dispatch({ type: LOGOUT });
  };