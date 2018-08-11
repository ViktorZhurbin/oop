##  __proto__

(https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

`__proto__` - это свойство доступа (комбинация геттера и сеттера) объекта Object.prototype. Оно расширяет внутренний прототип `[[Prototype]]` объекта (являющийся объектом или null), через который осуществлялся доступ.

Изменение прототипа `[[Prototype]]` объекта является очень медленной операцией. Если вы заботитесь о производительности, вы никогда не должны изменять прототип `[[Prototype]]` объекта. Вместо этого создайте объект с нужным прототипом `[[Prototype]]`, с помощью метода Object.create().

Свойство `__proto__` было стандартизировано в es6 как устаревшая фича, просто чтобы обеспечить совместимость для веб-браузеров. Вместо него лучше использщовать `Object.getPrototypeOf` и `Object.setPrototypeOf` (они тоже медленные).

```js
var Circle = function () {};
var shape = {};
var circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === circle); // true
```

Свойство `__proto__` будет найдено, если, в конечном итоге, его поиск пройдёт через `Object.prototype`, но при доступе к нему не через `Object.prototype`, оно найдено не будет.

```js
var noProto = Object.create(null);

console.log(typeof noProto.__proto__); // undefined
console.log(Object.getPrototypeOf(noProto)); // null

noProto.__proto__ = 17;

console.log(noProto.__proto__); // 17

// свойство __proto__ найдено до просмотрна Object.prototype
console.log(Object.getPrototypeOf(noProto)); // null
```

Геттер свойства `__proto__` расширяет значение внутреннего прототипа `[[Prototype]]` объекта. Для объектов, созданных с использованием литеральной формы, это значение равно Object.prototype. Для функций это значение равно Function.prototype и т.д.

```js
var protoHidden = {};
Object.defineProperty(protoHidden, '__proto__',
                      { value: 42, writable: true, configurable: true, enumerable: true });

console.log(protoHidden.__proto__); // 42
console.log(Object.getPrototypeOf(protoHidden) === Object.prototype); // true
```