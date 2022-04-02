import http from "./httpService";

const apiUrl = "http://webswitch.ir:3000"
const apiEndpoint = apiUrl + "/actors";

export function getActors() {
  return http.get(apiEndpoint);
}
export function updateActor(data){
    return http.post(apiEndpoint, data);
}
