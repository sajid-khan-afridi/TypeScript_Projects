import inquirer from "inquirer";

class Student {
  id!: number;
  name!: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
class Course {
  name: string;
  instructor: string;
  students: Student[];

  constructor(name: string, instructor: string) {
    this.name = name;
    this.instructor = instructor;
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

  constructor(students: Student, courses: Course) {
    this.students = [];
    this.courses = [];
  }

  enrollStudentInCourse(student: Student, course: Course): void {
    student.enrollInCourse(course);
    course.addStudent(student);
  }
}
