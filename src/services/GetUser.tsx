import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { User } from "../models/User";

export function getUser(email: string): Promise<User> {
  var reqParam = {
    query: {
      email: email,
    },
  };

  var config = getAPIConfig("POST", "GetUserByEmail", reqParam);
  return axios(config).then((response) =>
    response.data.data != null ? new User(response.data.data) : new User({})
  );
}
