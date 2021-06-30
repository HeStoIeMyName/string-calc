const {stringCalc} = require ("./string-calc")

describe("stringCalc", () =>{
    it("should return zero on empty string", () => {
        expect(stringCalc("")).toEqual(0)
    })
    it("should return 1 on '1'", () =>{
        expect(stringCalc("1")).toEqual(1)
    })
    it("should return 3 on '1,2'", () => {
        expect(stringCalc("1,2")).toEqual(3)
    })
    it("should return sum of numbers", () => {
        expect(stringCalc("1,2,3")).toEqual(6)
    })
    it("should return sum of numbers", () => {
        expect(stringCalc("4,5,6,7")).toEqual(22)
    })
    it("should return a sum of numbers", () => {
        expect(stringCalc("1\n2,3")).toEqual(6)
    })
    it("should return a sum of numbers with a delimiter" , () => {
        expect(stringCalc("//;\n1;2")).toEqual(3)
    })

    // it("should return negatives, if negatives are in", () => {
    //     expect(stringCalc("1,-1,2,-2")).toEqual("negatives not allowed: -1, -2")
    // })

    it("should ignore numbers > 1000 ", () => {
        expect(stringCalc("2,1001")).toEqual(2)
    })
})

