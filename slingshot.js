class slingShot
{
    constructor(body1,point2)
    {
        var options = { bodyA :body1,
            pointB : point2,
            stiffness : 0.04,
            length :10
                                    }

          this.slingshot = constraint.create(options)
         World.add(world, this.slingshot)
         this.sling1 = loadImage("sprites/sling1.png");
         this.sling2 = loadImage("sprites/sling2.png");
         this.sling3 = loadImage("sprites/sling3.png");
    }

    display()
    {
        image(this.sling1,280,80,40,140)
        image(this.sling2,252,70,40,100)
        
        

        if(this.slingshot.bodyA!=null)
        {
          var birdpos = this.slingshot.bodyA.position;
          var slingpos = this.slingshot.pointB;
          push()
          if(birdpos.x <250)
          {
          stroke("#301608")
          strokeWeight(3)
          line(birdpos.x-15,birdpos.y,slingpos.x-30,slingpos.y+30)
          line(birdpos.x+15,birdpos.y,slingpos.x+30,slingpos.y+30)
          image(this.sling3,birdpos.x-30,birdpos.y-10,20,30)
          }
          else{
            strokeWeight(7)
            stroke("#301608")
            line(birdpos.x-15,birdpos.y,slingpos.x-30,slingpos.y+30)
            line(birdpos.x+15,birdpos.y,slingpos.x+30,slingpos.y+30)
            image(this.sling3,birdpos.x+10,birdpos.y-10,20,30)
          }
          pop();
        }
    }

    fly()
    {
      Matter.Body.applyForce(this.slingshot.bodyA,this.slingshot.bodyA.position,{x:100,y:-15}) 
        this.slingshot.bodyA = null;
        
    } 

    attach(body12)
    {
      this.slingshot.bodyA = body12;
    }
}


