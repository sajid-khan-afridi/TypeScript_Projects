// https://linuxhint.com/update-object-in-javascript/
const Array_obj = [
  { id: 0, name: "David" },

  { id: 1, name: "John" },
  { id: 2, name: "brad" },
];
upd_obj = Array_obj.findIndex((obj) => obj.id == 2);
console.log(upd_obj);
console.log("Before Object Updation: ", Array_obj[upd_obj]);

Array_obj[upd_obj].name = "Harry";
console.log("After Object Updation: ", Array_obj[upd_obj]);
