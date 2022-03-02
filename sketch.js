const total = 200;
var birds = [];
var p = [];
function setup(){
  createCanvas(400,400);
  for(let i = 0; i<total; i++){
      birds[i] = new Bird();
  }
   p.push(new pipe());

}

function draw(){
  background(0);
  for(let bird of birds){
  bird.show();
  bird.update();
  bird.think(p);
}


  if(frameCount % 150 == 0){
    p.push(new pipe());
  }

  for (var i = p.length-1; i>=0; i--){
    p[i].show();
    p[i].update();
    for(let j = birds.length-1; j>=0; j--){
    if(p[i].hit(birds[j])){
      birds.splice(j,1);
    }
  }
    if (p[i].offscreen()){
      p.splice(i,1);
    }
  }

}

//function keyPressed(){
  //if(key == " "){
    //birds.up();
  //}
//}
