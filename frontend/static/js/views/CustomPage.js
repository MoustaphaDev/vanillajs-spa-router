import AbstractView from "./AbstractView.js";

class CustomPageView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("My custom page");
  }
  async getHtml() {
    return `<h1>This is my custom page</h1>`;
  }
}

const CustomPage = {
  route: "/custom-page",
  view: CustomPageView,
};

export default CustomPage;
