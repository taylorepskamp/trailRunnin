class SadRunner {
  constructor(){
    this.r = 101;
    this.x = 45;
    this.y = height - this.r - 75;
    this.vy = 0;
    this.gravity = .15;
  }
  
  remove(){
    this.x -= 40;  
  }
  

  show() {
    image(sadrunnerImg,this.x, this.y, this.r, this.r);

  }
  
}