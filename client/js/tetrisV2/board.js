'use strict';

const Shape = require('./shape/shape');

function Board() {
    let width = GAME_CONFIG.canvas.width / GAME_CONFIG.block.width;
    let height = GAME_CONFIG.canvas.height / GAME_CONFIG.block.width;

    this.matrix = Array.from({ length: height }, () => {
        return Array(width).fill(null);
    });
    this.width = width;
    this.height = height;
}

/**
 * Pin a shape to this board
 * @param {Shape} shape - a Shape
 */
Board.prototype.isAbleToPinShape = function (shape) {
    return shape.x >= 0 && shape.y >= 0;
};

/**
 * Pin a shape to this board
 * @param {Shape} shape - a Shape
 */
Board.prototype.pinShape = function (shape) {
    shape.blocks.forEach(block => {
        this.matrix[block.y][block.x] = block;
    });
};

/**
 * Check if a shape is about colliding to the bottom
 * @param {Shape} shape - a Shape
 * @returns {boolean} - Return true/false
 */
Board.prototype.isShapeCollideBottom = function (shape) {
    return shape.blocks.some(block => {
        return (block.y === this.height - 1) || (this.matrix[block.y + 1][block.x] !== null);
    });
};

/**
 * Check if a shape is about colliding to the left
 * @param {Shape} shape - a Shape
 * @returns {boolean} - Return true/false
 */
Board.prototype.isShapeCollideLeft = function (shape) {
    return shape.blocks.some(block => {
        return (block.x === 0) || (this.matrix[block.y][block.x - 1] !== null);
    });
};

/**
 * Check if a shape is about colliding to the left
 * @param {Shape} shape - a Shape
 * @returns {boolean} - Return true/false
 */
Board.prototype.isShapeCollideRight = function (shape) {
    return shape.blocks.some(block => {
        return (block.x === this.width - 1)
            || ((block.x + 1 < this.width) && (this.matrix[block.y][block.x + 1] !== null));
    });
};

/**
 * Get the index of full row
 * @returns {number} - Return full row index
 */
Board.prototype.getFullRowIndex = function () {
    let fullIdx;
    let isBoardHasFullRow = this.matrix.some((matrixY, idx) => {
        let isFull = matrixY.every(matrixX => matrixX !== null);
        if (isFull) {
            fullIdx = idx;
        }
        return isFull;
    });
    return isBoardHasFullRow ? fullIdx : -1;
};

/**
 * Destroy full rows and return status
 * @returns {boolean} - Return true, if there is at least 1 row destroyed
 */
Board.prototype.destroyFullRow = function () {
    let fullIdx = this.getFullRowIndex();
    if (fullIdx !== -1) {
        for (let idx = fullIdx; idx > 0; idx--) {
            this.matrix[idx] = this.matrix[idx - 1];

            // Push block down
            this.matrix[idx].forEach(block => {
                if (block !== null) block.goBottom();
            });
        }
        this.matrix[0] = Array(this.width).fill(null);
        return true;
    }
    return false;
};

module.exports = Board;
