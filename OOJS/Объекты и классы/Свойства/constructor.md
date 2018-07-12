## Сводка

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

У каждой функции-конструктора есть свойство `prototype`, значение котрого представляет собой объект со свойством `constructor`.

`constructor` возвращает ссылку на определение исходной функции-конструктора.


```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.first = first;
  this.last = last;
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
var person2 = Object.create(person1);

person1.valueOf()
// -> Person {first: "Bob", last: "Smith"}

// Both return the same
person1.constructor
person2.constructor
  /* Person(first, last, age, gender, interests) {
       // property and method definitions
       this.first = first;
       this.last = last;
    }
  */
```

`constructor` можно использовать как функцию, чтобы создать новый инстанс от того же конструктора. Это может пригодится, когда нет прямой ссылки на исходный конструктор.

```js
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
```