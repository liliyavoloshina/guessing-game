const GuessingGame = require('./src/guessing-game.js');

const number = 42
window.game = new GuessingGame()
game.setRange(0, 100)
let result = game.guess()
if (result !== number) {
  console.log(`No way! ${number} !== ${result}`);
}
