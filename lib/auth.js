import Cookies from "js-cookie";
import nextCookies from "next-cookies";

export const setCookies = (data) => {
  Cookies.set("_token", data.token);
  Cookies.set("_user", data.user);
};

export const getToken = () => Cookies.get("_token");

export const hasToken = (cxt) => nextCookies(cxt)?._token;

export const Session = {
  destroy: () => Cookies.remove("_token"),
};
