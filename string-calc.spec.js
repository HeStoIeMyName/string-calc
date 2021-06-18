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
})

