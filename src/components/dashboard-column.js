import DashboardWidget from "./dashboard-widget";
import spread from "../utils/object-helpers";

export default class DashboardColumn
{
  constructor(column){
    this.column = column;
  }

  render() {
    var columnStyle = {
      width: this.column.width + "%"
    };

    var widgets = this._getWidgets();
    return `<div class="column" style="${spread(columnStyle)}">
              ${widgets.join("")}
              ${!this.column.isLastColumn ?
                `<div class="splitter-v">
                    <i class="material-icons">more_vert</i>
                </div>`
                : ``}
            </div>`;
  }

  _getWidgets(){
      return this.column.widgets.map((widget, index, source)=>{
        return new DashboardWidget({...widget}).render();
      });
  }
}
