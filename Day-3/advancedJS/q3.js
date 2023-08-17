// 1. Given an object:

// ```jsx
var animalPrototype = {
  makeSound: function () {
    console.log(this.sound);
  },
};
// ```

// Create a `cat` object that inherits from the `animalPrototype` and print the result of `makeSound` method.

const cat = Object.create(animalPrototype);
cat.sound = "meow";

cat.makeSound();
