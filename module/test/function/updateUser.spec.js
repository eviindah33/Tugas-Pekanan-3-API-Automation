import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function updateusers(userId, token) {
  const response = await request(baseUrl)
    .put("/users" + userId)
    .set("Cookie", token);

  return response;
}
