https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

## prototype

Почти все объекты в JS являются экземплярами `Object` и наследуют методы и свойства `Object.prototype`.

Исключение:
```js
// Object с прототипом null
var o = Object.create(null);
```

Методы и свойства могут быть переопределены. Например, прототипы других конструкторов переопределяют свойство `constructor`.

Изменения в объекте прототипа `Object` распространяются на все объекты до тех пор, пока свойства и методы, учитывающие эти изменения, не переопределяются дальше по цепочке прототипов. Это мощный (но потенциально опасный) механизм, который позволяет переопределять и расширять поведение объекта.

В JS, строго говоря, нет объектов подклассов. Поэтому прототип является удобным "обходным путём" для создания объекта "базового класса" из определённых функций, которые выступают в роли объектов. Например:

```js
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();

```



