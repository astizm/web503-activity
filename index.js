// function setup() { //setup code for drawing shapes
//     createCanvas(600, 600); // set canvas size (w,h)
// }

// function draw() { //function for drawing shapes
//     //draw a circle
//     ellipse(300, 300, 250, 250); //circle parameters (x,y,radiusX,radiusY)

// }

// function setup() { //setup code for drawing
//     createCanvas(200, 200); //set canvas size (x,y)
// }

// function draw() { //draw code block
//     //set fill colour to grey
//     fill(125);
//     //draw a circle
//     ellipse(100, 100, 150, 150); //circle parameters (x, y radiusX, radiusY)
// } //close draw function

// function setup() { //set up code for drawing
//     createCanvas(200, 200); //create canvas size (w,h)
// }

// function draw() { //function for drawing
//     //set fill colour to blue
//     fill(0, 180, 180); // fill(red, green, blue)
//     //set stroke properties
//     stroke(0, 0, 255); //stroke to blue (HSB(hue, saturation, brightness) values )
//     strokeWeight(10); //weight of stroke/line set to 10pixels
//     //draw circle
//     ellipse(100, 100, 150, 150) //circle parameterws (x,y,w,h)
// }

// function setup() { //set up code for draw
//     createCanvas(200, 300); //create canvas size
// }

// function draw() { //function for drawing
//     //set fill colour
//     fill(0, 180, 180); //set fill colour to blue/teal
//     //remove stroke
//     noStroke();
//     //draw circle
//     ellipse(100, 100, 150, 150); //circle(x,y,w,h)
// }

// function setup() { //set up code for our drawing
//     createCanvas(400, 200); //create canvas parameters (w,h)
// }

// function draw() { //drawing code block
//     //set background colour
//     background(200, 200, 255); //background(r,g,b)

//     //set circle fill colour to blue
//     fill(0, 180, 180); //fill(R,G,B)

//     //set stroke properties to blue
//     stroke(0, 0, 255); //stroke(H,S,B)
//     strokeWeight(10); //stroke pixel weight

//     //draw a circle
//     ellipse(100, 100, 100, 100); //circle(x,y,w,h)

//     //set triangle fill colour to red
//     fill(255, 0, 0); //fill(R,G,B)

//     //set stroke properties for triangle
//     noStroke();

//     //draw a triangle
//     triangle(200, 150, 250, 25, 310, 150); //triangle parameters (x1,y1,x2,y2,x3,y3)

// }

function setup() { //set up code block
    createCanvas(400, 200) //create canvas size (w,h)
}

function draw() { //drawing code block
    //set background colour to white
    background(255); //background(grayscale integer)
    //remove stroke
    noStroke(); //built-in function
    //set rectMode for all rectangles
    rectMode(CENTER); //set parameters from where the rectangle is drawn
    //set properties and draw rectangle1
    fill(255, 0, 0); //red fill colour (R,G,B)
    rect(100, 100, 50, 50); //rectangle(x,y,w,h)

    //set properties and draw 45° rectangle2
    fill(0, 255, 0); //green fill(R,G,B)
    push();
    translate(200, 100); //set displacement parameters(x,y)
    rotate(radians(45)); //set rotation angle
    rect(0, 0, 50, 50); //rectangle(x,y,w,h)
    pop();
    //set properties and draw rectangle3
    fill(0, 0, 255); //blue fill (R,G,B)
    rect(300, 100, 50, 50); //rectangle(x,y,w,h)
}