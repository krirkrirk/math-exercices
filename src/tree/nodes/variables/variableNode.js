"use strict";
exports.__esModule = true;
exports.VariableNode = void 0;
var node_1 = require("../node");
var VariableNode = /** @class */ (function () {
    function VariableNode(tex) {
        this.id = "variable";
        this.leftChild = null;
        this.rightChild = null;
        if (tex.length !== 1 || !tex.match("[a-zA-Z]"))
            throw Error("variable must be a letter");
        this.tex = tex;
        this.type = node_1.NodeType.variable;
    }
    VariableNode.prototype.toString = function () {
        return "".concat(this.tex);
    };
    return VariableNode;
}());
exports.VariableNode = VariableNode;
