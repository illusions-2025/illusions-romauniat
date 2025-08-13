
let gridPicker1;
let gridPicker2;
let drawGridCheckBox;
let flowerColourRadio;


//this function is called once at the start of a sketch
function setup() {

    //create a drawing surface on to the web page
    canvas = createCanvas(850,850);
    canvas.position(20,20);

    //create the checkbox for drawing grid
    drawGridCheckBox = createCheckbox("Draw Checkboard ",true);
    drawGridCheckBox.position(870,100);
    
    //create a radio to control the flowers being drawn
    flowerColourRadio = createRadio();
    flowerColourRadio.option("red");
    flowerColourRadio.option("white");
    flowerColourRadio.option("illusion");
    flowerColourRadio.selected("red");
    flowerColourRadio.position(870,120);

    //create colour picker for grid
    gridPicker1 = createColorPicker("greenyellow");
    gridPicker1.position(870,20);
    gridPicker2 = createColorPicker("limegreen");
    gridPicker2.position(870,60);
    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);
    ellipseMode(CENTER);

}

//if 
function drawGrid(){


}
function drawFlowers(firstColour, secondColour){

}

//this function is called once every 50 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150);

    if(drawGridCheckBox.checked()){
        drawGrid();
    }
    colourString= flowerColourRadio.value();
    if(colourString == "illusion"){
        drawFlowers(color("white"),color("red"));
    }
    else{
        drawFlowers(color(colourString), color(colourString));

    }
    //noLoop();
}
