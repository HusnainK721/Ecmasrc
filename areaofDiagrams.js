const areaofrec =(b, w)=>b*w;

console.log (`area of rectangle is ${areaofrec(10,30)}`)
// --------------area of triangle-------------

const areaoftriangle=(b,h)=>(1/2)*b*h

console.log(areaoftriangle(20,20))


const x =10
const b =15
const h =30
console.log(
    areaofrec(x,b) + areaoftriangle(b,h-x)
)
// --------------------area of circle-------------
const areaofcircle=(r)=>(3.14)*r*r

console.log(areaofcircle(50))

const h=14
const x=12
const b=27
const r1=7
const r2=5

console.log(areaofrec(h,b-r1)+areaoftriangle(b-r1,x)+(1/2)*areaofcircle(r1)-areaofcircle(r2))
