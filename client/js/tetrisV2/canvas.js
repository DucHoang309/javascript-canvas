'use strict';

const Block = require('./block');
const Board = require('./board');
const Shape = require('./shape/shape');

function Canvas() {
    let canvas = document.querySelector('canvas');
    let cxt2d  = canvas.getContext('2d');
    canvas.width = GAME_CONFIG.canvas.width;
    canvas.height = GAME_CONFIG.canvas.height;
    this.cxt2d = cxt2d;
}

/**
 * Draw a block
 * @param {Block} block - a block
 */
Canvas.prototype.drawBlock = function (block) {
    this.cxt2d.fillRect(block.x * block.width, block.y * block.width, block.width, block.width);
    this.cxt2d.stroke();
};

/**
 * Clear a block
 * @param {Block} block - a block
 */
Canvas.prototype.clearBlock = function (block) {
    this.cxt2d.clearRect(block.x * block.width, block.y * block.width, block.width, block.width);
};

/**
 * Draw a Shape
 * @param {Shape} shape - a Shape
 */
Canvas.prototype.drawShape = function (shape) {
    this.cxt2d.beginPath();

    let blocks = shape.blocks;
    blocks.forEach(block => {
        this.cxt2d.fillStyle = block.color;
        this.drawBlock(block);
    });

    this.cxt2d.closePath();
};

/**
 * Clear a Shape
 * @param {Shape} shape - a Shape
 */
Canvas.prototype.clearShape = function (shape) {
    let blocks = shape.blocks;
    blocks.forEach(block => {
        this.clearBlock(block);
    });
};

/**
 * Re draw the board after destroying the full-row
 * @param {Board} board - the board
 */
Canvas.prototype.reDrawBoard = function (board) {
    this.cxt2d.clearRect(0, 0, GAME_CONFIG.canvas.width, GAME_CONFIG.canvas.height);
    this.cxt2d.beginPath();

    let matrix = board.matrix;
    matrix.forEach(matrixY => {
        matrixY.forEach(block => {
            if (block !== null) {
                this.cxt2d.fillStyle = block.color;
                this.drawBlock(block);
            }
        });
    });

    this.cxt2d.closePath();
};

module.exports = Canvas;
