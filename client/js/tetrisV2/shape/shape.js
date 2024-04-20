'use strict';

const Block = require('../block');

/**
 * Shape
 * @param {number} x - X coord
 * @param {number} y - Y coord
 */
function Shape(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.blueprint = null;
    this.matrix = null;
    this.color = 'black';

    /**
     * @var {Array<Block>}
     */
    this.blocks = [];
}

/**
 * Set shape direction
 * @param {number} direction - Shape direction
 */
Shape.prototype.setDirection = function (direction) {
    if (!this.blueprint) {
        throw new Error('Blueprint must be set before setting Shape\'s direction');
    }
    this.direction = (direction > this.blueprint.length - 1) ? 0 : direction;
    this.matrix = this.blueprint[this.direction];
};

/**
 * Set shape blueprint
 * @param {number} blueprint - Shape blueprint
 */
Shape.prototype.setBlueprint = function (blueprint) {
    this.blueprint = blueprint;
};

/**
 * Set color
 * @param {string} color - Shape color
 */
Shape.prototype.setColor = function (color) {
    this.color = color;
};

/**
 * Destroy shape
 */
Shape.prototype.destroy = function () {
    this.blocks = [];
};

/**
 * Init blocks in shape
 */
Shape.prototype.initBlocks = function () {
    let matrix = this.matrix;

    for (let _y = 0; _y < matrix.length; _y++) {
        let yMatrix = matrix[_y];

        for (let _x = 0; _x < yMatrix.length; _x++) {
            let xMatrix = yMatrix[_x];
            if (xMatrix === 1) {
                let block = new Block(this.x + _x, this.y + _y, GAME_CONFIG.block.width, this.color);
                this.blocks.push(block);
            }
        }
    }
};

/**
 * Shape goes left
 */
Shape.prototype.goLeft = function () {
    this.x--;
    this.blocks.forEach(block => {
        block.goLeft();
    });
};

/**
 * Shape goes right
 */
Shape.prototype.goRight = function () {
    this.x++;
    this.blocks.forEach(block => {
        block.goRight();
    });
};

/**
 * Shape goes down
 */
Shape.prototype.goBottom = function () {
    this.y++;
    this.blocks.forEach(block => {
        block.goBottom();
    });
};

/**
 * Shape rotate by direction
 */
Shape.prototype.rotate = function () {
    this.setDirection(++this.direction);
    this.destroy();
    this.initBlocks();
};

/**
 * Rotate by math from left to right
 */
Shape.prototype.rotateByMath = function () {
    let oldWidth = this.matrix[0].length;
    let oldHeight = this.matrix.length;
    let newMatrix = Array.from({ length: oldWidth }, () => {
        return Array(oldHeight).fill(0);
    });

    // New vertical loop, newHeight = oldWidth
    for (let y = 0; y < oldWidth; y++) {
        // New horizontal loop, newWidth = oldHeight
        for (let x = 0; x < oldHeight; x++) {
            let bottomToTopIdx = oldHeight - 1 - x;
            newMatrix[y][bottomToTopIdx] = this.matrix[x][y];
        }
    }

    this.matrix = newMatrix;
    
    this.destroy();
    this.initBlocks();
};

module.exports = Shape;
