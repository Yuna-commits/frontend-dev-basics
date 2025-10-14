/**
 * Array 확장 (prototype 기반 확장)
 */
Array.prototype.remove = function (index) {
  this.splice(index, 1);
};

Array.prototype.insert = function (index, value) {
  if (value instanceof Array) {
    // for (var i = 0; i < value.length; i++) {
    //   this.splice(index + i, 0, value[i]);
    // }

    // error : this.splice is not a function
    // callback 함수에서의 this는 어휘상의 this([1, 3, 4])와 일치 x
    // value.forEach(function (element) {
    //   this.splice(index++, 0, element);
    // });

    // 해결 1
    // var _this = this;
    // value.forEach(function (element) {
    //   _this.splice(index++, 0, element);
    // });

    // 해결 2
    value.forEach(
      function (element) {
        this.splice(index++, 0, element);
      }.bind(this) // this : [1, 3, 4]
    );
  } else {
    this.splice(index, 0, value);
  }
};

// Test
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(1);
console.log(a);

a.insert(2, ["a", "b", "c"]);
console.log(a); // [1, 3, "a", "b", "c", 4]
