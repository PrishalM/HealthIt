const userController = require("../../../controllers/users");
const User = require("../../../models/users");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe("user controller", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("index", () => {
    test("it returns user with a 200 status code", async () => {
      jest.spyOn(User, "all", "get").mockResolvedValue(["user1", "user2"]);
      await userController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(["user1", "user2"]);
    });
  });

  describe("show", () => {
    test("it returns a user with a 200 status code", async () => {
      let testUser = {
        id: 1,
        user_name: "Test user",
        email: "test@test.com",
        password: "testPassword",
        habit_id: 1,
      };
      jest.spyOn(User, "findUserById").mockResolvedValue(new User(testUser));

      const mockReq = { params: { id: 1 } };
      await userController.show(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new User(testUser));
    });
  });

  describe("create", () => {
    test("it returns a new user with a 201 status code", async () => {
      let testUser = {
        id: 1,
        user_name: "Test user",
        email: "test@test.com",
        password: "testPassword",
        habit_id: 1,
      };
      jest.spyOn(User, "create").mockResolvedValue(new User(testUser));

      const mockReq = { body: testUser };
      await userController.create(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(new User(testUser));
    });
  });
});
