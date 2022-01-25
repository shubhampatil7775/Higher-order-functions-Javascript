 const numArray = [10, 20, 30, 40];


function myReduce(callBackFunction,array,initialValue)
{
    
    let currentValue=array[1]
    let returnValue=0 
    let checkInitialValue=true

    if(!initialValue)
        checkInitialValue=false

        
    //console.log(checkInitialValue)
    for(let i=0;i<array.length;i++)
    {   
       if(checkInitialValue)
       {
           if(i==0)
                returnValue=callBackFunction(initialValue,array[0])
           else
            {   
                currentValue=array[i]
                returnValue=callBackFunction(returnValue,currentValue)
            }
                
       }
       else{
            if(i==0)
                returnValue=callBackFunction(array[0],array[1])
            else
            {
                if(i<array.length-1)
                {
                    currentValue=array[i+1]
                    returnValue=callBackFunction(returnValue,currentValue)
                }
            }
                

       }
    }

    return returnValue;
}

function taskToPerform(previousValue,currentValue)
{    
    return previousValue+currentValue
}

let initialValue=0
const modifiedArray=myReduce(taskToPerform,numArray,initialValue);
console.log(modifiedArray)


