import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { Subject } from "../models/Subject";

export function getSubject(subjectId: string): Promise<Subject> {
  var reqParam = {
    query: {
      _id: subjectId,
    },
  };

  var config = getAPIConfig("POST", "GetSubjectDetail", reqParam);
  return axios(config).then((response) => new Subject(response.data.data));
}
