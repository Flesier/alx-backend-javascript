/// <reference path="./crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName: "Salva"};
console.log(CRUD.insertRow(obj));
console.log(CRUD.updateRow(newRowID, updatedRow));
console.log(CRUD.deleteRow(125));
