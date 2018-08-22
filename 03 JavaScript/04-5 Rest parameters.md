## Синтаксис оставшихся параметров функции

`rest` представляет оставшиеся параметры функции в виде одного массива.
```js
var [c, ...m] = [1,2,3,4,5]; // m -> [2,3,4,5]
// Here ...m is a collector, it collects the rest of the parameters.

// Internally when we write:
var [c, ...m] = [1,2,3,4,5];
// JavaScript does following
var c = 1,
    m = [2, 3, 4, 5];
```

```js
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10
```

Если последний именованный аргумент функции имеет префикс `...`, то он автоматически становится массивом с элементами от 0 до `theArgs.length` в соответствии с актуальным количеством аргументов, переданных в функцию.

```js
// theArgs будет содержать третий и последующие аргументы функции,
// потому как первый будет присвоен a, а второй b.
function(a, b, ...theArgs) {
  // ...
}
```

Используется для деструктуризации массивов и объектов.

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)
```

В некотором смысле, `rest` является противоположностью `spread`: `spread` 'раскрывает' массив, в то время как `rest` собирает множество элементов внутрь одного массива.
