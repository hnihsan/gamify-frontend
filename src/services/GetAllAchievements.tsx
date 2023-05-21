import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Achievement } from "../models/Achievement";

export const getAllAchievements = () => {
  var config = getAPIConfig("GET", "GetAllAchievements");
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Achievement(obj));
  });
};
