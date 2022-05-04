const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => { navMenu.classList.toggle("nav-menu-visible");

    if (navMenu.classList.contains("nav-menu-visible")) {
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }

});


const btnNav = document.querySelectorAll(".nav-menu-link");


  btnNav[0].addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
  
  })

  btnNav[1].addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
  
  })

  btnNav[2].addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
  
  })

  btnNav[3].addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
  
  })










