import GameView from '../js/game-view';
var expect = require('expect.js');
var jsdom = require('jsdom').jsdom;

var document = jsdom();
var el = document.createElement('div');
var fakeTemplate = document.createElement('script');
    fakeTemplate.innerHTML = '<span>{{title}}</span>';
var fakeData = { title : 'title'};
var view = new GameView(el);

describe('GameView', () => {
    it('is an object rapresenting the game DOM view', () => {
        expect(view).to.be.an('object');
        expect(view).to.have.property('render');
        expect(view).to.have.property('el');
    });

    describe('#render', () => {
        it('given a data object and a template string, compile this and append to el', () => {
            expect(view.el).to.be.equal(el);
            view.render(fakeData, fakeTemplate);
            expect(view.el.innerHTML).to.be.equal('<span>title</span>');
        });
    });
});
