import axios from "axios";
import { getAPIConfig } from "../lib/AxiosConfig";
import { UserSubject } from "../models/UserSubject";
import { MetadataModel } from "../models/Metadata";

export function getMetadata(): Promise<MetadataModel> {
  var config = getAPIConfig("GET", "GetMetadata", {});
  return axios(config).then(
    (response) => new MetadataModel(response.data.data)
  );
}
