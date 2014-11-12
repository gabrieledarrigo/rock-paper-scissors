import Game from '../js/game';
var expect = require('expect.js');

var mockDocument = {
    getElementById : function() {
        return '<h1>This is the {{title}}</h1>';
    }
};

var mockPlayer = {
    choice : null,
    getChoice : function(choice) {
        return this.choice;
    },
    setChoice : function(choice) {
        this.choice = choice;
    }
};

var mockMachine = {
    getChoice : function() {
        return 'paper';
    }
};

var mockView = {
    data: null,
    render : function(data) {
        this.data = data;
    }
};

var mockEvent = {
    currentTarget : {
        getAttribute : function() {
            return 'rock'
        }
    }
};

var game = new Game(mockPlayer, mockMachine, mockView, mockDocument);

describe('Game', () => {
    it ('is the game object', () => {
        expect(game).to.be.an('object');
        expect(game).to.have.property('player');
        expect(game).to.have.property('machine');
        expect(game).to.have.property('view');
        expect(game).to.have.property('choices');
        expect(game).to.have.property('map');
        expect(game).to.have.property('checkWinner');
        expect(game).to.have.property('play');
    });

    describe('#checkWinner', () => {
        it('check who is the winner between the player and the machine', () => {
            game.checkWinner('rock', 'paper');
            expect(game.view.data.message).to.be.equal('You loose!');

            game.checkWinner('paper', 'rock');
            expect(game.view.data.message).to.be.equal('You win!');

            game.checkWinner('rock', 'rock');
            expect(game.view.data.message).to.be.equal('You tie!');

            game.checkWinner('luke skywalker', 'rock');
            expect(game.view.data.message).to.be.equal('Are you joking with me?');
        });
    });

    describe('#play', () => {
        it('start the game', () => {
            game.play(mockEvent);
            expect(game.player.choice).to.be.equal(mockEvent.currentTarget.getAttribute());
            expect(game.machine.getChoice()).to.be.equal(mockMachine.getChoice());
        });
    });
});