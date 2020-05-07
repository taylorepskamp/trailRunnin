class Gameover {
  constructor(){
    this.r = 300  
    this.x = 250
    this.y = 75
  }
  
  
  show(){
    image(gameoverImg, this.x, this.y, this.r, this.r)
  }
}