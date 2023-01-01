interface Person {
  firstName: string;
  lastName: string;
}
class Student implements Person {
  id: number;
  firstName: string;
  lastName: string;
  courses: Course[] = [];
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  registerForCourse(course: Course) {
    this.courses.push(course);
  }
}

class Course {
  name: string;
  student: Student[] = [];
  instructor!: string;
  constructor(name: string, instructor: string) {
    this.name = name;
    this.instructor = instructor;
  }
  // addInstructor(instructor: string) {
  //   this.instructor = instructor;
  // }
  // addStudent(student: Student) {
  //   this.student.push(student);
  // }
}

class StudentManagementSystem {
  students: Student[] = [];
  courses: Course[] = [];
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
const stuObj = new Student(1, "sajid", "afridi");
stuObj.registerForCourse;
const crsObj = new Course("Metaverse", "Sir Zia");
