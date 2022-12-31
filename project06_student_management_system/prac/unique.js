function uniqueNumber() {
    var date = Date.now();
    // if (date <= uniqueNumber.previous) {
    //   date = ++uniqueNumber.previous;
    // } else {
    //   uniqueNumber.previous = date;
    // }
    return date;
}
uniqueNumber.previous = 0;
// function ID() {
//   return uniqueNumber();
// }
console.log(uniqueNumber());
