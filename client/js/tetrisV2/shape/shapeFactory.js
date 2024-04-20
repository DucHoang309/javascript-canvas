'use strict';

const Shape = require('./shape');
const ShapeFactory = {};

/**
 * Get matrix based on direction
 * @returns {Array<Array<number>>|null} - Return matrix
 */
ShapeFactory.getBlueprint = function (name) {
    for (let idx = 0; idx < SHAPE_DATA.length; idx++) {
        let shapeConfig = SHAPE_DATA[idx];
        if (shapeConfig.name === name) {
            return shapeConfig.blueprint;
        }
    }
    return null;
};

/**
 * Get a shape
 * @param {number} x - X coord
 * @param {number} y - Y coord
 * @param {string} name - Shape name
 * @param {number} direction - Shape direction
 * @returns {Shape} - a Shape
 */
ShapeFactory.getShape = function (x, y, name, direction) {
    let shapeBlueprint = ShapeFactory.getBlueprint(name);
    let shape = new Shape(x, y);

    shape.setBlueprint(shapeBlueprint);
    shape.setDirection(direction);

    let randomColor = GAME_CONFIG.block.colors.random();

    shape.setColor(randomColor);
    shape.initBlocks();

    return shape;
};

/**
 * Get a random shape
 * @returns {Shape} - a Shape
 */
ShapeFactory.getRandomShape = function () {
    let randomShapeConfig = SHAPE_DATA.random();
    let shapeBlueprint = randomShapeConfig.blueprint;
    let randomDirection = shapeBlueprint.randomIndex();
    let randomColor = GAME_CONFIG.block.colors.random();
    let randomX = Math.floor(Math.random() * (GAME_CONFIG.canvas.width / GAME_CONFIG.block.width));
    let shape = new Shape(randomX, -1);

    shape.setBlueprint(shapeBlueprint);
    shape.setDirection(randomDirection);
    shape.setColor(randomColor);
    shape.initBlocks();

    return shape;
};

module.exports = ShapeFactory;
