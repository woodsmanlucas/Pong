// Define "gameState" here
const gameState = {};

function create() {
    gameState.line = this.add.rectangle(450, 300, 10, 600,  0x0066cc);
    gameState.player1 = this.add.rectangle(10, 0, 20, 50, 0xff0066);
    gameState.ball = this.add.rectangle(450, 300, 20, 20, 0xff0066);
    
    gameState.ball.vx = 2;
    gameState.ball.vy = Math.random()*.5;
    gameState.cursors = this.input.keyboard.createCursorKeys();
    console.log(gameState.player1)
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
}

function contactsPaddle() {
    return gameState.ball.x <= gameState.player1.width &&
    gameState.ball.x > 0 && 
    gameState.ball.y <= gameState.player1.y + 25 && 
    gameState.ball.y >= gameState.player1.y -25
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
