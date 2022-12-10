import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { UserSubject } from "../models/UserSubject";

export function getUserSubjects(userId: string): Promise<Array<UserSubject>> {
  var reqParam = {
    query: {
      userId: userId,
    },
  };

  var config = getAPIConfig("POST", "GetUserSubjects", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new UserSubject(obj));
  });
}
