/**
 * The Game view,
 * responsible to draw the game.
 */
class GameView {

    /**
     * On construction
     * set the DOM elements that will be used 
     * as view placeholder.
     */
    constructor(el) {
        this.el = el || {};
    }
    
    /**
     * Render the view.
     * Accept a data object and a template string,
     * which compile with the data and the append to the
     * el placeholder.
     */
    render(data, template) {
        var html = template.innerHTML;

        // Attempts
        // to compile the tmplate.
        for (var key in data) {
            var placeholder = '{{' + key +'}}';

            if (html.search(placeholder) !== -1) {
                html = html.replace(placeholder, data[key]);
            }
        }

        this.el.innerHTML = html;
    }
}

export default GameView;
