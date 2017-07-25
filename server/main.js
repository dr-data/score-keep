import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {
  	constructor(name, age, title) {
  		super(name, age);
  		this.title = title;
  	}
  	getGreeting (){
  		if (this.title) {
  			return 'path1 ' + `Hi! Iam ${this.name}. I work as a ${this.title}`

  		} else {
  			return 'path2 ' + super.getPersonDescription();

  		}
  	}
  	hasJob (){
  		return !!this.title;
  	} 
  }

   class Programmer extends Person {
   		constructor(name, age, language = 'assembly') {
   			super(name, age);
   			this.language = language;
   		}
   		getGreeting (){
   			if (this.language) {
   				return `Hi! Iam ${this.name}. I am a ${this.language} developer.`;
   			} else {
   				return super.getGreeting();
   			}
   		}
  }


  let me = new Employee('Mike', 26, 'db admin', 'assembly');
  console.log(me.getGreeting());
  console.log(me.getGreeting());
  console.log('has Job:' + me.hasJob());

  let person = new Employee('Andrew');
  console.log(person.getPersonDescription());
  console.log(person.hasJob());
  console.log(person.getGreeting());

  let userOne = new Programmer(q	);
   console.log(userOne.getGreeting());

});
