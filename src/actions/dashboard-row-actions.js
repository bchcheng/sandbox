import * as actionType from "../constants";

export function addRow(row = { columns: [{width: 100, widgets: []}]}){
  return {
    type: actionType.ADD_ROW,
    payload: {row: row}
  };
}

export function deleteRow(){
  return {
    type: actionType.DELETE_ROW,
    payload: {}
  };
}
