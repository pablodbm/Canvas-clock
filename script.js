var c = document.getElementById("idek");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.stroke();
/*
var x  = document.getElementById("idek");
var ctx = x.getContext("2d")
ctx.beginPath()
ctx.moveTo(250,250);
ctx.lineTo(350,250)
ctx.closePath();
ctx.stroke();
*/

let angle = 1
let pi = Math.PI

setInterval(move,1000)
function move(){
    var x  = document.getElementById("idek");
    var ctx = x.getContext("2d")
    
    angle_rad = angle *(pi/180)
    tg = Math.tan(angle_rad)
    temp_x = angle_rad * 100

    sin = Math.sin(angle_rad)
   // console.log(sin)
    temp_y = sin/100
    console.log(temp_y)

   // console.log(temp_x)

    ctx.beginPath()
    ctx.moveTo(250,250);
    
    ctx.lineTo(temp_x + 250,temp_y-250);
    ctx.stroke();
    angle+=1
    if(angle>360) angle = 0
}