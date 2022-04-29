const Habit = require("../../../models/habits");
const pg = require("pg");
jest.mock("pg");

const db = require("../../../dbConfig/init");

describe("Habit", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it resolves with habits on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [{}, {}, {}] });
      const all = await Habit.all;
      expect(all).toHaveLength(3);
    });
  });

  describe("findById", () => {
    test("it resolves with habit on successful db query", async () => {
      let habitData = { id: 1, name: "Test Habit" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [habitData] });
      const result = await Habit.findByHabitId(1);
      expect(result).toBeInstanceOf(Habit);
    });
  });

  describe("findHabitsByUserId", () => {
    test("it resolves with habits on successful db query", async () => {
      let habitData = { id: 1, name: "Test Habit" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [habitData] });
      const result = await Habit.habitsByUserId(1);
      expect(result).toBeInstanceOf(Array);
      expect(result[0]).toBeInstanceOf(Habit);
    });
  });

  describe("create", () => {
    test("it resolves with habit on successful db query", async () => {
      let habitData = { id: 1, name: "New habit" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [habitData] });
      const result = await Habit.create("New Habit");
      expect(result).toBeInstanceOf(Habit);
    });
  });

  describe("destroy", () => {
    test("it resolves with message on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ id: 1 });
      let testHabit = new Habit({ id: 1, name: "Test Habit" });
      const result = await testHabit.destroy();
      expect(result).toBe("Habit has been deleted");
    });
  });
});
