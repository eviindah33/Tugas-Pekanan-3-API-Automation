import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";
import { baseUrl } from "../../data/config.js";

describe("Get Token Scenario", () => {
  let token;
  it("Positive - Success Get Token", async () => {
    const payload = {
      username: "admin",
      password: "password123",
    };
    const response = await request(baseUrl).post("/authentications").send(payload).set("Content-Type", "application/json");

    expect((await response).status).to.equal(200);
    token = (await response).body.token;
    console.log(await token);
  });

  it("Positive - Success Implement Token", async () => {
    const response = await request(baseUrl)
      .put("/authentications" + bookingId)
      .set("Cookie", token);
  });

  it("Positive - Refresh Token", async () => {
    const payload = {
      username: "admin",
      password: "password123",
    };
    const response = await request(baseUrl)
      .put("/authentications/" + bookingId)
      .send(payload)
      .set("cookie", token);
  });

  it("Import Token", async () => {
    const token = await createToken();
    console.log(await token);
  });
});
