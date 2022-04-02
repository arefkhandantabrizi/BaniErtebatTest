import http from "./httpService";

const apiUrl = "http://webswitch.ir:3000"
const apiEndpoint = apiUrl + "/sensors";

export function getSensors() {
  return http.get(apiEndpoint);
}
