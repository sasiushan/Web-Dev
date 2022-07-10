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
