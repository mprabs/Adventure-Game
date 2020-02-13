var element = document.getElementById('boxItem');
var box = element.getContext('2d')

makeItem()
function makeItem () {
    box.beginPath()
    box.rect(40, 40, 22, 22)
    box.stroke()
    box.fill()
}

var pos
var newvalLR=newvalUD=0
moveItem()
function moveItem() {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode === 37){ //arrowLeft
            newvalUD = newvalUD-10
            element.style.transform = 'translate('+newvalUD+'px,'+newvalLR+'px)'
        } else if(event.keyCode === 38){ //arrowUp
            newvalLR = newvalLR-10
            element.style.transform = 'translate('+newvalUD+'px,'+newvalLR+'px)'
        } else if (event.keyCode === 39){ //arrowRight
            newvalUD = newvalUD+10
            element.style.transform = 'translate('+newvalUD+'px,'+newvalLR+'px)'
            constrain(10,10)
        } else if(event.keyCode === 40){ //arrowDown
            newvalLR = newvalLR+10
            element.style.transform = 'translate('+newvalUD+'px,'+newvalLR+'px)'
            constrain(element,40,40)
        }
    })
 }
