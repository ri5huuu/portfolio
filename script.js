let Button = document.querySelector(".darkmode");
let Mode = document.querySelector("body");
let headings = document.querySelectorAll("h2, h3, h4,i");
let nav = document.querySelector(".navbar");

let value = 0;

Button.addEventListener("click", function () {
    if (value == 0) {
        // Light Mode
        Mode.style.backgroundColor = "white";
        Button.style.color = "teal";
        nav.style.color = "teal";
        headings.forEach(h => h.style.color = "teal");
        value = 1;
    } else {
        // Dark Mode
        Mode.style.backgroundColor = "black";
        Button.style.color = "white";
        nav.style.color = "white";
        headings.forEach(h => h.style.color = "white");
        value = 0;
    }
});
