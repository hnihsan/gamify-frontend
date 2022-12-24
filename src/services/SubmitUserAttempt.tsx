import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { InsertResponse } from "../models/ApiModel";
import {
  CreateInitialUserAttempt_VM,
  SubmitUserAttempt_VM,
} from "../models/UserAttempt";

export function createInitialUserAttempt(
  model: CreateInitialUserAttempt_VM
): Promise<InsertResponse> {
  var reqParam = {
    document: model,
  };

  var config = getAPIConfig("POST", "CreateInitialAttempt", reqParam);
  return axios(config).then(function (response) {
    return new InsertResponse(response.data.data);
  });
}

export function submitUserAttempt(
  model: SubmitUserAttempt_VM
): Promise<InsertResponse> {
  var reqParam = {
    document: model,
  };

  var config = getAPIConfig("POST", "SubmitAttempt", reqParam);
  return axios(config).then(function (response) {
    return new InsertResponse(response.data.data);
  });
}
