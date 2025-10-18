const request = require("supertest");
const app = require("./server");

describe("GET /api/hello", () => {
  it("should return a hello message", async () => {
    const response = await request(app).get("/api/hello");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Hello from Ubuntu server!");
  });
});
