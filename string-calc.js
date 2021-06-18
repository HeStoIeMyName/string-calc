function stringCalc(numbers)
{

    const result = numbers.split(',')
    let r = 0
    for (var i = 0; i < result.length; i++){
        const number = result[i]
        const n2 = number.length===0?"0":number
        const numberToShow = parseInt(n2, 10)
        r += numberToShow
    }
    return r
    

}
module.exports = {
    stringCalc
}