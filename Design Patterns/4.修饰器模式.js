// 装饰器模式
function Car() {
  this.price = 10;
}

function carWithHeatSeat(carClass) {
  carClass.hasHeatSeat = true;
  carClass.price += 2;
}

function carWithAutoMirror(carClass) {
  carClass.hasAutoMirror = true;
  carClass.price += 0.8;
}

const car = new Car();

carWithHeatSeat(car);
console.log(car.price);
carWithAutoMirror(car);
console.log(car.price);
