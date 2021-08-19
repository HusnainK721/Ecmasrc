const marks =(x)=>
       x.reduce((acc,curr)=> acc + curr) /x.length;
   

    
    console.log(marks([45,43,67,89,68]))
    
    console.log(marks([45,99,67,89,68,89]))
    
    console.log(marks([45,96,67,89,68,68,93]))
    