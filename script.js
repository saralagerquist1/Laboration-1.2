

const nav = document.getElementById("myNav");
const openBtn = document.getElementById("openBtn");

// Öppna meny
openBtn.addEventListener("click", () => {
    if(nav.style.width === "100%") {
        nav.style.width = "0"
    } else {
        nav.style.width = "100%";
    }
})

