// 1. Given an object:

// ```jsx
var personPrototype = {
  introduce: function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

// ```

// Create a `student` object that inherits from `personPrototype`, set its `name` and `age` properties, and print the result of the `introduce` method.

var student = Object.create(personPrototype);
student.name = "Zeeshan";
student.age = 21;
student.introduce();
