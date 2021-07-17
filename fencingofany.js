const fenceforany = (sides ,numofwire, rate)=>{
    let sum  = 0
    for (let i = 0; i < sides.length; i++){
        sum = sum + sides[i];
    }
    return sum *numofwire*rate
}
console.log(fenceforany([30,20,30,20],5,10))