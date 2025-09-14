// 0x04-TypeScript/task_1/js/main.ts

// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;           // read-only after initialization
  readonly lastName: string;            // read-only after initialization
  fullTimeEmployee: boolean;            // must always be defined
  yearsOfExperience?: number;           // optional
  location: string;                     // must always be defined
  [key: string]: any;                   // allow any additional properties
}

// 2. Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property allowed
};

console.log(teacher3);
