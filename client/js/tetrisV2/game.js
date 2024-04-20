'use strict';

const Board = require('./board');
const Canvas = require('./canvas');
const ShapeFactory = require('./shape/shapeFactory');

function Game() {
    this.score = 0;
    this.canvas = new Canvas();
    this.board = new Board();
    this.createNewRandomShape();
    this.initController();
}

/**
 * Create a new random shape
 */
Game.prototype.createNewRandomShape = function () {
    // this.currentShape = ShapeFactory.getShape(0, 0, 'Square', 0);
    this.currentShape = ShapeFactory.getRandomShape();
}

/**
 * Add score(s)
 * @param {number} score - score(s)
 */
Game.prototype.addScore = function (score) {
    this.score += score
};

/**
 * Update game detail view
 */
Game.prototype.updateDetailView = function () {
    let scoreEl = document.querySelector('span.score');
    if (scoreEl) scoreEl.innerHTML = this.score;
};

/**
 * Increase the game score
 */
Game.prototype.increaseScore = function () {
    this.score++;
    let scoreEl = document.querySelector('span.score');
    if (scoreEl) scoreEl.innerHTML = this.score;
};

/**
 * Game logic
 */
Game.prototype.run = function () {
    let isShapeCollideBottom = this.board.isShapeCollideBottom(this.currentShape);
    let isAbleToPinShape = this.board.isAbleToPinShape(this.currentShape);

    if (!isShapeCollideBottom) {
        this.canvas.clearShape(this.currentShape);
        this.currentShape.goBottom();
        this.canvas.drawShape(this.currentShape);
    } else if (isAbleToPinShape) {
        this.board.pinShape(this.currentShape);

        let isDestroyed;
        let destroyedCount = 0;
        do {
            isDestroyed = this.board.destroyFullRow();
            if (isDestroyed) {
                destroyedCount++;
            }
        } while (isDestroyed);

        if (destroyedCount !== 0) {
            this.canvas.reDrawBoard(this.board);
            this.addScore(destroyedCount);
            this.updateDetailView();
        }

        this.createNewRandomShape();
    } else {
        console.log(this.currentShape);
        console.log(this.board);
        clearInterval(window.gameInterval);
    }
};

/**
 * Shape rotation process handler
 */
Game.prototype.processRotation = function () {
    let tempShape = this.currentShape.cloneTemporaryRotatedShape();
    let tempShapeWidth = tempShape.matrix[0].length;

    // Prevent making current shape outside the board after being rotated
    if (this.currentShape.x + tempShapeWidth >= this.board.width) {
        let xOffset = this.board.width - tempShapeWidth;
        tempShape.setX(xOffset);
    }

    tempShape.destroy();
    tempShape.initBlocks();

    if (!this.board.isShapeCollapseOnPinnedBlock(tempShape)) {
        this.currentShape.copyFrom(tempShape);
    }
};

/**
 * Init game keyboard controller
 */
Game.prototype.initController = function () {
    window.addEventListener('keydown', (e) => {
        this.canvas.clearShape(this.currentShape);
        switch (e.keyCode) {
            case 37: // left
                if (!this.board.isShapeCollideLeft(this.currentShape)) {
                    this.currentShape.goLeft();
                }
                break;
            case 32: // Space - rotate
                this.processRotation();
                break;
            case 39: // Right
                if (!this.board.isShapeCollideRight(this.currentShape)) {
                    this.currentShape.goRight();
                }
                break;
            case 40: // Down
                if (!this.board.isShapeCollideBottom(this.currentShape)) {
                    this.currentShape.goBottom();
                }
                break;
            default:
                break;
        }
        this.canvas.drawShape(this.currentShape);
    })
};

module.exports = Game;
