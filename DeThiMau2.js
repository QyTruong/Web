var canvas = document.getElementById('game');
var object = canvas.getContext('2d');

var x = 500, y = 300;
var dx = 5, dy = 5;
var radius = 50;
var rectWidth = 100;
var rectHeght = 100;

function drawBallCircle(){
    object.beginPath();
    object.arc(x, y, radius, 0, Math.PI*2);
    object.fillStyle = 'red';
    object.fill();
    object.closePath();
}


function drawBallRect(){
    object.beginPath();
    object.rect(x,y,rectWidth,rectHeght);
    object.fillStyle = 'red';
    object.fill();
    object.closePath();
}

var shape1 = '';
function changeShape(){
    var shape = document.getElementsByName("shape");
    

    for (var i = 0; i < shape.length; i++){
        if (shape[i].checked == true){
            shape1 = shape[i].value;
        }
    }
    
    if (shape1 == '0'){
        drawBallCircle();
    }
    else {
        drawBallRect();
    }
}

function setBorder(){
    if (shape1 == '0'){
        if (x-radius < 0 || x > canvas.width-radius){
            dx = -dx;
        }
        if (y-radius < 0 || y > canvas.height-radius){
            dy = -dy;
        }
    }
    else {
        if (x < 0 || x > canvas.width-rectWidth){
            dx = -dx;
        }
        if (y < 0 || y > canvas.height-rectHeght){
            dy = -dy;
        }
    }
}

function controlMove(){
    var s = document.getElementById("select").value;
    if (s == "doc")
        y += dy;
    else if (s == "ngang")
        x += dx;
    else {
        x = x;
        y = y;
    }
}


function draw(){
    object.clearRect(0,0,canvas.width, canvas.height);
    
    changeShape();
    setBorder();
    controlMove();

    requestAnimationFrame(draw);
}

draw();