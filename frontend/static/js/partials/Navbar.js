const Navbar = () => {
  const styles = {
    navLink:
      "block py-3 px-5 text-[#eeeeee] font-medium hover:bg-[rgba(255, 255, 255, 0.05)]",
    nav: "fixed top-0 left-0 w-52 h-screen bg-[#222222]",
  };
  return `
        <nav class="${styles.nav}">
            <a
                href="/"
                class="${styles.navLink}"
                data-link
                >Dashboard</a>
            <a
                href="/posts"
                class="${styles.navLink}"
                data-link
                >Posts</a>
            <a
                href="/custom-page"
                class="${styles.navLink}"
                data-link
                >Custom Page</a>
        </nav>
    `;
};

export default Navbar;
