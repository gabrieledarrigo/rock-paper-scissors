/**
 * A simple class
 * that rapresent the machine player of the games.
 */
class Machine {

    /**
     * Return the machine choice.
     * Accept a choices parameter, so the machine
     * can randomly pick a choice.
     *
     * @param {Array} choices
     */
    getChoice(choices = ['rock', 'paper', 'scissors']) {
        var index = Math.floor(Math.random() * 3);
        return choices[index];
    }
}

export default Machine;
