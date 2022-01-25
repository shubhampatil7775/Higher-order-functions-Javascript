const numArray = [10, 20, 30, 40];


function myForEach(callBackFunction,array)
{   
    
    for(let i=0;i<array.length;i++)
          callBackFunction(array[i],i,array)
}

function taskToPerform(element,index,array)
{    
    console.log(index+': '+element)
}


myForEach(taskToPerform,numArray);






