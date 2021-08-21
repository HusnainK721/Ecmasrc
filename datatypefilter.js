const arr1 = [1 ,undefined, "ather",{},3,5,"ammu" ,"cat" ,3.55]

const arr2=[];

arr1.forEach((element) => {
    if(typeof element ==="string"){
        arr2.push(element.toUpperCase());
    }
});

console.log(arr2)