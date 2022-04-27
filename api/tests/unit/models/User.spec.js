const User = require("../../../models/users");
const pg = require("pg");
jest.mock("pg");

const db = require("../../../dbConfig/init");

describe("User", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it resolves with habits on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [{}, {}, {}] });
      const all = await User.all;
      expect(all).toHaveLength(3);
    });
  });

  describe("findById", () => {
    test("it resolves with author on successful db query", async () => {
      let userData = { id: 1, name: "Test User" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });
      const result = await User.findUserById(1);
      expect(result).toBeInstanceOf(User);
    });
  });

  describe("create", () => {
    test("it resolves with author on successful db query", async () => {
      let userData = { id: 1, name: "New User" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });
      const result = await User.create("New User");
      expect(result).toBeInstanceOf(User);
    });
  });
});
