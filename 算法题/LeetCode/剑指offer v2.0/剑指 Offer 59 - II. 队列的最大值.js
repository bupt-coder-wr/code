var MaxQueue = function () {
  this.queue = [];
  this.maxValue = [];
};

MaxQueue.prototype.max_value = function () {
  return this.maxValue.length ? this.maxValue[0] : -1;
};

MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);

  if (this.queue.length > 1) {
    this.maxValue.push(value);
    if (value > this.maxValue[0]) {
      this.maxValue.fill(value);
    }
  } else {
    this.maxValue.push(value);
  }
};
MaxQueue.prototype.pop_front = function () {
  if (this.maxValue.length) {
    this.maxValue.shift();
  }
  return this.queue.length ? this.queue.shift() : -1;
};

let q = new MaxQueue();
q.push_back(1);
q.push_back(2);
q.push_back(3);
