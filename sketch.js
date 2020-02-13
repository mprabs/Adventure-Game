var cols, rows;
var w = 40;
var grid = [];

function setup () {
    createCanvas(400, 400)
    cols = floor(width/w)
    rows = floor(height/w)
    var cell =() => {
        this.i = i;
        this.j = j;
        this.show()
    }
    grid.push(cell)
}


function draw () {
    background('red')
    for (let index = 0; index < grid.length; index++) {
        this.show = () => {
            var x = this.cols*w
            var y = this.rows*w
            stroke('yellow')
            rect(x, y, w, w)
        }
    }
}

function makeCell(i, j) {
    this.i = i;
    this.j = j;
    console.log('Hey')
    this.show = () => {
        var x = this.i*w
        var y = this.j*w
        stroke()
        rect(x, y, w, w) 
    }
}
