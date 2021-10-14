// recibir archivo como string
import { SalesService } from "./SalesService.js";

const exampleInput = `
pan,1,2
pack de 12 huevos,1,2
milk,2,6
escoba,2.5,9
`

describe("SalesService", () => {
  it("calculate the total of the sales file", () => {
    const salesService = new SalesService();
    const result = salesService.calculateIncome(exampleInput)

    expect(result).toEqual(38.5)
  })

})
// llama sales parser
// sales calculator
// return