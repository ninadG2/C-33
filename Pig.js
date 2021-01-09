class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
  display()
  {
    
    if(this.body.speed>3)
    {
      World.remove(world,this.body)
      push()
      tint(255,this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)
      this.visibility -=5;
      pop();
    }
     else
     {
       super.display()
     }
  }

  score()
  {
    //console.log("show:"+this.visibility)
    if(this.visibility < 255 && this.visibility>0)
    {
      score = score+1;
    }
  }

};