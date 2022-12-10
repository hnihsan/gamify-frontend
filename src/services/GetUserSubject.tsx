import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { UserSubject } from "../models/UserSubject";

export function getUserSubject(_id: string): Promise<UserSubject> {
  var reqParam = {
    query: {
      _id: _id,
    },
  };

  var config = getAPIConfig("POST", "GetUserSubject", reqParam);
  return axios(config).then((response) => new UserSubject(response.data.data));
}
