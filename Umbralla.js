class Umbralla{
    constructor(x,y,radius){
   var options={
       isStatic:true
   }
   
   this.radius=radius
   this.body=Matter.Bodies.circle(x,y,radius,options)
   this.image = loadImage("walking_1.png");
   World.add(world,this.body)
} 
  display(){
push()
fill("black");
ellipse(this.body.position.x,this.body.position.y,this.radius*6.3,this.radius*6.3)
imageMode(CENTER);
 image(this.image, this.body.position.x, this.body.position.y, this.radius*8,this.radius*8);
pop()
  }


}
