import pathToRegex from "../utils/pathToRegex.js";
import getParams from "../utils/getParams.js";
import routes from "./routes.js";

export const router = async () => {
  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
