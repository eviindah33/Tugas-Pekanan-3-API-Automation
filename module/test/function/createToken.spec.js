import request from "supertest";
// import { config } from "../../data/config.json";
import { baseUrl } from "../../data/config.js";

export async function createToken() {
  const payload = {
    name: "nama Toko",
    email: "sample@example.com ",
    password: "123adsfadf@",
  };
  //send request
  const response = await request(baseUrl)
    .post("/registration") //endpoint
    .send(payload) //request body
    .set("Content-Type", "application/json"); //header

  const token = (await response).body.token;
  return token;
}
