function toggleMode() {
const body = document.body;
const button = document.querySelector(".mode-btn");
body.classList.toggle("light");

if (body.classList.contains("light")) {
    button.textContent = "☀️";
    localStorage.setItem("mode", "light");
} else {
    button.textContent = "🌙";
    localStorage.setItem("mode", "dark"); 
}
}

window.onload = function () {
const mode = localStorage.getItem("mode"); 
const body = document.body;
const button = document.querySelector(".mode-btn");

if (mode === "light") {
    body.classList.add("light");
    button.textContent = "☀️";
} else {
    body.classList.remove("light");
    button.textContent = "🌙";
}
}