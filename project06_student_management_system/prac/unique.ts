function uniqueNumber() {
  var date = Date.now();

  // if (date <= uniqueNumber.previous) {
  //   date = ++uniqueNumber.previous;
  // } else {
  //   uniqueNumber.previous = date;
  // }
  // You can use the Date object's toString() or toLocaleString() methods to convert the time to a human-readable string.
  return date;
}

uniqueNumber.previous = 0;

// function ID() {
//   return uniqueNumber();
// }
console.log(uniqueNumber());
