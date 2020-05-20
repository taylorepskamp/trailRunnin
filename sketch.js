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
let start = false;
let canvasWidth;

function preload() {
  angryRockImg = loadImage('rock1-1.png')
  rock2Img = loadImage('rock2.png')
  runnerImg = loadImage('runner.png')
  backgroundImg = loadImage('background.jpg')
  gameoverImg = loadImage('gameover.png')
  sadrunnerImg = loadImage('sadrunner.png')
}

function setup() {
  canvasWidth = min(windowWidth,800)
  let cnv = createCanvas(canvasWidth, 450);
  cnv.style('border-radius', '10px');
  cnv.style('box-shadow','7px 7px #002101')
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  title = createP('Trail Runnin\'')
  title.style('color', '#C2D74A')
  title.style('font-size', '50px')
  title.position((windowWidth - 320) / 2, (windowHeight - 725) / 2)

  instructions = createP('click or tap to begin...')
  instructions.style('color', '#C2D74A')
  instructions.position((windowWidth - 170) / 2, (windowHeight + 480) / 2)

  x2 = width
  timer = createP('0')
  timer.position(windowWidth/2 + canvasWidth/2.8 + 70, ((windowHeight - 450) / 2) + 20)
  timer.style('font-size', '14px')
  score = createP('Score: ')
  score.style('font-size', '14px')
  score.position(windowWidth/2 + canvasWidth/2.8, ((windowHeight - 450) / 2) + 20)

  //jump = createButton('Jump!')
  //jump.style('font-size', '14px')
  //jump.position((windowWidth-55)/2, (windowHeight + 525)/2)
  //jump.attribute('class', 'buttonJump')

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
    gameOver.remove()
  }
}



function mouseClicked() {
  runner.jump();
  start = true;
}

function touchStarted() {
  runner.jump();
  start = true;
}

function timeIt() {
  timer.html(counter)
  if (start){
  counter++
  }
}



function draw() {
  image(backgroundImg, x1, 0, width, height)
  image(backgroundImg, x2, 0, width, height)
  runner.show();
  if (start) {
    instructions.remove()
    scrollSpeed = 5 + .5 * (counter / 25);
    count += 1
    if ((random(1) < 0.01 + .005 * (counter / 25)) && (count > 85 - counter / 5)) {
      count = 0;
      if (random(1) < .7) {
        rocks.push(new Rock());
      } else {
        rocks.push(new Rock2());
      }
    }

    //image(backgroundImg, x1, 0, width, height)
    //image(backgroundImg, x2, 0, width, height)
    x1 -= scrollSpeed
    x2 -= scrollSpeed
    if (x1 < -width) {
      x1 = width
    }
    if (x2 < -width) {
      x2 = width
    }
    //runner.show();
    runner.move();


    for (let r of rocks) {
      r.move(counter)
      r.show();
      if (runner.hits(r)) {
        gameover = new Gameover()
        clearInterval(interval)

        gameOver = createButton('Game Over')
        gameOver.style('font-size', '48px')
        gameOver.position((windowWidth - canvasWidth/2) / 2, (windowHeight - 120) / 2)
        gameOver.attribute('class', 'buttonB')


        startButton = createButton('Try Again?')
        startButton.style('font-size', '14px')
        startButton.position(windowWidth/2 - canvasWidth/2.2, ((windowHeight - 450) / 2) + 30)
        startButton.attribute('class', 'buttonA')
        startButton.mousePressed(restart)
        noLoop();
      }
    }

  }
}