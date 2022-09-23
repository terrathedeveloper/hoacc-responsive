/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  let nav = document.querySelector("nav.mainnav");
  if (nav) {
    console.log(nav);
    nav.innerHTML = `
        <div class="container">
        <a class="navbar-brand" href="#page-top">
          <!--<img src="assets/img/logos/hoacc-millennial-shield_1.jpg" width="200" alt="..." />-->The
          House of Afros, Capes and Curls
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item"><a class="nav-link" href="main.html">Home</a></li>
             
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="about.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="about.html">About HOACC</a></li>
                <li><a class="dropdown-item" href="team.html">Meet the Team</a></li>
                
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="media.html">Media</a></li>
            <li class="nav-item"><a class="nav-link" href="community_engagement.html">Community Engagement</a></li>
            <li class="nav-item education"><a class="nav-link" href="education.html">Education</a></li>
            <li class="nav-item"><a class="nav-link" href="specialevents.html">Special Events</a></li>
          </ul>
        </div>
      </div>
        `;
  }

  let footer = document.querySelector("footer.footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Copyright &copy; The House of Afros, Capes and Curls 2021
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>`;
  }

  const ps = document.querySelectorAll("p");
  if (ps) {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height
            ? "add"
            : "remove"
        ]("truncated");
      }
    });

    ps.forEach((p) => {
      observer.observe(p);
    });
  }
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("TOOOOOOO");
});
