function userScroll() {
  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("bg-dark");
      nav.classList.add("navbar-effect");
    } else {
      nav.classList.remove("bg-dark");
      nav.classList.remove("navbar-effect");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
