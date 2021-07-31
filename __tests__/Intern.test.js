const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
  const school = "school";
  const int = new Intern("billy", 1, "billyboy@hmail.com", school);
  expect(int.school).toBe(school);
});

test("getRole() should return Intern as a role", () => {
  const role = "Intern";
  const int = new Intern("billy", 1, "billyboy@hmail.com", "school");
  expect(int.getRole()).toEqual(role);
});