import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Isaac",
  lastName: "Dillon",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 24 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
