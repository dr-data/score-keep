import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup (() => {
  class Person{
    constructor(name = 'Anomymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      // Hi! I am Andrew.
      //return 'Hi! Iam' + this.name +'.';
      return `Hi! I am ${this.name}.`;
    }
    getAge(){
      return `Hi! I am ${this.name} is ${this.age} year (s) old.`
    }
  }
  // let me = new Person('mike');
  // console.log(me.getAge());

  let me = new Person('Andrew', 25);
  console.log(me.getAge());
});
