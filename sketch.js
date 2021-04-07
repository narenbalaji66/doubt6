const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var maxDrop=100,drops=[];
var engine,world,umbralla;
function preload(){
    
}

function setup(){
     
     engine=Engine.create()
     world=engine.world
     createCanvas(400,600);
     umbralla= new Umbralla(200,465,40)
     if (frameCount%150===0){
     for(var i=0; i<maxDrop; i++){
        drops.push(new Drops(random(0,400), random(0,400),5))
     } 
     }
    
    
}

function draw(){
    background("black");
    Engine.update(engine)
    for(var i=0; i<maxDrop; i++){
        drops[i].display()
    }
    umbralla.display()
    
}   

