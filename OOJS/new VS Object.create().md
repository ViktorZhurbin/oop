https://stackoverflow.com/a/13041474/4819463

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


### Конструктор

В JavaScript "конструктор" — это "просто" функция, вызываемая с оператором new.

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
// undefined, т.к. 'd' не наследуется от Object.prototype
```