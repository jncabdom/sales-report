export class SalesParser {
  constructor() { }
  parse(unparsedData) {
    let data = unparsedData.split("\n")
      .filter(element => element)
      .map(value => value.split(","));
    
    let parsedData = [];
    
    for (let element of data) {
      parsedData.push(Object.fromEntries([
        ["name", element[0]],
        ["price", parseFloat(element[1])],
        ["quantity", parseFloat(element[2])]]));
    }

    return parsedData;
  }
}
