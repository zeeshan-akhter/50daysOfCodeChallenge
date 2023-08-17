// 1. Given an object:

// ```jsx
var electronicPrototype = {
  powerOn: function () {
    console.log("Power on");
  },
};
// ```

// Create a **`computer`** object that inherits from **`electronicPrototype`** and print the result of the **`powerOn`** method.

const computer = Object.create(electronicPrototype);
computer.powerOn();
