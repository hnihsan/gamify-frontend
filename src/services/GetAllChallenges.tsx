import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Challenge } from "../models/Challenge";

export function getAllChallenges(): Promise<Array<Challenge>> {
  var config = getAPIConfig("GET", "GetAllChallenges");
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Challenge(obj));
  });
}
