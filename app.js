var x=y=z=0
var state = false
var start
var myInterval
function start_timer(){
 x=y=z=0
 state=false
 start=document.getElementById('btn1')
 start.disabled=true
 myInterval = setInterval(myTimer,10)
}
function myTimer(){
    x=x+1
    if(x===100){
        x=0
        y++
        if(y===60){
            z=z+1
            y=0
            if(z===60){
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML = `<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+`</h1>`
}

function pr_timer(){
 state=!state
 if(state===true){
    clearInterval(myInterval)
 }
 else{
    myInterval = setInterval(myTimer,10)
 }
}
function clear_timer(){
    clearInterval(myInterval)
    x=y=z=0
    state=false
    start.disabled=false
    document.getElementById('result').innerHTML = `<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+`</h1>`
}