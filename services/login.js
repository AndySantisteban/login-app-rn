import axios from "axios";

const baseUrl = "http://10.0.2.2:4001";

export const SignIn = async ({ username, password }) => {
  const req = await axios.get(`${baseUrl}/auth/signin`, {
    headers: {
      Email: username,
      Passwordhash: password,
    },
  });
  return req;
};
