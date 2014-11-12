import Player from '/js/player';
import Machine from '/js/machine';
import Game from '/js/game';
import GameView from '/js/game-view';

class App {
    constructor(game) {
        this.game = game;
    }
  
    setListeners() {
        var btns = document.querySelectorAll('div.game-button');

        for (var i = 0, len = btns.length; i < len; i++) {
            btns[i].addEventListener('click', (e) => {
                this.game.play(e);
            });
        }

        return this;
    }

    start() {
        this.setListeners();
    }
}

var app = new App(new Game(
    new Player(), new Machine(), new GameView(document.getElementById('message')))
);
app.start();
