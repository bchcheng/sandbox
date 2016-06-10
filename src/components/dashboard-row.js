import DashboardColumn from "./dashboard-column";
import DashboardRowMenu from "./dashboard-row-menu";

export default class DashboardRow
{
  constructor(row) {
      this.row = row;
  }

  render(){
    let columns = this._getColumns();
    return `<div class="row">
              <h5>${this.row.rowId} ${this.row.columns.length}</h5>
                ${!this.row.readOnly ? new DashboardRowMenu().render() : ``}
              <div class="row-contents">
                ${columns.join("")}
              </div>
            </div>`;
  }

  _getColumns() {
    return this.row.columns.map((column, index, source)=>{
      return new DashboardColumn({isLastColumn: source.length - 1 == index,
        columnId: index,
        ...column
      }).render();
    });
  }
}
