class Student {
  firstName: string;
  lastName: string;
  studentId: number;

  constructor(firstName: string, lastName: string, studentId: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getId(): number {
    return this.studentId;
  }
}
const s = new Student("John", "Doe", 123456);
console.log(s.getFullName()); // prints "John Doe"
console.log(s.getId()); // prints 123456

class StudentManager {
  addStudent() {}
  removeStudent() {}
  getStudent() {}
}
// You can define the Course and StudentManager classes in a similar way. The StudentManager class might have methods like addStudent() and removeStudent() to add and remove students from the system, and getStudents() to retrieve a list of all the students.
