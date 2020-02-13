let mx = 1;
let my = 1;
let easing = 0.05;
let radius = 24;
let edge = 100;
let inner = edge + radius;
let detailY;

function setup() {
    createCanvas(720, 400, WEBGL);
    noStroke();
    ellipseMode(RADIUS);
    rectMode(CORNERS);
    detailY = createSlider(3, 16, 3)
    detailY.position(10, height + 5)
    detailY.style('width', '80px')
    // detailY.value
    moveItem()
}

function draw() {
    background('gray');

    translate(newvalUD, newvalLR)
    if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
    }
    if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY - my) * easing;
    }

    mx = constrain(mx, inner, width - inner);
    my = constrain(my, inner, height - inner);
    fill(237, 34, 93);
    rect(edge, edge, width - edge, height - edge);
    fill(255);
    ellipse(mx, my, radius, radius);
    // rotateY(millis() / 1000)
    // sphere(40, 16, detailY.value())
}

var pos
var newvalLR=newvalUD=0
function moveItem() {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode === 37){ //arrowLeft
            newvalUD -= 10
        } else if(event.keyCode === 38){ //arrowUp
            newvalLR -= 10
        } else if (event.keyCode === 39){ //arrowRight
            newvalUD += 10
        } else if(event.keyCode === 40){ //arrowDown
            newvalLR += 10
        }
    })
 }


