const collectionofeven = (numbers) =>{
    let sumeven=0;
    let  sumodd=0;
    numbers.forEach(element => {
        element%2==0
        ?(sumeven= sumeven+element)
        :(sumodd = sumodd+element);
    });
    return(`sum of even numbers=${sumeven}and
    sum of odd numbers=${sumodd}
    total sum=${sumeven+sumodd}`)
}
console.log(collectionofeven([5,2,7,9,10,8,17,115,10]));