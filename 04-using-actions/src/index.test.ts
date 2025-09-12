import { expect, test } from "bun:test";

test("unit-test", async () => {
  const result = await Promise.resolve(2 * 2);
  expect(result).toEqual(4);
});

const baseUrl = "http://localhost:3000";
test("GET /api/hello returns expected JSON response", async () => {
  const response = await fetch(`${baseUrl}/api/hello`);
  expect(response.status).toBe(200);
  const json = await response.json();
  expect(json).toEqual({
    message: "Hello, world!",
    method: "GET"
  });
});