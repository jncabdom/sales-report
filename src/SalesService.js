import { SalesCalculator } from "./SalesCalculator.js";
import { SalesParser } from "./SalesParser.js";

export class SalesService {
  constructor() {
    this.SalesCalculator = new SalesCalculator();
    this.SalesParser = new SalesParser();
  }

  calculateIncome(file) {
    return this.SalesCalculator.getSalesReport(
           this.SalesParser.parse(file));
  }
}
