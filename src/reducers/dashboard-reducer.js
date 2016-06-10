import * as actionType from "../constants";

export default function dashboard(state = { rows: []}, action)
{
  switch (action.type) {
    case actionType.ADD_ROW:
      const rowId = action.rowId ? action.rowId : state.rows.length;

      // Insert a row at the rowId index.
      var rows = [...state.rows.slice(0, rowId),
        action.payload.row,
        ...state.rows.slice(rowId)];

      return Object.assign({}, state, {rows: rows});
    case actionType.DELETE_ROW:
      return state;//action.payload;
    default:
      return state;
  }
}
