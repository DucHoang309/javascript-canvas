'use strict';

/**
 * Init a block
 * @param {number} x - X coord
 * @param {number} y - Y coord
 * @param {number} width - block width
 */
function Block(x, y, width, color) {
    this.x = x;
    this.y = y;
    this.preX = x;
    this.preY = y;
    this.width = width;
    this.color = color;
}

Block.prototype.goLeft = function () {
    this.preX = this.x;
    this.x--;
};

Block.prototype.goRight = function () {
    this.preX = this.x;
    this.x++;
};

Block.prototype.goBottom = function () {
    this.preX = this.x;
    this.preY = this.y;
    this.y++;
};

module.exports = Block;
