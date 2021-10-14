import {SalesParser} from "./SalesParser.js"

const exampleInput = `
pan,1,2
pack de 12 huevos,1,2
milk,2,6
`

const expectedOutput = [
  ["pan",1,2],
  ["pack de 12 huevos",1,2],
  ["milk",2,6],
]

describe("SalesParser", () => {
  it("parses data into arrays for further usage", () => {
    const salesParser = new SalesParser();

    const parsedData = salesParser.parse(exampleInput);

    expect(parsedData).toEqual(expectedOutput);
  })
})
