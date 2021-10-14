import { SalesCalculator } from "./SalesCalculator";

const exampleInput = [
  { name: "pan", price: 1, quantity: 2 },
  { name: "pack de 12 huevos", price: 1, quantity: 2 },
  { name: "milk", price: 2, quantity: 6 },
];

describe("SalesCalculator", () => {
  it("returns the full sum of sales when given a sales input", async () => {
    const salesCalculator = new SalesCalculator();
    
    const totalSalesResult = salesCalculator.getSalesReport(exampleInput);

    expect(totalSalesResult).toEqual(16);
  })
})
