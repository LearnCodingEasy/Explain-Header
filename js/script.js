/*
let ScrollUp = document.querySelector(`.back-to-top`);

ScrollUp.onclick = function () {
  console.log(`User Click Button Back To To`);
  // window.screenTop = 0;
  // document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
*/
/*=============== Header Change Background ===============*/
/*
function scrollUp() {
  const header = document.getElementById("header-logo-nav");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) header.classList.add("header-scroll-with-window");
  else header.classList.remove("header-scroll-with-window");
}
window.addEventListener("scroll", scrollUp);
*/

/*
=====================================================
Todo =============== DARK LIGHT THEME ===============
=====================================================
هرجع اشغلهاء 
*/
const themeButton = document.getElementById("change-theme-icon");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  console.log(`Toggle Theme`);
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*
=====================================================
Todo =============== Show Nav Menu ==================
=====================================================
*/

const showElement = (toggleId, navId, AttributeClassName) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  // Validate That Variables Exist
  if (toggle && nav) {
    // Toggle Class ShowEle Element On Click
    toggle.addEventListener("click", () => {
      console.log("Toggle Class Show Element On Click:");
      nav.classList.toggle(AttributeClassName);
    });
  }
};

showElement(`nav-toggle`, "nav-menu", "show-menu");

/*
=====================================================
Todo ======= Remove Nav Menu  On Click On  Mobile ===
=====================================================
*/

const navLink = document.querySelectorAll(`.nav-link`);

const linkAction = () => {
  console.log("linkAction: ", linkAction);
  const navMenu = document.getElementById("nav-menu");
  // When We Click On Each Nav Link We Remove The Show Menu Class
  navMenu.classList.remove(`show-menu`);
};

navLink.forEach((n) => n.addEventListener(`click`, linkAction));

/*
=====================================================
Todo ======= When Scroll Section Name Active Link ===
=====================================================
*/

const sections = document.querySelectorAll(`section[id]`);

function scrollLinkActive() {
  sections.forEach((current) => {
    // Get Scroll Viewport Height
    let scrollY = window.pageYOffset;
    // console.log("scrollY: ", scrollY);

    // All Section Name
    let sectionId = current.getAttribute("Id");
    // console.log("Section Id Name: ", sectionId);

    // Get All Sections Height
    let sectionHeight = current.offsetHeight;
    // console.log("Section Height: ", sectionHeight);

    // Size Scroll To Section
    let sectionTop = current.offsetTop - 50;
    // console.log("Size Scroll To Section: ", sectionTop);

    //

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.add(`nav-link-active`);
    } else {
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.remove(`nav-link-active`);
    }
  });
}

window.addEventListener(`scroll`, scrollLinkActive);

/*
=====================================================
Todo ======= When Scroll Do Action On Header ========
=====================================================
*/

function scrollActionHeader() {
  const eleHeader = document.getElementById("header");
  // Get Scroll Viewport Height
  let scrollY = window.pageYOffset;

  // When The Scroll Is Greater Then 200 Viewport Height, Add Class header-scroll-action
  let viewportHeight = 200;

  if (scrollY >= viewportHeight) {
    eleHeader.classList.add(`header-scroll-action`);
  } else {
    eleHeader.classList.remove(`header-scroll-action`);
  }
  // if(this.scrollY >=viewportHeight){}
}
window.addEventListener(`scroll`, scrollActionHeader);
