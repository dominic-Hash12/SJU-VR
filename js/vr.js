/* ======================================================
   ST. JOSEPH'S UNIVERSITY
   VR CAMPUS HUB
====================================================== */

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");

/* ===========================
   OPEN / CLOSE MENU
=========================== */

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("show");

});

/* ===========================
   CLOSE BUTTON
=========================== */

closeMenu.addEventListener("click", () => {

    menu.classList.remove("show");

});

/* ===========================
   CLICK OUTSIDE MENU
=========================== */

document.addEventListener("click", (e) => {

    const clickedMenu = menu.contains(e.target);
    const clickedButton = menuToggle.contains(e.target);

    if (!clickedMenu && !clickedButton) {

        menu.classList.remove("show");

    }

});

/* ===========================
   ESC KEY CLOSE
=========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        menu.classList.remove("show");

    }

});

/* ===========================
   MENU BUTTON ANIMATION
=========================== */

menuToggle.addEventListener("mouseenter", () => {

    menuToggle.style.transform = "scale(1.1)";

});

menuToggle.addEventListener("mouseleave", () => {

    menuToggle.style.transform = "scale(1)";

});

/* ===========================
   HOTSPOT ANIMATION
=========================== */

const scene = document.querySelector("a-scene");

scene.addEventListener("loaded", () => {

    const hotspots = document.querySelectorAll(".hotspot");

    hotspots.forEach(hotspot => {

        hotspot.setAttribute(
            "animation",
            "property: scale; dir: alternate; dur: 1000; loop: true; to:1.3 1.3 1.3"
        );

    });

});

/* ===========================
   MOBILE MENU AUTO CLOSE
=========================== */

if (window.innerWidth < 768) {

    const buttons = document.querySelectorAll(".block");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            menu.classList.remove("show");

        });

    });

}

/* ===========================
   LOADING MESSAGE
=========================== */

window.addEventListener("load", () => {

    console.log("Campus Hub Loaded Successfully");

});

/* ======================================================
   FUTURE FEATURES

   - Clickable building hotspots
   - Mini map
   - Search building
   - Voice guide
   - Floor navigation
   - Information popups

====================================================== */