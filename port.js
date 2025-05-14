const mainToggle = document.getElementById('theme-toggle');
const mobileToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applytheme(isDark){
    body.classList.toggle("dark", isDark);
    body.classList.toggle("light", !isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    mainToggle.checked = isDark;
    mobileToggle.checked = isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if (savedTheme === 'dark'|| (!savedTheme && prefersDark)) {
    applytheme(true);
} else {
    applytheme(false);
}

mainToggle.addEventListener('change', () => applytheme(mainToggle.checked));
mobileToggle.addEventListener('change', () => applytheme(mobileToggle.checked));

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const toggleBtn = document.getElementById("menuToggle");
const sidebar = document.getElementById("mobileSidebar");
const closeBtn = document.getElementById("closeSidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});