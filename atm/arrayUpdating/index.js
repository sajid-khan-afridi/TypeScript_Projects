const Array_obj = [
  { id: 0, name: "David" },

  { id: 1, name: "John" },
];
upd_obj = Array_obj.findIndex((obj) => obj.id == 0);
console.log("Before Object Updation: ", Array_obj[upd_obj]);

Array_obj[upd_obj].name = "Harry";
console.log("After Object Updation: ", Array_obj[upd_obj]);
