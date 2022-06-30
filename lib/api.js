import axios from "axios";
import Cookies from "js-cookie";
import nextCookies from "next-cookies";

const getToken = (ctx) => {
  if (!ctx) return Cookies.get("_token");
  return nextCookies(ctx)?._token;
};

export const auth = (ctx) =>
  axios.create({
    baseURL: `https://playtodos.herokuapp.com/api/v1/`,
    timeout: 30000,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken(ctx)}`,
    },
  });

export const register = async (data) => {
  return axios
    .post("https://playtodos.herokuapp.com/api/v1/register", data)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      return {
        status: error.response.status,
        message: "Validation or Api error",
        data: error.response.data.message,
      };
    });
};

export const login = async (data) => {
  return axios
    .post("https://playtodos.herokuapp.com/api/v1/login", data)
    .then((item) => item.data)
    .catch((error) => {
      return {
        status: error.response.status,
        message: "Validation or Api error",
        data: error.response.data.message,
      };
    });
};

export const todos = async (ctx) => {
  return auth(ctx)
    .get("/todos")
    .then((item) => item.data)
    .catch((e) => e.error);
};
