var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx= canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        
      var   current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        
        
      var   current_position_of_mouse_y = e.clientY - canvas.offsettop;
        

        if (mouseEvent == "mouseDown") {
        console.log("Current Position Of X And Y Coordinates")
        console.log("X  = " + current_position_of_mouse_x +",Y = "+ current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    
    canvas.addEventListener("mouseup", my_mouseup);

    
    function my_mouseup(e){
       mouseEvent = "mouseup"
    }
    
    
    
    /*Create an event listener for "mouseleave"
    and call function my_mouseleave*/

    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e){
       mouseEvent = "mouseleave"
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
