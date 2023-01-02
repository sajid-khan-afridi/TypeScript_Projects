interface Person {
  firstName: string;
  lastName: string;
}
class Student implements Person {
  id: number;
  firstName: string;
  lastName: string;
  balance: number;
  courses: Course[] = [];
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    balance: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }
  registerForCourse(course: Course) {
    this.courses.push(course);
  }
}

interface CourseInterface {}

class Course {
  name: string;
  student: Student[] = [];
  instructor!: string;
  cost: number;
  constructor(name: string, instructor: string, cost: number) {
    this.name = name;
    this.instructor = instructor;
    this.cost = cost;
  }
  // addInstructor(instructor: string) {
  //   this.instructor = instructor;
  // }
  addStudent(student: Student) {
    this.student.push(student);
  }
}

class StudentManagementSystem {
  students: Student[] = [];
  courses: Course[] = [];
  // balance: number;

  constructor(student: Student, course: Course) {
    this.students.push(student);
    this.courses.push(course);
  }
  enroll(student: Student, course: Course): void {
    // Enroll the student in the course
  }

  viewBalance(student: Student): number {
    // View the balance of the student
  }

  payTuition(student: Student, amount: number): void {
    // Pay the tuition fees for the student
  }

  showStatus(student: Student): void {
    // Show the status of the student, including name, id, courses, and balance
  }
}
const stuObj1 = new Student(1, "sajid", "afridi", 50000);
const crsObj1 = new Course("Metaverse", "Sir Zia", 12000);
const crsObj2 = new Course("Block Chain", "Sir Daniyal", 12000);
stuObj1.registerForCourse(crsObj1);
stuObj1.registerForCourse(crsObj2);
crsObj1.addStudent(stuObj1);
