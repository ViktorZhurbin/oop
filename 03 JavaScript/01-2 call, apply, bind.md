## Метод bind

В ES5 появился метод bind.

`fn.bind(someObj)`
1) копирует функцию
2) привязывает `this` к первому аргументу `bind` не зависимо от того, как вызывается функция
```js
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(),o.f(), o.g(), o.h()); // 37,37, azerty, azerty
```


## Методы `call()` и `apply()`
MDN: [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

`call` и `apply` передают значение `this` из одного контекста в другой.

---
**Примечание**: хотя синтаксис этой функции практически полностью идентичен функции `apply()`, фундаментальное различие между ними заключается в том, что функция `call()` принимает **список аргументов**, в то время, как функция `apply()`- **одиночный массив аргументов**.

---


### `call()`

Метод `call()` вызывает функцию с указанным значением `this` и индивидуально предоставленными аргументами.

```js
function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2
```

```js
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Нельзя создать продукт ' +
      this.name + ' с отрицательной ценой');
  }

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'еда';
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'игрушка';
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('фета', 5);
var fun = new Toy('робот', 40);
```


### `apply()`

Метод `apply()` вызывает функцию с указанным значением `this` и аргументами, предоставленными в виде массива (либо массивоподобного объекта).

```js
var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
```
