export class SalesParser {
  constructor() { }
  parse(unparsedData) {
    return unparsedData.split("\n")
      .filter(element => element)
      .map(value => value.split(","));
  }
}
