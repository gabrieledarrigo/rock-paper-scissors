/**
 * The Game ckass.
 */
class Game {

    /**
     * On construction
     * set the game's dependencies.
     *
     * @param {Object} player
     * @param {machine} player
     * @param {view} player
     */
    constructor(player, machine, view, document) {

        /**
         * Holds an instance
         * of the player object.
         * 
         * @type {}
         */
        this.player  = player;

        /**
         * Holds an instance
         * of the machine object.
         * 
         * @type {}
         */
        this.machine = machine;

        /**
         * Holds an instance
         * of the view object.
         * 
         * @type {Object}
         */
        this.view    = view;

        /**
         * Holds an instance
         * of the document object.
         * 
         * @type {Object}
         */
        this.document = document;

        /**
         * All available 
         * game choices.
         * 
         * @type {Array}
         */
        this.choices = ['rock', 'paper', 'scissors'];

        /**
         * An object that map all
         * win / loose conditions of the game.
         * 
         * @type {Object}
         */
        this.map = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
    }

    /**
     * Check the game winner
     * comparing the player choice with the machine choice,
     * rendering a message according to the result.
     * 
     * @param {playerChoice} string
     * @param {machineCoice} string
     */
    checkWinner(playerChoice, machineCoice) {
        var template = this.document.getElementById('message-template');
        var choosed = {
            playerChoice : playerChoice,
            machineCoice : machineCoice
        };

        if (this.choices.indexOf(choosed.playerChoice) === -1) {
            choosed.message = 'Are you joking with me?';
            return this.view.render(choosed, template);
        }

        if (choosed.playerChoice === choosed.machineCoice) {
            choosed.message = 'You tie!';
            return this.view.render(choosed, template);
        }

        if (this.map[choosed.playerChoice] === choosed.machineCoice) {
            choosed.message = 'You win!';
            return this.view.render(choosed, template);
        }

        choosed.message = 'You loose!';
        return this.view.render(choosed, template);
    };

    /**
     * Invoked
     * every time 
     * a player start the game.
     */
    play(e) {
        this.player.setChoice(e.currentTarget.getAttribute('data-choice'));
        return this.checkWinner(this.player.getChoice(), this.machine.getChoice());
    }
}

export default Game;
