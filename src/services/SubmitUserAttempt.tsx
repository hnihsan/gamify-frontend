import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { SubmitUserAttempt_VM } from "../models/UserAttempt";
import { UserSubject } from "../models/UserSubject";

export function submitUserAttempt(
  model: SubmitUserAttempt_VM
): Promise<Array<UserSubject>> {
  var reqParam = {
    document: model,
  };

  var config = getAPIConfig("POST", "SubmitAttempt", reqParam);
  return axios(config).then(function (response) {
    return response.data;
  });
}
