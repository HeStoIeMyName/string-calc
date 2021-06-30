function stringCalc(numbers)
{
    const n = numbers.split(/\D+/g)
    let result = 0
    var negatives = false;
    
    for (var i = 0; i < n.length; i++){
        const number = n[i]
        const n2 = number.length===0?"0":number
        const numberToShow = parseInt(n2, 10)
        
        // if(numberToShow < 0)
        // {
        //     negatives = true
        // }
        // else
        // {
        //     negatives = false
        // }
        
        result += numberToShow 
        if (numberToShow > 1000)
        {
            result -= numberToShow
        } 
        
    }
    // if(negatives === true)
    // {
    //     return "negatives not allowed: "
    // }
    // else
    // {
        return result
    // }
        
    
    

}
module.exports = {
    stringCalc
}


