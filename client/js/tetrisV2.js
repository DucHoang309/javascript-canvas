'use strict';

const Game = require('./tetrisV2/game');

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.randomIndex = function () {
    return Math.floor(Math.random() * this.length);
};

window.SHAPE_DATA = require('../../data/tetrisV2/shape.json');
window.GAME_CONFIG = require('../../data/tetrisV2/config.json');
window.gameInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    let game = new Game();

    game.run()

    window.gameInterval = setInterval(function () {
        game.run()
    }, GAME_CONFIG.interval);
})
