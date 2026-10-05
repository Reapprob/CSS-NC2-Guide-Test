const themeButton = document.getElementById("theme-button");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
    themeButton.textContent = "🌙";
} else {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

// Change theme
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});