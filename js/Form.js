class Form {
  constructor() {
  this.title = createElement('h2') 
  this.input = createInput("Name");
  this.button = createButton('Play'); 
  this.greeting = createElement('h3');
  }
  Hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);
    //add the arrow function & change game.js-next class
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;

      player.index=playerCount
      player.update()
      player.updateCount(playerCount)
      this.greeting.html("Hello "+player.name+ "We are waiting for others to join")
      this.greeting.position(130, 160)
    });

  }
}
