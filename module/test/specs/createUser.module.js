import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../data/config.js";

describe("Create User Scenario", () => {
  it("Positive - Success User Booking", async () => {
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
  });
});
