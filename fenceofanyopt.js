const fenceforanyopt = (sides ,nummofwire,rate) => {
    let sum=0;
    sides.forEach(element => {
        sum=sum + element;
    });
    return sum *nummofwire*rate;
}
console.log(fenceforanyopt([10,20,40,15,54,28]),51,30);

