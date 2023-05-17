import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { User } from "../models/User";

export function getUserRank(_id: string): Promise<number> {
  var reqParam = {
    query: {
      _id: _id,
    },
  };

  var config = getAPIConfig("POST", "GetUserRank", reqParam);
  return axios(config).then((response) => response.data.data.rank);
}
