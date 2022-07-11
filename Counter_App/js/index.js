
function inc()
{
    let x = document.getElementById("counter").innerHTML;
    x=parseInt(x)+1
    document.getElementById("counter").innerHTML = x;
}

function dec()
{
    let x = document.getElementById("counter").innerHTML;
    let parsedX = parseInt(x);
    if(parsedX!=1)
    {
        x = parsedX-1
    }    
    document.getElementById("counter").innerHTML = x;
}

function saveCount()
{
    let x = document.getElementById("counter").innerHTML;
    x = parseInt(x);
    stack.push(x);
    document.getElementById("savedCount").innerHTML = stack.printStack();
    
}

class Stack{
    
    constructor()
    {
        this.items = [];
    }

    push(input)
    {
        this.items.push(input)
    }

    pop()
    {
        if(this.items.length==0)
        {
            return 0;
        }
        else{
            return this.items.pop();
        }
    }

    printStack()
    {
        var str = "";
        for(var i=0;i<this.items.length;i++)
        {
            str= str + this.items[i] + " ";
        }
        return str;
    }
}
var stack = new Stack();
