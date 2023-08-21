let number = 0;
let rangeNum = 9999;
let auxFrames = 0;
let auxFrames2 = 0;
let strAux;
let str;
let check = false;
let img;
let ratio;

function windowResized() {
    resizeCanvas(windowWidth, windowWidth);
  }

function setup() {
    createCanvas(windowWidth, windowWidth);
    font = loadFont('fonts/Satoshi-Bold.otf');
    textFont(font);
    textSize(windowHeight / 5);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    ratio = windowWidth / 7000;

    img = loadImage('images/logoFestas.png');
}

function draw() {
    background(0,48,91);
    image(img, windowWidth/2-img.width*ratio/2, windowHeight/10, img.width*ratio, img.height*ratio);
    if (check) {
    if (frameCount - auxFrames < 250) {
        if (frameCount - auxFrames2 > 2) {
            genNum();
            auxFrames2 = frameCount;
        }
    }
    text(str,windowWidth/2,windowHeight/2);
    }
    else text("0000",windowWidth/2,windowHeight/2);
}

function genNum() {
    number = int(random(rangeNum));
    strAux = number.toString();
    if (strAux.length == 1) str = "000" + strAux;
    else if (strAux.length == 2) str = "00" + strAux;
    else if (strAux.length == 3) str = "0" + strAux;
    else str = strAux;
}

function mouseClicked() {
        check = true;
        auxFrames = frameCount;
        windowResized(windowWidth, windowWidth);
}