interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'Zenkaizer',
  lastName: 'Zenkaiger',
  age: 23,
  location: 'Perú, Lima, Lima',
}

const student_2: Student = {
  firstName: 'Twokaizer',
  lastName: 'Zenkaiger',
  age: 23,
  location: 'Perú, Lima, Lima',
}

const studentsList = [student_1, student_2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.map((x) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell_1: HTMLTableCellElement = row.insertCell();
  const cell_2: HTMLTableCellElement = row.insertCell();
  const text_1: Text = document.createTextNode(x.firstName);
  const text_2: Text = document.createTextNode(x.location);
  cell_1.appendChild(text_1);
  cell_2.appendChild(text_2);
})

const thead: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = thead.insertRow();

const th_1: HTMLTableHeaderCellElement = document.createElement('th');
const text_1: Text = document.createTextNode('First Name');
th_1.appendChild(text_1);
row.appendChild(th_1);

const th_2: HTMLTableHeaderCellElement = document.createElement('th');
const text_2: Text = document.createTextNode('Location');
th_2.appendChild(text_2);
row.appendChild(th_2);
