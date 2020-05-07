let rock2Img;
let angryRockImg;
let runnerImg;
let sadrunnerImg;
let backgroundImg;
let gameoverImg;
let runner;
let rocks = [];
let startButton;
let count = 100;
let toggle;
let counter = 0;
let interval;
let x1 = 0;
let x2;
let scrollSpeed = 5;

function preload() {
  angryRockImg = loadImage('rock1-1.png')
  rock2Img = loadImage('rock2.png')
  runnerImg = loadImage('runner.png')
  backgroundImg = loadImage('background.jpg')
  gameoverImg = loadImage('gameover.png')
  sadrunnerImg = loadImage('sadrunner.png')
}

function setup() {
  createCanvas(800, 450);
  timer = createP('0')
  timer.position(width - 40, 20)
  x2 = width
  restart()

}

function restart() {
  runner = new Runner();
  rocks = []
  count = 100
  counter = 0
  interval = setInterval(timeIt, 500)
  loop()

  if (startButton) {
    startButton.remove()
  }
}

function keyPressed() {
  if (key == ' ') {
    runner.jump();
  }

}

function timeIt() {
  timer.html(counter)
  counter++
}


function draw() {
  scrollSpeed = 5 + .5*(counter/25);
  count += 1
  if ((random(1) < 0.01 + .005 * (counter / 25)) && (count > 85 - counter / 5)) {
    count = 0;
    if (random(1) < .7) {
      rocks.push(new Rock());
    } else {
      rocks.push(new Rock2());
    }
  }
  //background(backgroundImg);
  image(backgroundImg, x1,0, width, height)
  image(backgroundImg, x2,0, width, height)
  x1 -= scrollSpeed
  x2 -= scrollSpeed
  if(x1 < -width){
    x1 = width
  }
  if(x2 < -width){
    x2 = width
  }
  runner.show();
  runner.move();


  for (let r of rocks) {
    r.move(counter)
    r.show();
    if (runner.hits(r)) {
      gameover = new Gameover()
      clearInterval(interval)
      gameover.show()
      startButton = createButton('Try Again?')
      startButton.position(20, 40)
      startButton.style('font-size', '20px')
      startButton.style('background-color', '#24B349')
      startButton.style('border-color', '#033304')
      startButton.style('color', '#033304')
      startButton.mousePressed(restart)
      noLoop();
    }
  }


}