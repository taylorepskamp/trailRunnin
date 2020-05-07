class Rock {
  constructor(){
    this.r = 45
    this.x = width
    this.y = height - this.r -65
  }
  
  move(counter){
    this.x -= 5 + .5*(counter/25);  
  }
  
  
  show(){
    image(angryRockImg, this.x, this.y, this.r, this.r)
  }
}