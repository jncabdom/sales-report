import { SalesCalculator } from "./SalesCalculator.js";
import { SalesParser } from "./SalesParser.js";

export class SalesService {
  constructor() {
    this.SalesCalculator = new SalesCalculator();
    this.SalesParser = new SalesParser();
  }

  calculateIncome (file) {
    const parsedValues = this.SalesParser.parse(file);
    const totalSales = this.SalesCalculator.getSalesReport(parsedValues);
    return totalSales
  }
}