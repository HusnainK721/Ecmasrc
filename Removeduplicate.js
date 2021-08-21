const removeduplicate=(str)=>{
const arrStr = str.split(" ");
const uniArr = [...new Set(arrStr)];
return uniArr.join(" ");
}
console.log(removeduplicate("i am good. i am fine."))