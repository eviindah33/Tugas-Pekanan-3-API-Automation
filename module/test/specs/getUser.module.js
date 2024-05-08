// ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { getUser } from "../function/getUser.spec.js";
import { baseUrl } from "../../data/config.js";

const name = "Sally";
const email = "sally@gmail.com";

// Describe the test suite
describe("Get All Users", () => {
  it("Positive - success get all user", async () => {
    let response = await request(baseUrl) //baseurl
      .get("/users"); //endpoint

    // Assertion pake chai
    expect((await response).status).to.equal(200);
    console.log((await response).status);
  });

  it("Positive - success get all user with param", async () => {
    let response = await request(baseUrl) //baseurl
      .get(`/booking` + `?name=${name}&email=${email}`); //endpoint with query params

    // Assertion pake chai
    expect((await response).status).to.equal(200);
  });

  it("Positive - success get user id", async () => {
    let response = await request(baseUrl) //baseurl
      .get(`/users/${userId}`); //endpoint with id path
    console.log(`/users/${userId}`);

    // Assertion pake chai
    expect((await response).status).to.equal(200);
    console.log((await response).body);
  });
});

describe("Get User Scenario by Function", () => {
  it("success get user all", async () => {
    const response = await getUser.all();
    // Assertion pake chai
    expect((await response).status).to.equal(200);
    console.log((await response).body);
  });
});
