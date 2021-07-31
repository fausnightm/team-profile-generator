const Engineer = require("../lib/Engineer");

test("Can set GitHUb account with constructor", () => {
  const gitHub = "GitHubUser";
  const eng = new Engineer("billy", 1, "billyboy@hmail.com", gitHub);;
  expect(eng.github).toBe(gitHub);
});

test("getRole() should return Engineer as a role", () => {
  const role = "Engineer";
  const eng = new Engineer("billy", 1, "billyboy@hmail.com", "billyboy");
  expect(eng.getRole()).toEqual(role);
});