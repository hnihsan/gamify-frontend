import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { InsertResponse } from "../models/ApiModel";
import { NewUser } from "../models/User";

export function createUser(newUser: NewUser): Promise<InsertResponse> {
  var reqParam = {
    document: newUser,
  };

  var config = getAPIConfig("POST", "CreateUser", reqParam);
  return axios(config).then(
    (response) => new InsertResponse(response.data.data)
  );
}
