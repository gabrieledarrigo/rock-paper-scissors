import Player from '/js/player';
import Machine from '/js/machine';
import Game from '/js/game';
import GameView from '/js/game-view';

/**
 * Application main module. 
 * Set the game event listeners and start the game when the
 * player is ready.
 */
class App {

    /**
     * Game is the
     * only dependency.
     */
    constructor(game) {
        this.game = game;
    }
    
    /**
     * Set the game
     * event listeners.
     */
    setListeners() {
        var btns = document.querySelectorAll('div.game-button');

        for (var i = 0, len = btns.length; i < len; i++) {
            btns[i].addEventListener('click', (e) => {
                this.game.play(e);
            });
        }

        return this;
    }

    /**
     * Public interface
     * to start the application.
     */
    start() {
        this.setListeners();
    }
}

// Let's 
// start dude!
var app = new App(
    new Game(
        new Player(), new Machine(), new GameView(document.getElementById('message')), document
));
app.start();
