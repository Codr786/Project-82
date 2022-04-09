var mouseEvent = "empty";

color = "black";
width_line = 3;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_line = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove" , my_mouseup);
function my_mousedown(e){
    var current_mouse_x = e.clientX - canvas.offsetLeft;
    var current_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log("Current Position of X and Y Cordinates = ");
        console.log("X = "  + current_mouse_x +", Y = "+current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.arc(current_mouse_x, current_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function drawing(){
    ctx.cleaRect(0,0,canvas.width,canvas.height);
}
