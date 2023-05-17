import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { User, UserLeaderboard } from "../models/User";

export function getLeaderboard(
  limit: number = 5
): Promise<Array<UserLeaderboard>> {
  var reqParam = {
    query: {
      limit: limit,
    },
  };

  var config = getAPIConfig("POST", "GetLeaderboard", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new UserLeaderboard(obj));
  });
}
