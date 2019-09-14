// Define "gameState" here
const gameState = {};
var score1 = 0;
var score2 = 0;

function create() {
    gameState.line = this.add.rectangle(450, 300, 10, 600,  0x0066cc);
    gameState.player1 = this.add.rectangle(10, 300, 20, 50, 0xff0066);
    gameState.ball = this.add.rectangle(450, 300, 20, 20, 0xff0066);
    gameState.score1 = this.add.text(20, 20, score1, {fill: 'blue', fontSize:40, fontStyle:'bold'});
    gameState.score2 = this.add.text(870, 20, score2, {fill: 'blue', fontSize:40, fontStyle:'bold'});
    gameState.ball.vx = 2;
    gameState.ball.vy = Math.random()*.4;
    gameState.cursors = this.input.keyboard.createCursorKeys();
    // console.log(gameState.player1)
}

function update() {
  if (gameState.cursors.down.isDown){
     gameState.player1.y  += 1;
     gameState.player1.vy = .5;
 }
  if (gameState.cursors.up.isDown){
    gameState.player1.y -= 1;
    gameState.player1.vy = -.5;
    }
  if (gameState.ball.x >= config.width) {
      gameState.ball.vx *= -1;
  }
  if (contactsPaddle()) {
    gameState.ball.vx *= -1;
    gameState.ball.vy += gameState.player1.vy;
  }
  gameState.ball.x += gameState.ball.vx;
    gameState.ball.y += gameState.ball.vy;

    // Scoreing

    if (gameState.ball.y < 0 && gameState.ball.x < (config.width/2)) {
	score2++;
	gameState.score2.setText(score2);
        reset();
    }

    if (gameState.ball.y > 600 && gameState.ball.x < (config.width/2)) {
	score2++;
	gameState.score2.setText(score2);
	reset();
    }

    if (gameState.ball.x < 0) {
	score2++
	gameState.score2.setText(score2);
	reset();
    }

    if (gameState.ball.y < 0 && gameState.ball.x > (config.width/2)) {
        score1++;
        gameState.score1.setText(score1);
        reset();
    }

    if (gameState.ball.y > 600 && gameState.ball.x > (config.width/2)) {
        score1++;
        gameState.score1.setText(score1);
        reset();
    }

}

function contactsPaddle() {
    return gameState.ball.x <= gameState.player1.width &&
    gameState.ball.x > 0 && 
    gameState.ball.y <= gameState.player1.y + 25 && 
    gameState.ball.y >= gameState.player1.y -25
}

function reset(){
    gameState.ball.x = 450;
    gameState.ball.y = 300;
    gameState.ball.vx = 2;
    gameState.ball.vy = Math.random()*.4;
    if (score1 >= 9) {
        console.log("Player 1 wins");
        document.getElementById("Win").innerHTML = "Player 1 Wins! Game Over"
    }
    if (score2 >= 9) {
        console.log("The wall wins");
        document.getElementById("Win").innerHTML = "The Wall Wins! Game Over"
        game.destroy();
    }
}

const config = {
	type: Phaser.AUTO,
	width: 900,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)
