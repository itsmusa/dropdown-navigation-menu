const overlay = document.querySelector(".overlay");

const openMenu = function(openBtnID, menuID) {
    const openBtn = document.getElementById(openBtnID),
    menu = document.getElementById(menuID);

    if (openBtn && menu) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("open");
            overlay.classList.add("open");
        })
    }
}
openMenu("menu-open", "nav-menu");

// CLOSE MENU
const closeMenu = function(closeBtnID, menuID) {
    const closeBtn = document.getElementById(closeBtnID),
    menu = document.getElementById(menuID);

    if (closeBtn && menu) {
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        })
    }
}
closeMenu("menu-close", "nav-menu");

// DROPDOWN
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("open");
    })
});