const numArray = [10, 20, 30, 40];


function myMap(callBackFunction,array)
{   
    let modifiedArray=[]
    for(let i=0;i<array.length;i++)
        modifiedArray.push(callBackFunction(array[i],i,array))

    return modifiedArray
}

function taskToPerform(element,index,array)
{   
    return element+10;
}


const modifiedArray=myMap(taskToPerform,numArray);
console.log(numArray)
console.log(modifiedArray)



