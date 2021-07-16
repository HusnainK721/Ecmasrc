const fencingforrec=(b,w,numofwire,costperfeet)=>{
const parimeter=b+w+w+b;
const totalcost=parimeter*numofwire*costperfeet;
return totalcost;
}

console.log(fencingforrec(20,30,5,10))