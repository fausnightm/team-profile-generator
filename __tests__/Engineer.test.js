const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(eng.github).toBe(testValue);
});