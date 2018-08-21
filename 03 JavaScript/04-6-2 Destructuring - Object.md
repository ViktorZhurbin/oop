## Разбор объектов

### Простой пример
```js
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// Объявление новых переменных
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

### Присвоение без объявления
```js
var a, b;

({a, b} = {a: 1, b: 2});
```

### Присвоение новых имен переменных
```js
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

### Значения по умолчанию
```js
var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

### Присвоение новых имен переменных со значениями по умолчанию
```js
var {a:aa = 10, b:bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

### Импорт модулей
```js
import { Loader, main } from 'toolkit/loader';
```

### Вложенный объект и разбор массива
```js
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

### Деструктурирование во время обхода
```js
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Получение полей объекта-параметра функции
```js
function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

### Деструктурирование вычисляемых имён свойств

Вычисляемые имена свойств, например, литералы объектов, могут использоваться при деструктурирующем присваивании:
```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```
