


sum = (a,b) =>{
    return a+b
}


  showSum =async () => {
    var newValue = await sum(2,3)
    console.log(newValue);
    
}


exports.module.sum(a,b) = sum(a,b);
exports.module.showSum = showSum;