import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Challenge } from "../models/Challenge";
import { Subject } from "../models/Subject";

export function getChallengeById(id: string): Promise<Challenge> {
  var reqParam = {
    query: {
      _id: id,
    },
  };

  var config = getAPIConfig("POST", "GetChallengeById", reqParam);
  return axios(config).then((response) => new Challenge(response.data.data));
}
