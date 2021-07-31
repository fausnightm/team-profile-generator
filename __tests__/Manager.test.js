const Manager = require("../lib/Manager");

test("Can set phone with constructor", () => {
  const phone = 2;
  const mang = new Manager("billy", 1, "billyboy@hmail.com", phone);
  expect(mang.phone).toEqual(expect.any(Number));
});

test("getRole() should return Manager as a role", () => {
  const role = "Manager";
  const mang = new Manager("billy", 1, "billyboy@hmail.com", 2);
  expect(mang.getRole()).toEqual(role);
});