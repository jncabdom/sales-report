export class SalesCalculator {
  constructor() {}
  getSalesReport(dataArray) {
    let result = 0;
    dataArray.forEach(element => {
      result += (element.price * element.quantity);
    });
    return result;
  }
}
