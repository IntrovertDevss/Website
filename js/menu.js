const profileImg = document.getElementById("MainMenuProfImg");
const sideMenu = document.getElementById("MainSideMenu");

profileImg.addEventListener("click", () => {
    // Only run on mobile-sized screens
    if (window.innerWidth <= 768) {
        if (sideMenu.style.display === "block") {
            sideMenu.style.display = "none";
        } else {
            sideMenu.style.display = "block";
        }
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sideMenu.style.display = "block"; // Always show sidebar on larger screens
    }
});