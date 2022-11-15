"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Affine = exports.AffineConstructor = void 0;
var rational_1 = require("../numbers/rationals/rational");
var intervals_1 = require("../sets/intervals/intervals");
var polynomial_1 = require("./polynomial");
var AffineConstructor = /** @class */ (function () {
    function AffineConstructor() {
    }
    AffineConstructor.random = function (intervalA, intervalB) {
        if (intervalA === void 0) { intervalA = new intervals_1.Interval("[[-10; 10]]"); }
        if (intervalB === void 0) { intervalB = new intervals_1.Interval("[[-10; 10]]"); }
        var a = intervalA.getRandomElement();
        var b = intervalB.getRandomElement();
        return new Affine(a, b);
    };
    AffineConstructor.differentRandoms = function (nb, intervalA, intervalB) {
        if (intervalA === void 0) { intervalA = new intervals_1.Interval("[[-10; 10]]"); }
        if (intervalB === void 0) { intervalB = new intervals_1.Interval("[[-10; 10]]"); }
        var res = [];
        var _loop_1 = function (i) {
            var aff;
            do {
                aff = AffineConstructor.random(intervalA, intervalB);
            } while (res.some(function (affine) { return affine.equals(aff); }));
            res.push(aff);
        };
        for (var i = 0; i < nb; i++) {
            _loop_1(i);
        }
        return res;
    };
    return AffineConstructor;
}());
exports.AffineConstructor = AffineConstructor;
var Affine = /** @class */ (function (_super) {
    __extends(Affine, _super);
    function Affine(a, b, variable) {
        if (variable === void 0) { variable = "x"; }
        var _this = _super.call(this, [b, a], variable) || this;
        _this.a = a;
        _this.b = b;
        _this.variable = variable;
        return _this;
    }
    Affine.prototype.getRoot = function () {
        return new rational_1.Rational(-this.b, this.a).simplify().toTex();
    };
    return Affine;
}(polynomial_1.Polynomial));
exports.Affine = Affine;