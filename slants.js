
let colourMode;

//this function is called once at the start of a sketch
function setup() {


    //Canvas is used to create a drawing surface on to the web page
    //this drawing surface is 1000 X 600 pixels
    canvas = createCanvas(1000,600);

    //move canvas to make way for radio buttons
    canvas.position(20,20);

    //create the radio buttons that will allow us 
    //to choose between all black, all white and
    //illusion mode. place in top left
    
    colourMode = createRadio();
    colourMode.option("2","black");
    colourMode.option("1","white");
    colourMode.option("0","illusion");

    colourMode.selected("2");
    colourMode.position(1020,20);

    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER); // **** This is very important in illusions!!!***
    ellipseMode(CENTER); // ** This makes it so the center of what you are positioning is relative to the center **

}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawCircles(stillColour){

    let yGap = 20;
    let offset = 100;
    let lineWidth = width - 2*offset;
    let cSize = lineWidth/16; // 50
    let xPos = offset + cSize/2; // starting xpos for circle
    let yPos = 100;
    
    // change the fill colour using % from back to white
     //let fillColour = [255,0]; // (white,black)
     let cColour = 0;
     //colour = stillColour; // ASK where colour is declared???

    //Draw grid of circles
    for( let j=0; j<6; j++){
        for( let i=0; i<16; i++){
            stroke(cColour%2*255); // 
            fill(cColour%2*255); 
            //stroke(fillColour[i%2]); // dont use i, use another variable
            //fill(fillColour[i%2]); // fill a back/ white circle
            ellipse(xPos+i*cSize, yPos +j*(cSize+yGap) ,cSize, cSize);
            if(!stillColour)
                {cColour++;}
        } 
    }
    

}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawLines(stillColour){
    let yGap = 20;
    let offset = 100;
    let lineWidth = width - 2*offset;
    let cSize = lineWidth/16; // 50
    let xPos = offset + cSize; // starting xpos
    let yPos = 100;
    let r = 0;
    
    //Draw grid of rectangles
    for(let j = 0; j<6; j++){
        for( let i=0; i<15; i++){
            stroke(r%2*255); // to have a black/white circle
            fill(r%2*255); // 
            // top rect
            rect(xPos+i*cSize, yPos +j*(cSize+yGap) - cSize/2 ,cSize/2, 5);
            // bottom rect
            stroke((r+1)%2*255); //draw the opposite colour as above
            fill((r+1)%2*255); 
            rect(xPos+i*cSize, yPos +j*(cSize+yGap) + cSize/2 ,cSize/2, 5);
            r=r+1;
        } 
    }
        
}

//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150)
    c = int(colourMode.value()); // This takes the value from radio buttons and converts to int.
    drawCircles(c);
    drawLines(c);
    //noLoop();
}
