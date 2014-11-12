import Player from '../js/player';
var expect = require('expect.js');
var player = new Player();

describe('Player', () => {
    it ('is an object rapresenting the human player of the game', () => {
        expect(player).to.be.an('object');
        expect(player).to.have.property('choice');
        expect(player).to.have.property('getChoice');
        expect(player).to.have.property('setChoice');
    });

    describe('#getChoice', () => {
        it('return the current player choice', () => {
            var choice = 'rock';
            var choosed = player.setChoice(choice).getChoice();
            expect(choosed).to.be.equal(choice);
        });
    });

    describe('#setChoice', () => {
        it('set the player choice', () => {
            var choice = 'paper';
            var choosed = player.setChoice(choice).getChoice();
            expect(choosed).to.be.equal(choice);
        });
    });
});