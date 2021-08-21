const strrev=(str)=>{
    return str.split(" ").reverse().join(" ");
}
console.log(strrev("husnain khan"));



//----------------by for loop-------------------//


const revStr =(str)=>{
    const arrstr = str.split(" ");
    const newarr=[];
    for (i =arrstr.length - 1; i>=0;i--){
        newarr.push(arrstr[i]);
    }
    return newarr.join(" ");
} ;
console.log (revStr("ammu khan "))