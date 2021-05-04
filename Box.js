class Box {
    constructor(x, y){
        var options = {
            restitution:0.4
            
           
        }
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<4){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       fill(random(20,250),random(50,170),random(100,200));
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body)
          push();
          this.visibility-=5
          tint(255,this.visibility)
          pop();
        
        }
      }
    };
    
  