// Define "gameState" here
const gameState = {};

function create() {
    gameState.player1 = this.add.rectangle(10, 0, 20, 50, 0xff0066);
    gameState.ball = this.add.rectangle(450, 300, 20, 20, 0xff0066);
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.down.isDown){
     gameState.player1.y  += 1;
 }
  if (gameState.cursors.up.isDown){
	gameState.player1.y -= 1;
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
