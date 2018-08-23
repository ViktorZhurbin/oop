interface Named {
  name: string;
}

let x: Named;
// выведенный тип для y — { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;


class Cat {
  eat() {}
  drink() {}
}

class CatA extends Cat {}
class CatB extends Cat {}

class CatFeeder {
  water() {
    return 'Drink';
  }
}

class CatAFeeder extends CatFeeder {
  static feed(cat: Cat) {
    return cat instanceof CatB
      ? 'a'
      : 'meh'
  }
}

class CatBFeeder extends CatFeeder {
  static feed(cat: Cat) {
    return cat instanceof CatB
      ? 'b'
      : 'meh'
    }
}

const cat1 = new CatA;
const cat2 = new CatB;

CatBFeeder.feed(cat1)


//
const meat = { feed() { return 'meat' }}
const grass = { feed() { return 'grass' }}
const water = { water() { return 'water' }}

const CatAFeeder2 = () => (
  Object.assign({}, meat, water)
)
