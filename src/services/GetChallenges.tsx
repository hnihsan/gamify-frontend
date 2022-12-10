import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Challenge } from "../models/Challenge";

export function getChallenges(subjectId: string): Promise<Array<Challenge>> {
  var reqParam = {
    query: {
      subjectId: subjectId,
    },
  };

  var config = getAPIConfig("POST", "GetChallengesBySubjectId", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Challenge(obj));
  });
}
