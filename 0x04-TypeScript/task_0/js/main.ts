// 0x04-TypeScript/task_0/js/main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table showing first name and location
const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
