## Определение класса

(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
(https://eloquentjavascript.net/06_object.html#h_7RhGr+474h)

Класс в JS - это особая функция (прототип). Поэтому так же, как у функций, классы можно определять через объявление (declaration) или выражение (expression). Важное отличие: объявление класса, в отличие от объявления функции, не поднимается (not hoisted).

В JS производный класс - это НЕ независимая копия родительского класса. Первый связан с последним через prototype. Изменения в prototype передаются производным классам после инициализации.

### class declaration (объявление класса).

```js
class Person {
  constructor(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }
}

let person1 = new Person('Bob');
```

### class expression (выражение класса).

```js
// именованный
// имя класса находится в локальной области видимости класса.
const Person = class Person {
  constructor(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }
}

// анонимный класс
const Person = class {
  constructor(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }
}
```


**В теле класса действует *strict mode*.**

### Подклассы
`extends` создаёт подкласс, который наследует свойства суперкласса.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```


### Constructor

```js
class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'classy';
    }
    prototypeMethod() {
        return 'prototypical';
    }
}
const foo = new Foo(123);
```

При создании нового объекта в первую очередь выполняется вызов конструктора.

`constructor` — специальный метод, необходимый для создания и инициализации объектов, созданных с помощью класса.

Собственно, `constructor` определяет функцию, которая представляет класс:
```js
> Foo === Foo.prototype.constructor
true
> typeof Foo
'function'
```

Ключевое слово `super` можно использовать для вызова конструктора родительского класса, чтобы использовать свойства последнего.

Прежде, чем использовать `this` в конструкторе, нужно вызвать `super`


#### Конструктор по умолчанию

Если конструктор не указан для класса-родителя, по умолчанию используется `constructor() {}`.

Если конструктор не указан для класса-родителя, по умолчанию используется

```js
constructor(...args) {
    super(...args);
}
```


### Свойства и методы прототипа

Собственно, те методы и свойства, которые наследуются подклассами.


### instanceof

Бинарный оператор `instanceof` помогает определить, является ли класс наследником другого класса:
```js
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // → true
console.log(new SymmetricMatrix(2) instanceof Matrix); // → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);  // → false
console.log([1] instanceof Array); // → true




