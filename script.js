let number = 0;
let rangeNum = 4000;
let instant = 0;
let instant2 = 0;
let strAux;
let str;
let check = false;
let img;
let ratio;
let interval = 20;

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
    document.body.style.cursor = "none";
    background(0,48,91);
    image(img, windowWidth/2-img.width*ratio/2, windowHeight/10, img.width*ratio, img.height*ratio);
    if (check) {
    if (millis() - instant < 5000) {
        if (millis() - instant2 > interval) {
            genNum();
            instant2 = millis();
            //interval += 5;
        }
    }
    text(str,windowWidth/2,windowHeight/2);
    }
    else text("0000",windowWidth/2,windowHeight/2);
}

function genNum() {
    number = int(random(rangeNum));
    while((number >= 131 && number <=200) 
       || (number >= 2331 && number <=2350)
       || (number >= 2361 && number <=2380)
       || (number >= 2382 && number <=2390)
       || (number >= 2399 && number <=2400)
       || (number >= 2523 && number <=2750)
       || (number >= 2752 && number <=2770)
       || (number >= 2776 && number <=2810)
       || (number >= 2841 && number <=2850)
       || (number == 2821)
       || (number >= 2828 && number <=2830)
       || (number >= 2833 && number <=2840)
       || (number >= 2901 && number <=3000)
    ) {
        number = int(random(rangeNum));
    }
    strAux = number.toString();
    if (strAux.length == 1) str = "000" + strAux;
    else if (strAux.length == 2) str = "00" + strAux;
    else if (strAux.length == 3) str = "0" + strAux;
    else str = strAux;
}

function keyReleased() {
    check = true;
    instant = millis();
    windowResized(windowWidth, windowWidth);
}

function mouseClicked() {
    check = true;
    instant = millis();
    windowResized(windowWidth, windowWidth);
}