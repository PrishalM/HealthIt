describe("habits endpoints", () => {
  let api;
  beforeEach(async () => {
    await resetTestDB();
  });

  beforeAll(async () => {
    api = app.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  afterAll(async () => {
    console.log("Gracefully stopping test server");
    await api.close();
  });

  it("should return a list of all habits in database", async () => {
    const res = await request(api).get("/habits");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });

  it("should create a new habit", async () => {
    const res = await request(api).post("/habits").send({
      user_id: 1,
      habit_name: "Test Habit 1",
      frequency: 10,
      frequency_count: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
