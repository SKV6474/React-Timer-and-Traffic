import Cookies from "js-cookie";

export const RemoveCookies = () => {
  Cookies.remove("jwt_token");
};
