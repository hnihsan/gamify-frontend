import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Challenge } from "../models/Challenge";

export function getChallenges(
  subjectId: string,
  userId: string
): Promise<Array<Challenge>> {
  var reqParam = {
    query: {
      subjectId: subjectId,
      userId: userId,
    },
  };

  var config = getAPIConfig("POST", "GetChallengesBySubjectId", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Challenge(obj));
  });
}
