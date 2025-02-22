function setup() {
  createCanvas(400, 400);
}

function draw() {
  setClockBackgroundColor("grey")
  drawClockTime()
  drawClockMessageAndImage(text)
}

function setClockBackgroundColor(color){
  background(color)
  fill("orange")
  rect(120, 150, 140, 60)
  fill("black")
  circle(190, 100, 100)
  fill("gold")
  circle(160, 100, 20)
  circle(210, 100, 20)
  fill("white")
}

function drawClockTime(){
  fill("yellow")
  textSize(45)
  let hr = hour()
  let mn = minute()
  text(hr, 130, 200)
  text(mn, 190, 200)
  text(":", 175, 200)
}

function drawClockMessageAndImage(text){
  fill("white")
  textSize(32)
  text("STOP WASTING TIME", 8, 250)
  text("GO LISTEN TO KLAXONS", 8, 280)
}
