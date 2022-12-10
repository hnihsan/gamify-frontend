import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";

export function getAllSubjects() {
  var config = getAPIConfig("GET", "GetAllSubjects");
  return axios(config);
}
