import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const auth = () =>
  axios.create({
    baseURL: `https://gwf.exceedbravo.com/todos/api/v1/`,
    timeout: 30000,
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const register = async (data) => {
  try {
    const res = await axios.post(
      "https://gwf.exceedbravo.com/todos/api/v1/register",
      data
    );

    localStorage.setItem("token", res.data.token);

    return res.data;
    // const { user, token } = res.data;
    // console.log(user, token);
  } catch (error) {
    console.log(error);
  }

  // .then((item) => console.log(item));
};

export const login = async (data) => {
  return axios
    .post("https://gwf.exceedbravo.com/todos/api/v1/login", data)
    .then((item) => item.data)
    .catch((e) => e.error);
};

export const todos = async () => {
  const res = auth()
    .get("/todos")
    .then((item) => {
      const todos = item.data;
      console.log(todos);
    });
};
