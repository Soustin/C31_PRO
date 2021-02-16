const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[];
var plinkos = [];
var divisions = [];
var divisionHeight = 450;

function preload() {
}

function setup() {
  var canvas = createCanvas(494,780);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(247, 775, width, 10);

  //division = new Division(1, 580, 8, 350);
  //division2 = new Division(479, 580, 8, 350);
  //division3 = new Division(39.38, 580, 8, 350);
  //division4 = new Division(78.76, 580, 8, 350);
  //division5 = new Division(118.14, 580, 8, 350);
  //division6 = new Division(157.52, 580, 8, 350);
  //division7 = new Division(196.9, 580, 8, 350);
  //division8 = new Division(236.38, 580, 8, 350);
  //division9 = new Division(275.66, 580, 8, 350);
  //division10 = new Division(315.04, 580, 8, 350);
  //division11 = new Division(354.42, 580, 8, 350);
  //division12 = new Division(393.8, 580, 8, 350);
  //division13 = new Division(433.18, 580, 8, 350);
  //division14 = new Division(472.56, 580, 8, 350);
  //division15 = new Division(1, 580, 8, 350);

  

}

function draw() {
  background(0,255,0);
  Engine.update(engine); 

  ground.display();

  for (var k=7; k <=width; k = k+48) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display(); 
  }

  for(var j=40; j<=width; j=j+50) {
    plinkos.push(new Plinko(j, 100, 20));
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for(var i=15; k<=width; i=i+50) {
    plinkos.push(new Plinko(i, 150, 20));
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for(var l=40; l<=width; l=l+50) {
    plinkos.push(new Plinko(l, 200, 20));
  }
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  for(var t=15; t<=width; t=t+50) {
    plinkos.push(new Plinko(t, 250, 20));
  }
  for (var t = 0; t < plinkos.length; t++) {
    plinkos[t].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

  for(var k = 0; j<particles.length; j++){
    particles[j].display();
  }

  if(keyCode = 32){
    Matter.body.setStatic(particles, false)
  }

  //for(var j=0; j<particles.length; j++) {
    particles.display();
  //}

}