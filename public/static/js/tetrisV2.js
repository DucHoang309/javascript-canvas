/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/tetrisV2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/tetrisV2.js":
/*!*******************************!*\
  !*** ./client/js/tetrisV2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Game = __webpack_require__(/*! ./tetrisV2/game */ \"./client/js/tetrisV2/game.js\");\r\n\r\nArray.prototype.random = function () {\r\n    return this[Math.floor(Math.random() * this.length)];\r\n};\r\n\r\nArray.prototype.randomIndex = function () {\r\n    return Math.floor(Math.random() * this.length);\r\n};\r\n\r\nwindow.SHAPE_DATA = __webpack_require__(/*! ../../data/tetrisV2/shape.json */ \"./data/tetrisV2/shape.json\");\r\nwindow.GAME_CONFIG = __webpack_require__(/*! ../../data/tetrisV2/config.json */ \"./data/tetrisV2/config.json\");\r\nwindow.gameInterval = null;\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    let game = new Game();\r\n\r\n    game.run()\r\n\r\n    window.gameInterval = setInterval(function () {\r\n        game.run()\r\n    }, GAME_CONFIG.interval);\r\n})\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2.js?");

/***/ }),

/***/ "./client/js/tetrisV2/block.js":
/*!*************************************!*\
  !*** ./client/js/tetrisV2/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Init a block\r\n * @param {number} x - X coord\r\n * @param {number} y - Y coord\r\n * @param {number} width - block width\r\n */\r\nfunction Block(x, y, width, color) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.preX = x;\r\n    this.preY = y;\r\n    this.width = width;\r\n    this.color = color;\r\n}\r\n\r\nBlock.prototype.goLeft = function () {\r\n    this.preX = this.x;\r\n    this.x--;\r\n};\r\n\r\nBlock.prototype.goRight = function () {\r\n    this.preX = this.x;\r\n    this.x++;\r\n};\r\n\r\nBlock.prototype.goBottom = function () {\r\n    this.preX = this.x;\r\n    this.preY = this.y;\r\n    this.y++;\r\n};\r\n\r\nmodule.exports = Block;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/block.js?");

/***/ }),

/***/ "./client/js/tetrisV2/board.js":
/*!*************************************!*\
  !*** ./client/js/tetrisV2/board.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Shape = __webpack_require__(/*! ./shape/shape */ \"./client/js/tetrisV2/shape/shape.js\");\r\n\r\nfunction Board() {\r\n    let width = GAME_CONFIG.canvas.width / GAME_CONFIG.block.width;\r\n    let height = GAME_CONFIG.canvas.height / GAME_CONFIG.block.width;\r\n\r\n    this.matrix = Array.from({ length: height }, () => {\r\n        return Array(width).fill(null);\r\n    });\r\n    this.width = width;\r\n    this.height = height;\r\n}\r\n\r\n/**\r\n * Pin a shape to this board\r\n * @param {Shape} shape - a Shape\r\n */\r\nBoard.prototype.isAbleToPinShape = function (shape) {\r\n    return shape.x >= 0 && shape.y >= 0;\r\n};\r\n\r\n/**\r\n * Pin a shape to this board\r\n * @param {Shape} shape - a Shape\r\n */\r\nBoard.prototype.pinShape = function (shape) {\r\n    shape.blocks.forEach(block => {\r\n        this.matrix[block.y][block.x] = block;\r\n    });\r\n};\r\n\r\n/**\r\n * Check if a shape is about colliding to the bottom\r\n * @param {Shape} shape - a Shape\r\n * @returns {boolean} - Return true/false\r\n */\r\nBoard.prototype.isShapeCollideBottom = function (shape) {\r\n    return shape.blocks.some(block => {\r\n        return (block.y === this.height - 1) || (this.matrix[block.y + 1][block.x] !== null);\r\n    });\r\n};\r\n\r\n/**\r\n * Check if a shape is about colliding to the left\r\n * @param {Shape} shape - a Shape\r\n * @returns {boolean} - Return true/false\r\n */\r\nBoard.prototype.isShapeCollideLeft = function (shape) {\r\n    return shape.blocks.some(block => {\r\n        return (block.x === 0) || (this.matrix[block.y][block.x - 1] !== null);\r\n    });\r\n};\r\n\r\n/**\r\n * Check if a shape is about colliding to the left\r\n * @param {Shape} shape - a Shape\r\n * @returns {boolean} - Return true/false\r\n */\r\nBoard.prototype.isShapeCollideRight = function (shape) {\r\n    return shape.blocks.some(block => {\r\n        return (block.x === this.width - 1)\r\n            || ((block.x + 1 < this.width) && (this.matrix[block.y][block.x + 1] !== null));\r\n    });\r\n};\r\n\r\n/**\r\n * Check if a shape is collapsing on a pinned block\r\n * @param {Shape} shape - a Shape\r\n * @returns {boolean} - Return true/false\r\n */\r\nBoard.prototype.isShapeCollapseOnPinnedBlock = function (shape) {\r\n    return shape.blocks.some(block => {\r\n        return this.matrix[block.y][block.x] !== null\r\n    })\r\n};\r\n\r\n/**\r\n * Get the index of full row\r\n * @returns {number} - Return full row index\r\n */\r\nBoard.prototype.getFullRowIndex = function () {\r\n    let fullIdx;\r\n    let isBoardHasFullRow = this.matrix.some((matrixY, idx) => {\r\n        let isFull = matrixY.every(matrixX => matrixX !== null);\r\n        if (isFull) {\r\n            fullIdx = idx;\r\n        }\r\n        return isFull;\r\n    });\r\n    return isBoardHasFullRow ? fullIdx : -1;\r\n};\r\n\r\n/**\r\n * Destroy full rows and return status\r\n * @returns {boolean} - Return true, if there is at least 1 row destroyed\r\n */\r\nBoard.prototype.destroyFullRow = function () {\r\n    let fullIdx = this.getFullRowIndex();\r\n    if (fullIdx !== -1) {\r\n        for (let idx = fullIdx; idx > 0; idx--) {\r\n            // Push block down\r\n            this.matrix[idx] = this.matrix[idx - 1];\r\n            this.matrix[idx].forEach(block => {\r\n                if (block !== null) block.goBottom();\r\n            });\r\n        }\r\n        this.matrix[0] = Array(this.width).fill(null);\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\nmodule.exports = Board;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/board.js?");

/***/ }),

/***/ "./client/js/tetrisV2/canvas.js":
/*!**************************************!*\
  !*** ./client/js/tetrisV2/canvas.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Block = __webpack_require__(/*! ./block */ \"./client/js/tetrisV2/block.js\");\r\nconst Board = __webpack_require__(/*! ./board */ \"./client/js/tetrisV2/board.js\");\r\nconst Shape = __webpack_require__(/*! ./shape/shape */ \"./client/js/tetrisV2/shape/shape.js\");\r\n\r\nfunction Canvas() {\r\n    let canvas = document.querySelector('canvas');\r\n    let cxt2d  = canvas.getContext('2d');\r\n    canvas.width = GAME_CONFIG.canvas.width;\r\n    canvas.height = GAME_CONFIG.canvas.height;\r\n    this.cxt2d = cxt2d;\r\n}\r\n\r\n/**\r\n * Draw a block\r\n * @param {Block} block - a block\r\n */\r\nCanvas.prototype.drawBlock = function (block) {\r\n    this.cxt2d.fillRect(block.x * block.width, block.y * block.width, block.width, block.width);\r\n    this.cxt2d.stroke();\r\n};\r\n\r\n/**\r\n * Clear a block\r\n * @param {Block} block - a block\r\n */\r\nCanvas.prototype.clearBlock = function (block) {\r\n    this.cxt2d.clearRect(block.x * block.width, block.y * block.width, block.width, block.width);\r\n};\r\n\r\n/**\r\n * Draw a Shape\r\n * @param {Shape} shape - a Shape\r\n */\r\nCanvas.prototype.drawShape = function (shape) {\r\n    this.cxt2d.beginPath();\r\n\r\n    let blocks = shape.blocks;\r\n    blocks.forEach(block => {\r\n        this.cxt2d.fillStyle = block.color;\r\n        this.drawBlock(block);\r\n    });\r\n\r\n    this.cxt2d.closePath();\r\n};\r\n\r\n/**\r\n * Clear a Shape\r\n * @param {Shape} shape - a Shape\r\n */\r\nCanvas.prototype.clearShape = function (shape) {\r\n    let blocks = shape.blocks;\r\n    blocks.forEach(block => {\r\n        this.clearBlock(block);\r\n    });\r\n};\r\n\r\n/**\r\n * Re draw the board after destroying the full-row\r\n * @param {Board} board - the board\r\n */\r\nCanvas.prototype.reDrawBoard = function (board) {\r\n    this.cxt2d.clearRect(0, 0, GAME_CONFIG.canvas.width, GAME_CONFIG.canvas.height);\r\n    this.cxt2d.beginPath();\r\n\r\n    let matrix = board.matrix;\r\n    matrix.forEach(matrixY => {\r\n        matrixY.forEach(block => {\r\n            if (block !== null) {\r\n                this.cxt2d.fillStyle = block.color;\r\n                this.drawBlock(block);\r\n            }\r\n        });\r\n    });\r\n\r\n    this.cxt2d.closePath();\r\n};\r\n\r\nmodule.exports = Canvas;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/canvas.js?");

/***/ }),

/***/ "./client/js/tetrisV2/game.js":
/*!************************************!*\
  !*** ./client/js/tetrisV2/game.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Board = __webpack_require__(/*! ./board */ \"./client/js/tetrisV2/board.js\");\r\nconst Canvas = __webpack_require__(/*! ./canvas */ \"./client/js/tetrisV2/canvas.js\");\r\nconst ShapeFactory = __webpack_require__(/*! ./shape/shapeFactory */ \"./client/js/tetrisV2/shape/shapeFactory.js\");\r\n\r\nfunction Game() {\r\n    this.score = 0;\r\n    this.canvas = new Canvas();\r\n    this.board = new Board();\r\n    this.createNewRandomShape();\r\n    this.initController();\r\n}\r\n\r\n/**\r\n * Create a new random shape\r\n */\r\nGame.prototype.createNewRandomShape = function () {\r\n    // this.currentShape = ShapeFactory.getShape(0, 0, 'Square', 0);\r\n    this.currentShape = ShapeFactory.getRandomShape();\r\n}\r\n\r\n/**\r\n * Add score(s)\r\n * @param {number} score - score(s)\r\n */\r\nGame.prototype.addScore = function (score) {\r\n    this.score += score\r\n};\r\n\r\n/**\r\n * Update game detail view\r\n */\r\nGame.prototype.updateDetailView = function () {\r\n    let scoreEl = document.querySelector('span.score');\r\n    if (scoreEl) scoreEl.innerHTML = this.score;\r\n};\r\n\r\n/**\r\n * Increase the game score\r\n */\r\nGame.prototype.increaseScore = function () {\r\n    this.score++;\r\n    let scoreEl = document.querySelector('span.score');\r\n    if (scoreEl) scoreEl.innerHTML = this.score;\r\n};\r\n\r\n/**\r\n * Game logic\r\n */\r\nGame.prototype.run = function () {\r\n    let isShapeCollideBottom = this.board.isShapeCollideBottom(this.currentShape);\r\n    let isAbleToPinShape = this.board.isAbleToPinShape(this.currentShape);\r\n\r\n    if (!isShapeCollideBottom) {\r\n        this.canvas.clearShape(this.currentShape);\r\n        this.currentShape.goBottom();\r\n        this.canvas.drawShape(this.currentShape);\r\n    } else if (isAbleToPinShape) {\r\n        this.board.pinShape(this.currentShape);\r\n\r\n        let isDestroyed;\r\n        let destroyedCount = 0;\r\n        do {\r\n            isDestroyed = this.board.destroyFullRow();\r\n            if (isDestroyed) {\r\n                destroyedCount++;\r\n            }\r\n        } while (isDestroyed);\r\n\r\n        if (destroyedCount !== 0) {\r\n            this.canvas.reDrawBoard(this.board);\r\n            this.addScore(destroyedCount);\r\n            this.updateDetailView();\r\n        }\r\n\r\n        this.createNewRandomShape();\r\n    } else {\r\n        console.log(this.currentShape);\r\n        console.log(this.board);\r\n        clearInterval(window.gameInterval);\r\n    }\r\n};\r\n\r\n/**\r\n * Shape rotation process handler\r\n */\r\nGame.prototype.processRotation = function () {\r\n    let tempShape = this.currentShape.cloneTemporaryRotatedShape();\r\n    let tempShapeWidth = tempShape.matrix[0].length;\r\n\r\n    // Prevent making current shape outside the board after being rotated\r\n    if (this.currentShape.x + tempShapeWidth >= this.board.width) {\r\n        let xOffset = this.board.width - tempShapeWidth;\r\n        tempShape.setX(xOffset);\r\n    }\r\n\r\n    tempShape.destroy();\r\n    tempShape.initBlocks();\r\n\r\n    if (!this.board.isShapeCollapseOnPinnedBlock(tempShape)) {\r\n        this.currentShape.copyFrom(tempShape);\r\n    }\r\n};\r\n\r\n/**\r\n * Init game keyboard controller\r\n */\r\nGame.prototype.initController = function () {\r\n    window.addEventListener('keydown', (e) => {\r\n        this.canvas.clearShape(this.currentShape);\r\n        switch (e.keyCode) {\r\n            case 37: // left\r\n                if (!this.board.isShapeCollideLeft(this.currentShape)) {\r\n                    this.currentShape.goLeft();\r\n                }\r\n                break;\r\n            case 32: // Space - rotate\r\n                this.processRotation();\r\n                break;\r\n            case 39: // Right\r\n                if (!this.board.isShapeCollideRight(this.currentShape)) {\r\n                    this.currentShape.goRight();\r\n                }\r\n                break;\r\n            case 40: // Down\r\n                if (!this.board.isShapeCollideBottom(this.currentShape)) {\r\n                    this.currentShape.goBottom();\r\n                }\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n        this.canvas.drawShape(this.currentShape);\r\n    })\r\n};\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/game.js?");

/***/ }),

/***/ "./client/js/tetrisV2/shape/shape.js":
/*!*******************************************!*\
  !*** ./client/js/tetrisV2/shape/shape.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Block = __webpack_require__(/*! ../block */ \"./client/js/tetrisV2/block.js\");\r\n\r\n/**\r\n * Shape\r\n * @param {number} x - X coord\r\n * @param {number} y - Y coord\r\n */\r\nfunction Shape(x, y) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.direction = 0;\r\n    this.blueprint = null;\r\n    this.matrix = null;\r\n    this.color = 'black';\r\n    this.height = 0;\r\n    this.width = 0;\r\n    /**\r\n     * @var {Array<Block>}\r\n     */\r\n    this.blocks = [];\r\n}\r\n\r\n/**\r\n * Set X coord\r\n * @param {number} x - X coord\r\n */\r\nShape.prototype.setX = function (x) {\r\n    this.x = x;\r\n};\r\n\r\n/**\r\n * Calculate shape height and width\r\n */\r\nShape.prototype.calcHeightWidth = function () {\r\n    if (this.matrix === null) return;\r\n\r\n    this.height = this.matrix.length;\r\n    this.width = this.matrix[0].length;\r\n};\r\n\r\n/**\r\n * Set shape direction\r\n * @param {number} direction - Shape direction\r\n */\r\nShape.prototype.setDirection = function (direction) {\r\n    if (!this.blueprint) {\r\n        throw new Error('Blueprint must be set before setting Shape\\'s direction');\r\n    }\r\n    this.direction = (direction > this.blueprint.length - 1) ? 0 : direction;\r\n    this.matrix = this.blueprint[this.direction];\r\n};\r\n\r\n/**\r\n * Set shape blueprint\r\n * @param {number} blueprint - Shape blueprint\r\n */\r\nShape.prototype.setBlueprint = function (blueprint) {\r\n    this.blueprint = blueprint;\r\n};\r\n\r\n/**\r\n * Set color\r\n * @param {string} color - Shape color\r\n */\r\nShape.prototype.setColor = function (color) {\r\n    this.color = color;\r\n};\r\n\r\n/**\r\n * Set new matrix\r\n * @param {Array<Array<number>>} matrix - Shape matrix\r\n */\r\nShape.prototype.setMatrix = function (matrix) {\r\n    this.matrix = matrix;\r\n};\r\n\r\n/**\r\n * Destroy shape\r\n */\r\nShape.prototype.destroy = function () {\r\n    this.blocks = [];\r\n};\r\n\r\n/**\r\n * Init blocks in shape\r\n */\r\nShape.prototype.initBlocks = function () {\r\n    let matrix = this.matrix;\r\n\r\n    for (let _y = 0; _y < matrix.length; _y++) {\r\n        let yMatrix = matrix[_y];\r\n\r\n        for (let _x = 0; _x < yMatrix.length; _x++) {\r\n            let xMatrix = yMatrix[_x];\r\n            if (xMatrix === 1) {\r\n                let block = new Block(this.x + _x, this.y + _y, GAME_CONFIG.block.width, this.color);\r\n                this.blocks.push(block);\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\n/**\r\n * Shape goes left\r\n */\r\nShape.prototype.goLeft = function () {\r\n    this.x--;\r\n    this.blocks.forEach(block => {\r\n        block.goLeft();\r\n    });\r\n};\r\n\r\n/**\r\n * Shape goes right\r\n */\r\nShape.prototype.goRight = function () {\r\n    this.x++;\r\n    this.blocks.forEach(block => {\r\n        block.goRight();\r\n    });\r\n};\r\n\r\n/**\r\n * Shape goes down\r\n */\r\nShape.prototype.goBottom = function () {\r\n    this.y++;\r\n    this.blocks.forEach(block => {\r\n        block.goBottom();\r\n    });\r\n};\r\n\r\n/**\r\n * Rotate by math from left to right\r\n */\r\nShape.prototype.rotate = function () {\r\n    let tempShape = this.cloneTemporaryRotatedShape();\r\n    this.setMatrix(tempShape.matrix);\r\n    this.destroy();\r\n    this.initBlocks();\r\n};\r\n\r\n/**\r\n * Clone this shape\r\n * @returns {Shape} - Return a clone\r\n */\r\nShape.prototype.clone = function () {\r\n    let clone = new Shape(0, 0);\r\n    Object.getOwnPropertyNames(this).forEach(prop => {\r\n        clone[prop] = this[prop];\r\n    });\r\n    return clone;\r\n};\r\n\r\n/**\r\n * Copy a input shape to this shape\r\n * @param {Shape} shape - a shape\r\n */\r\nShape.prototype.copyFrom = function (shape) {\r\n    Object.getOwnPropertyNames(this).forEach(prop => {\r\n        if (shape && shape[prop]) {\r\n            this[prop] = shape[prop];\r\n        }\r\n    });\r\n};\r\n\r\n/**\r\n * Rotate and return a new temporary shape matrix\r\n * @returns {Shape} - A new temporary shape matrix\r\n */\r\nShape.prototype.cloneTemporaryRotatedShape = function () {\r\n    let oldWidth = this.matrix[0].length;\r\n    let oldHeight = this.matrix.length;\r\n    let newMatrix = Array.from({ length: oldWidth }, () => {\r\n        return Array(oldHeight).fill(0);\r\n    });\r\n\r\n    // New vertical loop, newHeight = oldWidth\r\n    for (let y = 0; y < oldWidth; y++) {\r\n        // New horizontal loop, newWidth = oldHeight\r\n        for (let x = 0; x < oldHeight; x++) {\r\n            let bottomToTopIdx = oldHeight - 1 - x;\r\n            newMatrix[y][bottomToTopIdx] = this.matrix[x][y];\r\n        }\r\n    }\r\n\r\n    let newShape = this.clone();\r\n    newShape.setMatrix(newMatrix);\r\n\r\n    return newShape;\r\n};\r\n\r\nmodule.exports = Shape;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/shape/shape.js?");

/***/ }),

/***/ "./client/js/tetrisV2/shape/shapeFactory.js":
/*!**************************************************!*\
  !*** ./client/js/tetrisV2/shape/shapeFactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst Shape = __webpack_require__(/*! ./shape */ \"./client/js/tetrisV2/shape/shape.js\");\r\nconst ShapeFactory = {};\r\n\r\n/**\r\n * Get matrix based on direction\r\n * @returns {Array<Array<number>>|null} - Return matrix\r\n */\r\nShapeFactory.getBlueprint = function (name) {\r\n    for (let idx = 0; idx < SHAPE_DATA.length; idx++) {\r\n        let shapeConfig = SHAPE_DATA[idx];\r\n        if (shapeConfig.name === name) {\r\n            return shapeConfig.blueprint;\r\n        }\r\n    }\r\n    return null;\r\n};\r\n\r\n/**\r\n * Get a shape\r\n * @param {number} x - X coord\r\n * @param {number} y - Y coord\r\n * @param {string} name - Shape name\r\n * @param {number} direction - Shape direction\r\n * @returns {Shape} - a Shape\r\n */\r\nShapeFactory.getShape = function (x, y, name, direction) {\r\n    let shapeBlueprint = ShapeFactory.getBlueprint(name);\r\n    let shape = new Shape(x, y);\r\n\r\n    shape.setBlueprint(shapeBlueprint);\r\n    shape.setDirection(direction);\r\n\r\n    let randomColor = GAME_CONFIG.block.colors.random();\r\n\r\n    shape.setColor(randomColor);\r\n    shape.initBlocks();\r\n\r\n    return shape;\r\n};\r\n\r\n/**\r\n * Get a random shape\r\n * @returns {Shape} - a Shape\r\n */\r\nShapeFactory.getRandomShape = function () {\r\n    let randomShapeConfig = SHAPE_DATA.random();\r\n    let shapeBlueprint = randomShapeConfig.blueprint;\r\n    let randomDirection = shapeBlueprint.randomIndex();\r\n    let randomColor = GAME_CONFIG.block.colors.random();\r\n    let maxWidthX = GAME_CONFIG.canvas.width / GAME_CONFIG.block.width;\r\n    let randomX = Math.floor(Math.random() * maxWidthX);\r\n    let shape = new Shape(randomX, -1);\r\n\r\n    shape.setBlueprint(shapeBlueprint);\r\n    shape.setDirection(randomDirection);\r\n    shape.calcHeightWidth();\r\n\r\n    if (randomX + shape.width >= maxWidthX) {\r\n        randomX = maxWidthX - shape.width;\r\n        shape.setX(randomX);\r\n    }\r\n\r\n    shape.setColor(randomColor);\r\n    shape.initBlocks();\r\n\r\n    return shape;\r\n};\r\n\r\nmodule.exports = ShapeFactory;\r\n\n\n//# sourceURL=webpack:///./client/js/tetrisV2/shape/shapeFactory.js?");

/***/ }),

/***/ "./data/tetrisV2/config.json":
/*!***********************************!*\
  !*** ./data/tetrisV2/config.json ***!
  \***********************************/
/*! exports provided: canvas, block, shapes, interval, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"canvas\\\":{\\\"width\\\":300,\\\"height\\\":400},\\\"block\\\":{\\\"width\\\":25,\\\"colors\\\":[\\\"black\\\",\\\"purple\\\",\\\"red\\\",\\\"blue\\\",\\\"green\\\",\\\"pink\\\"]},\\\"shapes\\\":[\\\"T\\\",\\\"L\\\",\\\"Square\\\",\\\"I\\\",\\\"S\\\"],\\\"interval\\\":500}\");\n\n//# sourceURL=webpack:///./data/tetrisV2/config.json?");

/***/ }),

/***/ "./data/tetrisV2/shape.json":
/*!**********************************!*\
  !*** ./data/tetrisV2/shape.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"T\\\",\\\"blueprint\\\":[[[0,1,0],[1,1,1]],[[0,1,0],[0,1,1],[0,1,0]],[[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]},{\\\"name\\\":\\\"L\\\",\\\"blueprint\\\":[[[1,0],[1,0],[1,1]],[[0,0,1],[1,1,1]],[[1,1],[0,1],[0,1]],[[1,1,1],[1,0,0]],[[0,1],[0,1],[1,1]],[[1,1,1],[0,0,1]],[[1,1],[1,0],[1,0]],[[1,0,0],[1,1,1]]]},{\\\"name\\\":\\\"Square\\\",\\\"blueprint\\\":[[[1,1],[1,1]]]},{\\\"name\\\":\\\"I\\\",\\\"blueprint\\\":[[[1],[1],[1],[1]],[[1,1,1,1]]]},{\\\"name\\\":\\\"S\\\",\\\"blueprint\\\":[[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]]]}]\");\n\n//# sourceURL=webpack:///./data/tetrisV2/shape.json?");

/***/ })

/******/ });