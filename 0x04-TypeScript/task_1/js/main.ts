// 0x04-TypeScript/task_1/js/main.ts

// 1. Teacher interface
interface Teacher {
  readonly firstName: string;        // cannot be changed after initialization
  readonly lastName: string;         // cannot be changed after initialization
  fullTimeEmployee: boolean;         // always required
  yearsOfExperience?: number;        // optional
  location: string;                  // always required
  [key: string]: any;                // allow extra properties
}

// 2. Director interface extending Teacher (note: singular 'Director')
interface Director extends Teacher {
  numberOfReports: number;           // required for Director
}

// 3. Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
