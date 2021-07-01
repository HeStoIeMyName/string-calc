function stringCalc(numbers)
{
    const n = numbers.split(/[^\d+-]+/g)
    let result = 0
    const negativeNumbers = []
    
    for (var i = 0; i < n.length; i++){
        const number = n[i]
        const n2 = number.length===0?"0":number
        const numberToShow = parseInt(n2, 10)
        
        if(numberToShow < 0)
        {
            negativeNumbers.push(numberToShow)
        }
        
        result += numberToShow 
        if (numberToShow > 1000)
        {
            result -= numberToShow
        } 
        
    }
    if(negativeNumbers.length > 0)
    {
        return "negatives not allowed: " + negativeNumbers
    }
    else
    {
        return result
    }
        
    
    

}
module.exports = {
    stringCalc
}


