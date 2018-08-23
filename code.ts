window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
};

window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.button);  //<- Now, no error is given
};


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
