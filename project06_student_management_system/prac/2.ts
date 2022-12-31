class Student {
  name: string;
  id: string;
  enrollmentDate: Date;

  constructor(name: string, id: string, enrollmentDate: Date) {
    this.name = name;
    this.id = id;
    this.enrollmentDate = enrollmentDate;
  }

  enrollInCourse(course: Course): void {
    // code to enroll student in course
  }

  checkGrades(): void {
    // code to check student's grades
  }
}
class Course {
  name: string;
  instructor: string;
  creditHours: number;
  students: Student[];

  constructor(name: string, instructor: string, creditHours: number) {
    this.name = name;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.students = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  removeStudent(student: Student): void {
    this.students = this.students.filter((s) => s !== student);
  }
}
class StudentManagementSystem {
  students: Student[];
  courses: Course[];

  constructor() {
    this.students = [];
    this.courses = [];
  }

  enrollStudentInCourse(student: Student, course: Course): void {
    student.enrollInCourse(course);
    course.addStudent(student);
  }

  checkStudentGrades(student: Student): void {
    student.checkGrades();
  }

  generateReport(): void {
    // code to generate report
  }
}
