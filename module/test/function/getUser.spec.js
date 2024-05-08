import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function createUser() {
  let response = await request(baseUrl) //baseurl
    .get("/users"); //endpoint

  return await response;
}

async function getusersParams(name, email) {
  let response = await request(baseUrl) //baseurl
    .get(`/users` + `?name=${name}&name=${email}`); //endpoint with query params

  return response;
}

async function getusersId(usersId) {
  let response = await request(baseUrl) //baseurl
    .get(`/users/${usersId}`); //endpoint

  return await response;
}

export const getusers = {
  all: getusersAll,
  params: getusersParams,
  id: getusersId,
};
