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

console.log(director1);
console.log(printTeacher('John', 'Doe')); // J. Doe
