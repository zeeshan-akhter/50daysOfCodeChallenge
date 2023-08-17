// 1. Given an object:

// ```jsx
var shapePrototype = {
  area: function () {
    return 0;
  },
};

// ```

// Create a `circle` object that inherits from `shapePrototype`, set its `radius` property, and print the result of the `area` method.

var circle = Object.create(shapePrototype);
circle.radius = 10;

circle.area = function () {
  return Math.PI * this.radius * this.radius;
};

console.log(circle.area());
