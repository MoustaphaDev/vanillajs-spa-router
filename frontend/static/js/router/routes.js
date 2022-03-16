import Views from "../views/index.js";

const routes = Views.map((view) => {
  return {
    path: view.route,
    view: view.view,
  };
});

export default routes;
