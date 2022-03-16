import { router, navigateTo } from "./router/router.js";
import { Navbar } from "./partials/index.js";

document.getElementById("nav").innerHTML = Navbar();

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
