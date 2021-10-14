export class SalesParser {
  constructor() { }
  parse(unparsedData) {
    return unparsedData.split("\n")
      .filter(element => element)
      .map(value => value.split(","))
      .map(element => {
        Object.fromEntries([
        ["name", element[0]],
        ["price", element[1]],
        ["quantity", element[2]]])
      });
  }
}
