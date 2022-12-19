import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import {
  CreateInitialUserAttempt_VM,
  SubmitUserAttempt_VM,
} from "../models/UserAttempt";
import { UserSubject } from "../models/UserSubject";

class insertResponse {
  acknowledged: boolean | null;
  insertedId: string | null;
  message: string | null;

  constructor(obj) {
    this.acknowledged = obj?.result?.acknowledged;
    this.insertedId = obj?.result?.insertedId;
    this.message = obj?.message;
  }
}

export function createInitialUserAttempt(
  model: CreateInitialUserAttempt_VM
): Promise<insertResponse> {
  var reqParam = {
    document: model,
  };

  var config = getAPIConfig("POST", "CreateInitialAttempt", reqParam);
  return axios(config).then(function (response) {
    return new insertResponse(response.data.data);
  });
}

export function submitUserAttempt(
  model: SubmitUserAttempt_VM
): Promise<insertResponse> {
  var reqParam = {
    document: model,
  };

  var config = getAPIConfig("POST", "SubmitAttempt", reqParam);
  return axios(config).then(function (response) {
    return new insertResponse(response.data.data);
  });
}
