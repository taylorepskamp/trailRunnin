class Gameover {
  constructor(){
    this.r = 300  
    this.x = floor((windowWidth-300)/2)
    this.y = 75
  }
  
  
  show(){
    text('hello', this.x, this.y, this.r, this.r)
  }
}