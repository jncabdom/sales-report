import {SalesParser} from "./SalesParser.js"

const exampleInput =
  `
pan,1,2
pack de 12 huevos,1,2
milk,2,6
escoba,2.5,9
`;

const expectedOutput = [
  { name: "pan", price: 1, quantity: 2 },
  { name: "pack de 12 huevos", price: 1, quantity: 2 },
  { name: "milk", price: 2, quantity: 6 },
  { name: "escoba", price: 2.5, quantity: 9 },
]

describe("SalesParser", () => {
  it("parses data into arrays for further usage", () => {
    const salesParser = new SalesParser();

    const parsedData = salesParser.parse(exampleInput);

    expect(parsedData).toEqual(expectedOutput);
  })
})
