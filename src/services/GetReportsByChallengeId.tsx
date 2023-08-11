import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Challenge } from "../models/Challenge";
import { Subject } from "../models/Subject";
import { Report } from "../models/Report";

export function getReportsByChallengeId(
  challengeId: string
): Promise<Array<Report>> {
  var reqParam = {
    query: {
      challengeId: challengeId,
    },
  };

  var config = getAPIConfig("POST", "GetReports", reqParam);
  return axios(config).then(function (response) {
    return response.data.data.map((obj) => new Report(obj));
  });
}
