interface Student {
  name: string;
  id: string;
  courses: Course[];
  balance: number;

  generateId(): string;
}

interface Course {
  name: string;
  id: string;
  cost: number;
}

class StudentManagementSystem {
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

function main(): void {
  // Create instances of the Student and Course interfaces
  const student1: Student = {
    name: "John Doe",
    id: "",
    courses: [],
    balance: 0,

    generateId(): string {
      // Generate a unique 5-digit id for the student
    },
  };
  const course1: Course = {
    name: "Computer Science 101",
    id: "CS101",
    cost: 1000,
  };

  // Create an instance of the StudentManagementSystem class
  const sms = new StudentManagementSystem();

  // Enroll the student in the course
  sms.enroll(student1, course1);

  // View the balance of the student
  const balance = sms.viewBalance(student1);
  console.log(`Balance: ${balance}`);

  // Pay the tuition fees for the student
  sms.payTuition(student1, 1000);

  // Show the status of the student
  sms.showStatus(student1);
}

main();
