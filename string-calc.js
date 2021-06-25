function stringCalc(numbers)
{
    const n = numbers.split(/,|\n/g)
    let result = 0
    const negatives = 0
    const fehler = "negatives not allowed: "
    for (var i = 0; i < n.length; i++){
        const number = n[i]
        const n2 = number.length===0?"0":number
        const numberToShow = parseInt(n2, 10)
        if (numberToShow < 0)
        {
            negatives += numberToShow
        }
        else
        {
            result += numberToShow
        }
        
    }
    if (negatives = true)
    {
        return fehler + negatives
    }
    else
    {
        return result
    }
    
    

}
module.exports = {
    stringCalc
}