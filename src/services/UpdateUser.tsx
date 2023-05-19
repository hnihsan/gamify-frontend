import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { InsertResponse } from "../models/ApiModel";
import { NewUser, UpdateUserModel } from "../models/User";

export function updateUser(
  userId: string,
  updateUser: UpdateUserModel
): Promise<InsertResponse> {
  var reqParam = {
    document: { userId: userId, updateParams: updateUser },
  };

  var config = getAPIConfig("POST", "UpdateProfile", reqParam);
  return axios(config).then(
    (response) => new InsertResponse(response.data.data)
  );
}
