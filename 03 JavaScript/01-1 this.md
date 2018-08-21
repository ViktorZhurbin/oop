## Ключевое слово `this` (контекст)

- [x] https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/
- [x] Eloquent JS
https://eloquentjavascript.net/06_object.html#h_fkrGgDyRWc
- [ ] [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ ] YDKJS - this & Object prototypes

#### Как определить, к чему относится `this`:
1. Определить, где вызвана функция.

2. Функция вызвана как метод объекта?
	`this` относится к объекту слева от точки.
	Если нет, то =>

3. Функция вызвана с `call`, `apply`, или `bind`?
	Объект будет явно обозначен в них.
	Если нет, то =>

4. Функция вызвана с `new`?
	`this` относится к новому объекту, который создал интерпретатор JS.
	Если нет, то =>

5. Функция вызвана в “strict mode”?
	`this` не определено.
	Если нет, то =>

6. JavaScript странный и в этом случае `this` относится к объекту `window`.

---
### Метод объекта

При вызове функции как метода объекта `this` принимает значение этого объекта.
```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```
Место определения функции не имеет значения:
```js
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```
Важно только то, что функция вызвана из свойства `f` объекта `o`.

Привязка `this` обусловлена только ближайшей ссылкой на объект или свойство. В следующем примере мы вызываем функцию как метод `g` объекта `o.b`. Во время выполнения `this` внутри функции будет ссылаться на `o.b`. То, что объект является членом объекта `o`, не имеет значения - важна только ближайшая ссылка.
```js
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

В глобальном контексте `this` всегда относится к глобальному объекту.
```js
this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```
Внутри функции значение `this` зависит от того, как функция была вызвана.


### В стрелочной функции

В стрелочной функции `this` привязан к окружению, в котором была создана функция. В глобальной области видимости, `this` будет указывать на глобальный объект.
```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```
`this` функции `foo()` будет всегда указывать на глобальный объект (значение при создании), даже если функция будет вызвана как метод объекта или с использованием `call`, `apply`, '`bind`.

То же самое касается стрелочных функций созданных внутри других функций: их `this` будет привязан к окружению.
```js
// Создаем объект obj с методом bar,
// который возвращает функцию, которая возвращает свой this.
var obj = {
  bar: function() {
          var x = (() => this);
          return x;
        }
};
// Возвращаемая функция - стрелочная,
// поэтому ее this навсегда привязан к значению this родительской функции.
// Значение bar можно задать при вызове, что устанавливает значение возвращаемой функции

// Вызываем bar как метод объекта obj, устанавливая его this на obj
// Присваиваем fn ссылку на возвращаемую функцию
var fn = obj.bar();

// Вызываем fn не устанавливая this, что в обычных функциях указывало бы
// на глобальный объект или undefined в строгом режиме.
console.log(fn() === obj); // true
```
В примере выше функция А, присвоенная `obj.bar`, возвращает стрелочную функцию В. В результате вызова A, `this` функции B замкнут на `this` функции A (= `obj.bar`). У `this` функции B всегда будет то значение, которое он получил при создании.
```js
// Будьте внимательны, используя метод без вызова
var fn2 = obj.bar;
// В этом случае this стрелочной функции равен window,
// потому что он отслеживает this из bar
console.log(fn2()() == window); // true
```

### Простой вызов
Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.
```js
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === global; // true
```

In *strict mode*, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, this will default to undefined:
```js
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```
