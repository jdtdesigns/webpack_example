// const sayHello = require('./lib/sayHello');
// ESM Version
import sayHello from './lib/sayHello';
import { outputLogo } from './lib/outputLogo';
import './styles/main.css';

// Some comment
// sayHello();

outputLogo();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const jd = new Person('JD', 43);

console.log(jd);


