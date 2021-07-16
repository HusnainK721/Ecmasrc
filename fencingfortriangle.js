const fencingfortri=(h,b,a,numofwire,costperfeet)=>{
const parimeter=h+b+a;
const totalcost=parimeter*numofwire*costperfeet;
return totalcost;
}

console.log(fencingfortri(10,12,18,5,10))