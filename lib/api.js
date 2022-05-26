import axios from "axios";

export const register = async (data) => {
  try {
    const res = await axios.post(
      "https://gwf.exceedbravo.com/todos/api/v1/register",
      data
    );
    return res.data;
    // const { user, token } = res.data;
    // console.log(user, token);
  } catch (error) {
    console.log(error);
  }

  // .then((item) => console.log(item));
};

export const login = async (data) => {
  const res = axios
    .post("https://gwf.exceedbravo.com/todos/api/v1/login", data)
    .then((item) => {
      const user = item.data;
      console.log(user);
    });
};
