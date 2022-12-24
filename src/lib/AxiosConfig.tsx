import { mongoConfig } from "../config/backend-config";

export function getAPIConfig(method, urlHandle, dataParam: any = {}) {
  return {
    method: method,
    url: mongoConfig.url + urlHandle,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": process.env.APP_URI,
    },
    data: dataParam,
  };
}
