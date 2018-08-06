https://stackoverflow.com/a/13041474/4819463

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


### Конструктор

В JavaScript конструктор — это просто функция. Единственным отличием конструктора от обычной функции является способ вызова с оператором `new`.

Любая функция, вызванная с `new`, работает как конструктор. Без `new` функция работает как обычно (вызов конструктора без new добавляет свойства к объекту, внутри которого происходит вызов).

При вызове функции с оператором `new` выполняется четыре действия:

1. Создание объекта.
2. Назначение нового объекта переменной `this` конструктора (после чего `this` указывает на новый объект).
3. Выполнение кода внутри конструктора (добавление свойств к новому объекту).
4. Вовращение нового объекта.


```js
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertexes.push(v);
  }
}

var g = new Graph();
// объект 'g' имеет собственные свойства 'vertexes' и 'edges'.
// g.[[Prototype]] принимает значение Graph.prototype при выполнении new Graph().
```



### Object.create()

В ECMAScript 5 представлен новый метод создания объектов: Object.create. Прототип создаваемого объекта указывается в первом аргументе этого метода:

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (унаследовано)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// hasOwnProperty показывает, есть ли свойство у самого объекта или же наследуется
// undefined, т.к. 'd' не наследуется от Object.prototype
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MTYyMjM2NzBdfQ==
-->