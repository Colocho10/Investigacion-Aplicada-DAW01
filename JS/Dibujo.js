var Pixel_Size = 10;
var canvas = document.getElementById("canvas3")
var context = canvas.getContext('2d');

function drawPixel(x, y){
    context.fillRect(
        x * Pixel_Size, 
        y * Pixel_Size, 
        Pixel_Size, 
        Pixel_Size
    );
}
canvas.onmousedown = function(e){
    canvas.onmousemove = motion;
    motion(e);
}
canvas.onmouseup = function(e){
    canvas.onmousemove = null;
}
function motion(e){
    drawPixel(
        Math.floor((e.clientX - canvas.offsetLeft) / Pixel_Size),
        Math.floor((e.clientY - canvas.offsetTop) / Pixel_Size),
    );
}