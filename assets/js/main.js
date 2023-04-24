document.addEventListener("DOMContentLoaded", function () {
  let currentPage = document.location.pathname.split("/").pop();
  const menuDiv = document.querySelector(".menu");
  const navLinks = menuDiv.querySelectorAll(".nav-link");

  if (currentPage === "") {
    currentPage = navLinks[0].getAttribute("href");
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

  function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
      const menuToggle = document.querySelector('#menutoggle')
    mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open');
  }
