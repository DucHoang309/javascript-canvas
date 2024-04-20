'use strict';

const Board = require('./board');
const Canvas = require('./canvas');
const ShapeFactory = require('./shape/shapeFactory');

function Game() {
    this.canvas = new Canvas();
    this.board = new Board();
    this.createNewRandomShape();
    this.initController();
}

/**
 * Create a new random shape
 */
Game.prototype.createNewRandomShape = function () {
    this.currentShape = ShapeFactory.getRandomShape();
}

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
        let isDestroyed = this.board.destroyFullRow();
        if (isDestroyed) {
            this.canvas.reDrawBoard(this.board);
            console.log(this.board);
        }
        this.createNewRandomShape();
    } else {
        console.log(this.currentShape);
        console.log(this.board);
        clearInterval(window.gameInterval);
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
                this.currentShape.rotateByMath();
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
