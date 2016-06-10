import {createStore} from "redux";
// import reducers from "./reducers";
import Dashboard from "./components/dashboard";
import Ajax from "./utils/ajax";
import * as actions from "./actions";
import configureStore from "./store/configure-store";

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // const flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
  // flash.render();

  //BERNIE: Temporarily make an api request here. This should be done in middleware.
  Ajax.get('public/api/dashboard.json').then((data) => {
        //$this.setState({ rows: data.rows });
        for (let row of data.rows) {
          store.dispatch(actions.addRow(row));
        }

        console.log(store.getState());

        const dashboard = new Dashboard(store.getState());
        dashboard.render();

        console.log(`Dashboard loaded: ${store.getState().dashboard.rows.length} rows`);
    }).catch((reason) => {
        console.log(`Error loading dashboard:\n${reason}`);
    });

  //document.getElementById("main").innerHTML = "<button>Add Row</button>";
});
