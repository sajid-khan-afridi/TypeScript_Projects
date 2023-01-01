class Student {
  id: number;
  name: string;
  courses: Course[] = [];
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
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
  addStudent(student: Student) {
    this.student.push(student);
  }
}
