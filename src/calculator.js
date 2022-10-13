module.exports = class Calculator {
  value = 0;

  add(v) {
    // code here
    this.value = v + this.value;
  }

  minus(v) {
    // code here
    this.value = this.value - v;
  }

  multiple(v) {
    // code here
    this.value = this.value * v;
  }

  divide(v) {
    // code here
    this.value = this.value / v;
  }

  reset() {
    // code here
    this.value = 0;
  }

  equal() {
    // return value here so that it goes back to user
    return this.value;
  }
};
