// 0x04-TypeScript/task_1/js/main.ts

// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// 3. Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Standard function declaration with destructured parameters
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

/* ---------- New Interfaces for StudentClass ---------- */

// Describes the constructor signature of StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Describes the instance methods and properties
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/* ---------- Class Implementation ---------- */

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/* ---------- Example Usage ---------- */
console.log(director1);
console.log(printTeacher('John', 'Doe')); // J. Doe

const student: StudentClassInterface = new StudentClass('Alice', 'Johnson');
console.log(student.displayName());   // Alice
console.log(student.workOnHomework());
