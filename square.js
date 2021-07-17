const findsquare= (num )=>{
    let square = [];
    num.forEach(element => {
        square.push(element**2)
    });
    return square;
}
console.log(findsquare([5,2,7,9,10]));