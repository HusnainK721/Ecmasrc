const percntage =(x)=>{
let sum=0;
x.forEach((element) => {
    sum=sum + element;
});
const average=sum/x.length;
return average;
}
console.log(percntage([45,43,67,89,68]))

console.log(percntage([45,43,67,89,68,89]))

console.log(percntage([45,96,67,89,68,68,93]))
