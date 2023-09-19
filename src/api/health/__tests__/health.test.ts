import request from "supertest";
import app from "../../../app";

describe("GET /api/health", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
  });
});
