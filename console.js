let detailY;
function setup () {
    createCanvas(400, 400, WEBGL)
    detailY = createSlider(3, 16, 3);
    detailY.position(10, height + 5);
    detailY.style('width', '80px');
    moveItem()
}

var boxElement

function draw () {
    background('red');
    boxElement = rect(20,20,20,20) 
    translate(newvalUD, newvalLR)
    rotateY(millis() / 1000);
    sphere(40, 16, detailY.value());
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
