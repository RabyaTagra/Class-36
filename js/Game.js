class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.Hide();
    textSize(30);
    text("Game has Started", 120, 100);
    Player.getPlayerINFO()
    console.log(allPlayers)
    if(allPlayers!==undefined){
      var Yposition = 130
      for(var plr in allPlayers){
        Yposition+=20;
        textSize(15);
        text(allPlayers[plr].name+":"+ allPlayers[plr].distance,120,Yposition);
      }
      console.log()
    }
    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance += 50
      player.update()
    }
  }
}
