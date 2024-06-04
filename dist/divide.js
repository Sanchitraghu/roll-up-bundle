function divide(a, b) {
  return a / b;
}
function divideAndAdd(a, b) {
  const result = a / b;
  return result + b + a;
}

export { divide as default, divideAndAdd };
