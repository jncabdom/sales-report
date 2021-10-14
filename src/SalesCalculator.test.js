import { SalesCalculator } from "./SalesCalculator";

const exampleInput = [
  ["pan", "1", "2"],
  ["pack de 12 huevos","1","2"],
  ["milk", "2", "6"],
]

describe("SalesCalculator", () => {
  it("returns the full sum of sales when given a sales input", async () => {
    const salesCalculator = new SalesCalculator();
    
    const totalSalesResult = salesCalculator.getSalesReport(exampleInput);

    expect(totalSalesResult).toEqual(16);
  })
})
