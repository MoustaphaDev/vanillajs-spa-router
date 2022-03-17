const styles = {
  nav: "grid z-50 fixed top-0 backdrop-blur-sm left-0 grid-cols-2 items-center  bg-[#ffffffb4] w-full h-20 shadow-md shadow-[#30303048] text-black px-12",
  leftNav: "flex items-center gap-52",
  logo: "font-bold text-4xl",
  list: "list-none flex items-center justify-between gap-8",
  listItem: "grid place-content-center font-medium",
  navLink: "grid place-content-center",
  cart: "place-self-end self-center w-5 h-5 bg-white rounded",
};

const Navbar = () => {
  return `
        <nav class="${styles.nav}">
          <div class="${styles.leftNav}">
            <h1 class="${styles.logo}">Logo</h1>
            <ul class="${styles.list}">
              <li class="{${styles.listItem}">
                <a
                    href="/"
                    class="${styles.navLink}"
                    data-link
                    >Acceuil</a>
              </li>
              <li class="${styles.listItem}">
                <a
                    href="/produits"
                    class="${styles.navLink}"
                    data-link
                    >Produits</a>
              </li>
              <li class="${styles.listItem}">
                <a
                    href="/livraison"
                    class="${styles.navLink}"
                    data-link
                    >Livraison</a>
              </li>
              <li class="${styles.listItem}">
                <a
                    href="/contact"
                    class="${styles.navLink}"
                    data-link
                    >Contact</a>
              </li>
            </ul>
          </div>
          <div src="/static/img/cart" alt="Cart" class="${styles.cart}"></div> <!-- replace with image -->
        </nav>
    `;
};

export default Navbar;
