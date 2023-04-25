function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer");
  dancer = new GraceDancer(width / 2, height / 2);
}

function draw() {
  //
  background(144, 18, 161);
  drawFloor();
  dancer.update();
  dancer.display();
}


function drawFloor() {
  push();
  let perspY = height * 0.3;
  let tileW = width/30;

  for (let x=-150; x <= width+150; x += tileW) {
    stroke(45);
    line(width/2, perspY, x, height);
  }
  let dy = 5;
  let y = height * 0.6;
  while (y <= height) {
    line(0, y, width, y);
    dy *= 1.05;
    y += dy;
  }

  fill(0);
  noStroke();
  beginShape();
  vertex(-151, height);
  vertex(width/2, perspY);
  vertex(-151, perspY);
  endShape();
  beginShape();
  vertex(width+151, height);
  vertex(width/2+1, perspY);
  vertex(width+151, perspY);
  endShape();
  rect(0, 0, width, height * 0.6);
  fill(180)
  // textSize(10);
  // text("note: the grey grid in the background is for reference only.", 10, height-20)
  // text("It represents the 'floor' on which your dancer dances.", 35, height-9)
  pop();
  
}


class GraceDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speedX = 1;
    this.move = width / 2;
    this.scale = 1;
   
  }
  update() {
   
    this.x += this.speedX;
    if (this.x > this.move + 36 || this.x < this.move) {
      this.speedX *= -1;
    }
  }
  display() {
   
    push();
    translate(this.x, this.y);
    scale(this.scale);

  
    
  //feet
    noStroke();
    fill(186, 145, 104);
    rect(-30, 35, 16, 32, 10);
    rect(10, 35, 16, 32, 10);
    fill(255, 116, 131);
    circle(-30,68,8)
    circle(-20,68,8)
    fill(12, 235, 220);
    ellipse(-25,62,25,15)
    fill(255, 116, 131);
    circle(26,68,8)
    circle(16,68,8)
    fill(12, 235, 220);
    ellipse(21,62,25,15)
    
    
    noStroke();
    fill(194, 159, 99);
    // circle 1
    let diameter1 = 100;
    let angle1 = -100;
    circle(0, 0, diameter1);
    // point on  circle1
    let x1 = (diameter1 / 2) * sin(radians(angle1));
    let y1 = (diameter1 / 2) * cos(radians(angle1));
    circle(x1, y1, 0);
    // this.drawHead()
    // circle 2
    let yhead = -60;
    circle(0, yhead, 70);
    let diameter2 = 70;
    let angle2 = -100;
    // point on  circle2
    let x2 = (diameter2 / 2) * sin(radians(angle2));
    let y2 = (diameter2 / 2) * cos(radians(angle2)) + yhead;
    circle(x2, y2, 0);
    line(x1, y1, x2, y2);

    let angle3 = 100;
    // point on  circle3
    let x3 = (diameter1 / 2) * sin(radians(angle3));
    let y3 = (diameter1 / 2) * cos(radians(angle3));
    circle(x3, y3, 0);
    // this.drawHead()
    // circle 4
    let angle4 = 100;
    // point on  circle1
    let x4 = (diameter2 / 2) * sin(radians(angle4));
    let y4 = (diameter2 / 2) * cos(radians(angle4)) - 60;
    circle(x4, y4, 0);
    line(x3, y3, x4, y4);

    quad(x1, y1, x2, y2, x3, y3, x4, y4);

    //eyes
    noStroke();
    fill("black");
    circle(-20, -60, 8);
    ellipse(-20, -63, 12, 3);
    circle(20, -60, 8);
    ellipse(20, -63, 12, 3);

    //ears
    noStroke();
    fill(194, 159, 99);
    circle(-29, -88, 15);
    circle(29, -88, 15);
    fill(87, 16, 11);
    circle(-29, -88, 8);
    circle(29, -88, 8);

    //mouthNose
    noStroke();
    fill(87, 16, 11);
    ellipse(0, -40, 25, 32);
    fill("black");
    ellipse(-4, -45, 6, 3);
    ellipse(4, -45, 6, 3);
    ellipse(0, -36, 2, 14);
    ellipse(-4, -30, 6, 2);
    ellipse(4, -30, 6, 2);

    //blush
    fill(214, 129, 140);
    ellipse(-25, -43, 12, 8);
    ellipse(25, -43, 12, 8);

    //belly
    noStroke();
    fill(186, 145, 104);
    ellipse(0, 10, 35, 40);
    

   
    var mov = sin(frameCount * 0.08) * 0.2;
    rotate(mov);
    this.drawArms(mov);



    pop();
  }
  
  drawArms() {
    noStroke();
    fill(186, 145, 104);
    rect(-70, -8, 32, 16, 10);
    rect(35, -8, 32, 16, 10);
  }
}
