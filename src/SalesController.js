import fs from "fs"
import { SalesService } from "./SalesService.js";


export class SalesController {
  constructor() {
    this.SalesService = new SalesService();
  }
  async generateSalesReport() {
    const file = fs.readFileSync(process.argv[2], "utf8");

    try {
      const totalSales = this.SalesService.calculateIncome(file)
      fs.writeFileSync(
        "./report.txt",
        `Tus ventas totales han sido ${totalSales}$`,
      )
    } catch (error) {
        console.error(error.message);
      }
  }
}
