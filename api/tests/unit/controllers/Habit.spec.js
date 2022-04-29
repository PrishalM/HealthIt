const habitController = require("../../../controllers/habits");
const Habit = require("../../../models/habits");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe("habit controller", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("index", () => {
    test("it returns habits with a 200 status code", async () => {
      jest.spyOn(Habit, "all", "get").mockResolvedValue(["habit1", "habit2"]);
      await habitController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(["habit1", "habit2"]);
    });
  });

  describe("show by id", () => {
    test("it returns a habit with a 200 status code", async () => {
      let testHabit = {
        id: 1,
        user_id: 1,
        habit_name: "Sleep",
        frequency: 10,
        frequency_count: 2,
      };
      jest
        .spyOn(Habit, "findByHabitId")
        .mockResolvedValue(new Habit(testHabit));

      const mockReq = { params: { id: 1 } };
      await habitController.showHabitbyHabitId(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
    });
  });

  // Not working - should return an array
  describe("show by id", () => {
    test("it returns a habit with a 200 status code", async () => {
      let testHabit = {
        id: 1,
        user_id: 1,
        habit_name: "Sleep",
        frequency: 10,
        frequency_count: 2,
      };
      jest
        .spyOn(Habit, "habitsByUserId")
        .mockResolvedValue(new Habit(testHabit));

      const mockReq = { params: { id: 1 } };
      await habitController.showHabitbyHabitId(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
    });
  });

  describe("create", () => {
    test("it returns a new Habit with a 201 status code", async () => {
      let testHabit = {
        id: 2,
        user_id: 1,
        habit_name: "Water",
        frequency: 2000,
        frequency_count: 1000,
      };
      jest.spyOn(Habit, "create").mockResolvedValue(new Habit(testHabit));

      const mockReq = { body: testHabit };
      await habitController.create(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
    });
  });

  describe("patch", () => {
    test("it returns the Habit with a 200 status code", async () => {
      let testHabit = {
        id: 2,
        user_id: 1,
        habit_name: "Water",
        frequency: 2000,
        frequency_count: 1000,
      };
      jest.spyOn(Habit, "patch").mockResolvedValue(new Habit(testHabit));

      const mockReq = { body: testHabit };
      await habitController.patch(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
    });
  });

  //   This is not working
  describe("destroy", () => {
    test("it returns a 204 status code on successful deletion", async () => {
      jest.spyOn(Habit.prototype, "destroy");

      const mockReq = { params: { id: 1 } };
      await habitController.destroy(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(204);
    });
  });
});
