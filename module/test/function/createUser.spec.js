import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createBooking() {
  const payload = {
    name: "nama Toko",
    email: "sample@example.com ",
    password: "123adsfadf@",
  };
  //send request
  const response = await request(baseUrl)
    .post("/users") //endpoint
    .send(JSON.stringify(payload)) //request body
    .set("Content-Type", "application/json"); //header
  console.log(response);

  expect((await response).status).to.equal(200);

  return await response;
}
