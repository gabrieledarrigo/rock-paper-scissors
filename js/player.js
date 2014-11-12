/**
 * A simple class
 * rapresenting the human player.
 */
class Player {

    /**
     * On construction
     * set the choice props.
     */
    constructor() {
        this.choice = null;
    }

    /**
     * Set the player choice.
     *
     * @param {String} choice
     */
    setChoice(choice) {
        this.choice = choice;
        return this;
    }

    /**
     * Return the player choice.
     */
    getChoice() {
        return this.choice;
    }
}

export default Player;
