const decr = document.getElementById("decrese");
const incr = document.getElementById("increse");
const dis = document.getElementById("display");
const res = document.getElementById("reset");
//reset
res.addEventListener("click",()=>{
    display.innerText = 0
})
// Increment
incr.addEventListener("click", ()=>{
    const value = Number(display.innerText)
    if(value>=Infinity)
    {
        alert("10+ Value Not Allowed")
    }
    else
    {
        display.innerText = value + 1;
    }
})
// Decrement
decr.addEventListener("click", ()=>{
    const value = Number(display.innerText)
    if(value<=0)
    {
        alert("Negative Value Not Allowed")
    }
    else
    {
        display.innerText = value - 1;
    }
})
