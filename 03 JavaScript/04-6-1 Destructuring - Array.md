## Деструктурирующее присваивание

Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

```js
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]
```

## Разбор массивов

### Простой пример
```js
var foo = ["one", "two", "three"];

// без деструктурирования
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// с деструктурированием
var [one, two, three] = foo;
```

### Обмен значений переменных

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
// b === 1, a === 3
```

### Разбор массива, возвращаемого функцией

```js
function f() {
  return [1, 3];
}

var [a, b] = f();
console.log("A is " + a + " B is " + b);
// a будет 1, b будет 2
```

### Игнорирование некоторых значений

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log("A is " + a + " B is " + b);
// a будет 1, b будет 3. Значение 2 игнорируется.
```

### Присвоение оставшихся значений массива переменной
```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

### Получение значений из результата регулярного выражения

```js
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // выведет "https:"
```
