https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

## prototype

(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

Все объекты наследуют методы и свойства из прототипа объекта Object.prototype, хотя они и могут быть переопределены (исключение: Object.create(null) - Object с прототипом null).

Например, прототипы других конструкторов переопределяют свойство constructor и предоставляют свои собственные методы toString().

Изменения в объекте прототипа Object распространяются на все объекты до тех пор, пока свойства и методы, учитывающие эти изменения, не переопределяются дальше по цепочке прототипов.

В JS, строго говоря, нет объектов подклассов. Поэтому прототип является "обходным путём" для создания объекта "базового класса" из определённых функций, которые выступают в роли объектов. Например:

```js
var Person = function(name) {
    this.name = name;
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log('Привет, я ' + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log('Привет, я ' + this.name + ', ' + this.title);
        }
    };
};
Employee.prototype = new Person();

var Customer = function(name) {
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Боб', 'Строитель');
var joe = new Customer('Джо');
var rg = new Employee('Ред Грин', 'Разнорабочий');
var mike = new Customer('Майк');
var mime = new Mime('Мим');
bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();
```



