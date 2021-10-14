export class SalesCalculator {
  constructor() {}
  getSalesReport(dataArray) {
    console.log(dataArray);
    let result = 0;
    dataArray.forEach(element => {
      result += (parseInt(element[1]) * parseInt(element[2]));
    });
    return result;
  }
}
