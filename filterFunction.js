const numArray = [10, 20, 30, 40];


function myFilter(callBackFunction,array)
{   
    let modifiedArray=[]
    for(let i=0;i<array.length;i++)
    {   
        if(callBackFunction(array[i],i,array))
            modifiedArray.push(array[i])
    }

    return modifiedArray
}

function taskToPerform(element,index,array)
{    
    return element>30
}


const modifiedArray=myFilter(taskToPerform,numArray);
console.log(modifiedArray)



