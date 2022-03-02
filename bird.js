class Bird{
  constructor(){
  this.y = height/2;
  this.x = 50;
  this.g = .2;
  this.velocity = 0;
  this.lift = 3.5;
  this.brain = new NeuralNetwork(4,10,1);

}
  show(){
    fill(255);
    ellipse(this.x,this.y,16,16);
  }

  up(){
    this.velocity -= this.lift;
  }

  think(p){
    let closest = null;
    let closestD = Infinity;
    for(let i = 0; i<p.length; i++){
      let d = p[i].x-this.x;
      if(d<closestD && d >0){
        closest = p[i];
        closestD = d;
      }
    }


    let inputs = [];
    inputs[0] = this.y/height;
    inputs[1] = closest.top/height;
    inputs[2] = closest.bottom/height;
    inputs[3] = closest.x/height;
    let output = this.brain.feedforward(inputs);
    if(output[0]>.5){
      this.up();
    }
  }

  update(){
    this.velocity += this.g;
    this.y += this.g+this.velocity;
    if(this.y> height){
      this.velocity = 0;
      this.y  = height;
      //this.die();
    }
    if(this.y < 0 ){
      this.velocity = 0;
      this.y = 0;
    }
  }


  die(){
    console.log("game over")
    noLoop();
  }
}
