var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.addEventListener('DOMContentLoaded', function () {
    var square = document.getElementById('square');
    var circle = document.getElementById('circle');
    var rectangle = document.getElementById('rectangle');
    var triangle = document.getElementById('triangle');
    var shapeContainer = document.getElementById('screen');
    var userValue = document.getElementById("myValue").value;
    // shape class
    var Shape = /** @class */ (function () {
        function Shape() {
            this.div = document.createElement('div');
            this.div.addEventListener('click', function () {
                //Clicking on any shape should call a method named describe(), which should update the statistics in the sidepanel in index.html    
                // describe();
            });
            this.div.addEventListener('dblclick', function () {
                //Double clicking on any shape should remove the shape from the screen
                this.remove();
            });
        }
        Shape.prototype.draw = function (id) {
            shapeContainer.appendChild(this.div);
        };
        return Shape;
    }());
    // square class
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square() {
            var _this = _super.call(this) || this;
            _this.div.id = "square-shape";
            _this.div.style.height = userValue + "px";
            _this.div.style.width = userValue + "px";
            return _this;
        }
        return Square;
    }(Shape));
    // square button
    square.addEventListener("click", function () {
        var newSquare = new Square;
        newSquare.draw("square-shape");
    });
    // function getRandomPosition(div) {
    //     for(var i = 0; i < 6; i++) {
    //         [Math.floor(Math.random() * )]
    //     }
    // }
    // circle class
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            var _this = _super.call(this) || this;
            _this.div.id = "circle-shape";
            _this.radius = 0;
            return _this;
        }
        return Circle;
    }(Shape));
    // triangle class
    var Triangle = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle() {
            var _this = _super.call(this) || this;
            _this.div.id = "triangle-shape";
            _this.height;
            return _this;
        }
        return Triangle;
    }(Shape));
    // rectangle class
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            var _this = _super.call(this) || this;
            _this.width;
            _this.height;
            _this.div.id;
            return _this;
        }
        return Rectangle;
    }(Shape));
    circle.addEventListener("click", function () {
        var newCircle = new Circle;
        newCircle.draw("circle-shape");
    });
    // triangle.addEventListener("click", ()=>{
    //     let newTriangle = new Triangle;
    //     newTriangle.draw("triangle-shape");
    // });
    // rectangle.addEventListener("click", ()=>{
    //     let newRectangle = new Rectangle;
    //     newRectangle.draw("rectangle-shape");
    // });
});
