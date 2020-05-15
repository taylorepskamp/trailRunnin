
class Runner {
  constructor(){
    this.r = 100;
    this.x = 50;
    this.y = height - this.r - 75;
    this.vy = 0;
    this.gravity = .15;
  }
  
  jump(){
    if(this.y == height - this.r-75){
        this.vy = -6 ;
    }  
  }
  
  hits(rock){
    return collideRectRect(this.x,this.y,this.r-30,this.r-30,rock.x,rock.y,rock.r,rock.r)
  
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - this.r-75)
  }
  
  hide(){
   this.y-=100
  }
  
  show() {
      image(runnerImg,this.x, this.y, this.r, this.r);
    
  }
  
  
}