var student_1 = {
    firstName: 'Zenkaizer',
    lastName: 'Zenkaiger',
    age: 23,
    location: 'Perú, Lima, Lima'
};
var student_2 = {
    firstName: 'Twokaizer',
    lastName: 'Zenkaiger',
    age: 23,
    location: 'Perú, Lima, Lima'
};
var studentsList = [student_1, student_2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.map(function (x) {
    var row = table.insertRow();
    var cell_1 = row.insertCell();
    var cell_2 = row.insertCell();
    var text_1 = document.createTextNode(x.firstName);
    var text_2 = document.createTextNode(x.location);
    cell_1.appendChild(text_1);
    cell_2.appendChild(text_2);
});
var thead = table.createTHead();
var row = thead.insertRow();
var th_1 = document.createElement('th');
var text_1 = document.createTextNode('First Name');
th_1.appendChild(text_1);
row.appendChild(th_1);
var th_2 = document.createElement('th');
var text_2 = document.createTextNode('Location');
th_2.appendChild(text_2);
row.appendChild(th_2);
