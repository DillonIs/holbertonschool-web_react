// Create the interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Declare 2 Student variables
const student1: Student = {
  firstName: "Isaac",
  lastName: "Dillon",
  age: 24,
  location: "Melbourne"
};

const student2: Student = {
  firstName: "James",
  lastName: "Greenfield",
  age: 22,
  location: "Sydney"
};

// Store the variable data into an Array
const studentsList: Student[] = [student1, student2];

// Create the table
const table: HTMLTableElement = document.createElement("table");
const rowHeader = document.createElement("tr");
const nameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
rowHeader.appendChild(nameHeader);
rowHeader.appendChild(locationHeader);
table.appendChild(rowHeader);

// Use vanilla javascript to render the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cellName = document.createElement("td");
  const locationCell = document.createElement("td");

  cellName.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(cellName);
  row.appendChild(locationCell);
  table.appendChild(row);
});

  // Append the table to the webpage in the body
  document.body.appendChild(table);
