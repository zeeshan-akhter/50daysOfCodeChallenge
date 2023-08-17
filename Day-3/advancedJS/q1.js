// 1. Given an object:

// ```jsx
// var vehiclePrototype = {
//   startEngine: function() {
//     console.log("Engine started");
//   }
// };

// ```

// Create a `car` object that inherits from `vehiclePrototype` and print the result of the `startEngine` method.

var vehiclePrototype = {
  startEngine: function () {
    console.log("Engine started");
  },
};

const car = Object.create(vehiclePrototype);
car.startEngine();
