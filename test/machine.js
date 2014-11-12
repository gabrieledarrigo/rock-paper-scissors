import Machine from '../js/machine';
var expect  = require('expect.js');
var machine = new Machine();

describe('Machine', () => {
    it ('is an object rapresenting the machine player of the game', () => {
        expect(machine).to.be.an('object');
        expect(machine).to.have.property('getChoice');
    });

    describe('#getChoice', () => {
        it('return the current machine choice. Accept a choices array of parameter', () => {
            var choices = [1, 2, 3];
            var choosed = machine.getChoice(choices);
            expect(choices).contain(choosed);
        });
    });
});