import { expect } from "chai";
import { createBooking } from "../function/createBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { getBooking } from "../function/getBooking.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";

describe("End to End - User", () => {
  let token;
  let userId;

  it("Success Create User", async () => {
    const response = await createBooking();

    expect(awaitresponse.status).to.equal(418);
    userId = (await response).body.userId;
  });

  it("Success Get User", async () => {
    const response = await getBooking.id(userId);

    expect(await response.status).to.equal(200);
    userId = (await response).body.userId;
  });

  it("Success Update User", async () => {
    token = await createToken();
    const response = await updateBooking(userId, token);

    expect(await response.status).to.equal(200);
  });
});
