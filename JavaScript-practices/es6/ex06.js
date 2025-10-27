/**
 * class
 */
console.log("===== [01] class 문법 지원");
class Rect {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`React(w=${this.w}, h=${this.h})`);
    }
}

// test
const react1 = new Rect(10, 20);
const react2 = new Rect(100, 200);
react1.draw(); // React(w=10, h=20)
react2.draw(); //React(w=100, h=200)

console.log("===== [02] 비교: prototype 기반");
// 클래스 문법 내부 처리 동작
const Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};
Circle.prototype.draw = function () {
    console.log(`Circle(x=${this.x}, y=${this.y}, radius=${this.radius})`);
};

const circle = new Circle();
circle.draw();

console.log("===== [03] 상속 지원");
class Shape {
    constructor(fillColor, lineColor) {
        this.fillColor = fillColor;
        this.lineColor = lineColor;
    }

    draw() {
        console.log("구현할 수 없습니다.");
    }
}

class RectTriangle extends Shape {
    constructor(w, h, fillColor, lineColor) {
        super(fillColor, lineColor);

        this.w = w;
        this.h = h;
    }

    // @Override
    draw() {
        console.log(
            `RectTriangle(w=${this.w}, h=${this.h}, fillColor=${this.fillColor}, lineColor=${this.lineColor})`
        );
    }
}

const shape1 = new RectTriangle(10, 20, "red", "black");
shape1.draw();
