import spread from "../utils/object-helpers";

export default class DashboardWidget {
  constructor(widget) {
    this.widget = widget;
  }

  render() {
    var widgetStyle = {
      height: this.widget.height + "px"
    };
    return `<div>
              <div class="widget" style="${spread(widgetStyle)}">
                <div class="widget-menu">
                  <i class="material-icons float-left">delete</i>
                  <i class="material-icons float-right">mode_edit</i>
                  <i class="material-icons float-right">content_copy</i>
                  <i class="material-icons float-right">file_download</i>
                </div>
                <div className="widget-title">
                  <h4>
                  ${this.widget.name}
                  </h4>
                </div>
              </div>
              <div class="splitter-h">
                <i class="material-icons">more_horiz</i>
              </div>
            </div>`;
  }
}
