import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Quiz } from "../models/Quiz";

export function getQuizzes(challengeId: string): Promise<Array<Quiz>> {
  var reqParam = {
    query: {
      challengeId: challengeId,
    },
  };

  var config = getAPIConfig("POST", "GetQuizzesByChallengeId", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Quiz(obj));
  });
}
