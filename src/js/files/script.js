// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const submenuButton = document.querySelector(".menu__item button"); // Assuming the button is inside the menu__item
const submenu = document.querySelector(".menu__item-submenu");
function showSubmenu() {
  submenu.classList.add("active");
}

function hideSubmenu() {
  submenu.classList.remove("active");
}

function toggleSubmenu() {
  if (window.innerWidth <= 767.98) {
    submenuButton.addEventListener("click", () => {
      submenu.classList.toggle("active");
    });
  } else {
    submenuButton.addEventListener("mouseover", showSubmenu);
    submenuButton.addEventListener("mouseout", hideSubmenu);
    submenu.addEventListener("mouseover", showSubmenu);
    submenu.addEventListener("mouseout", hideSubmenu);
  }
}
if (submenu) {
  toggleSubmenu();

  window.addEventListener("resize", () => {
    submenuButton.removeEventListener("mouseover", showSubmenu);
    submenuButton.removeEventListener("mouseout", hideSubmenu);
    submenuButton.removeEventListener("click", toggleSubmenu);
    submenu.removeEventListener("mouseover", showSubmenu);
    submenu.removeEventListener("mouseout", hideSubmenu);
    toggleSubmenu();
  });
}
