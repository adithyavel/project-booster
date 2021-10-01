var hr,mn,sc
var hrAngle,mnAngle,scAngle

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0);  
  hr = hour()
  mn = minute()
  sc = second()
  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360)
  translate(200,200) 
  stroke(255,0,0)
  strokeWeight(7)
  rotate(scAngle)
  line(0,0,100,0)

  
}