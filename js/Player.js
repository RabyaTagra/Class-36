class Player {
  constructor(){
    this.name=""
    this.distance= 0 
    this.index = ""
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      Name:this.name,
      distance:this.distance,
    });
  }
//getPlayerINFO is a static function
  static getPlayerINFO(){
    var playerInfoREF= database.ref("players")
    playerInfoREF.on("value",(data)=>{
      allPlayers = data.val()
    })
    console.log("test")
    console.log(allPlayers)
  }
}
