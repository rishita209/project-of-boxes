var ground,ball;


function setup(){
    var canvas = createCanvas(1000,500);
    var ground_options ={
        isStatic: true
    }
    
    ground = rect(30, 20, 55, 55, 20);
    ball=triangle(30, 75, 58, 20, 86, 75);


    
}
function draw(){
    background(250)


    rectMode(CENTER);
    fill("red");
    square(430, 80, 85);
    fill("blue");
    square(110, 420, 185);
    fill("blue");
    square(760, 420, 185);
    fill("black");
    rect(530, 520, 1055, 55, 20);
    fill("yellow");
    square(630, 210, 155, 120, 115, 110, 15);
    fill("yellow");
    square(230, 210, 155, 120, 115, 110, 15);
}