import fs from "fs"
import { SalesCalculator } from "./SalesCalculator.js"
import { SalesParser } from "./SalesParser.js"


export class SalesController {
  constructor() {
    this.SalesCalculator = new SalesCalculator();
    this.SalesParser = new SalesParser();
  }
  async generateSalesReport() {
    const file = fs.readFileSync(process.argv[2], "utf8");

    try {
      const parsedValues = this.SalesParser.parse(file);
      const totalSales = this.SalesCalculator.getSalesReport(parsedValues);
      console.log(totalSales);
      fs.writeFileSync(
        "./report.txt",
        `Tus ventas totales han sido ${totalSales}$`,
      )
    } catch (error) {
        console.error(error.message);
      }
  }
}
