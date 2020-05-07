class Rock2 {
  constructor(){
    this.r = 95
    this.x = width
    this.y = height - this.r -37    
  }
  
  move(counter, bool){
    if (!bool){
    this.x -= 5 + .5*(counter/25);  
    }
  }
  
  show(){
    image(rock2Img, this.x, this.y, this.r, this.r)
  }
}