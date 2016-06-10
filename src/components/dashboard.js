
import DashboardRow from "./dashboard-row";

export default class Dashboard{
  constructor(state)
  {
      this.state = state;
      // var $this = this;

      // //BERNIE: Temporarily make an api request here. This should be done in middleware.
      // Ajax.get('public/api/dashboard.json').then((data) => {
      //       //$this.setState({ rows: data.rows });
      //       $this = data.rows;
      //
      //       document.getElementById("dashboard").innerHTML += `<h5>${$this.length} rows</h5>`;
      //       for (let row of $this)
      //       {
      //         const dashboardRow = new DashboardRow(row);
      //         document.getElementById("dashboard").innerHTML += dashboardRow.render();
      //       }
      //       console.log(`Dashboard loaded:\n${$this.length}`);
      //   }).catch((reason) => {
      //       console.log(`Error loading dashboard:\n${reason}`);
      //   });
  }

  render() {
    let rows = this._getRows();
    document.getElementById("main").innerHTML = `<div id="dashboard" class="dashboard">
      ${rows.join("")}
      </div>`;
  }

  _getRows(){
    return this.state.dashboard.rows.map((row, index) => {
      // var newRow = Object.assign({}, row, {rowId: index});
      return new DashboardRow({rowId: index, readOnly: false, ...row}).render();
    });
  }

}
