const arr=[null,2,3,4,"cat",{num:23},undefined,20]

const newArr= arr.filter((item)=>typeof item==="number"&&item)

console.log(newArr.reduce((a,b)=>a+b))