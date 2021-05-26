import { getEmployees } from "./api";

describe("Fetch data", () => {
  it("should fetch the doctors list", async () => {
    const result = await getEmployees();
    expect(result).toHaveLength(6);
  });
});
