import delay from "redux-saga";

describe(`Doctors Page`, () => {
  beforeEach(() => {
    console.log("Before each!");
  });

  beforeAll(() => {
    console.log("Before all!");
  });

  it(`async test 1`, (done) => {
    setTimeout(done, 100);
  });

  it(`async test 2`, () => {
    return new Promise((resolve) => setTimeout(resolve, 100));
  });

  it(`async test 3`, async () => {
    await delay(100);
  });

  it.only(`should display a table 2`, () => {
    expect(38 + 2).toEqual(40);
  });

  afterAll(() => {
    console.log("After all!");
  });

  afterEach(() => {
    console.log("After each!");
  });
});
