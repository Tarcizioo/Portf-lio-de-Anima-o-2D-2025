const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Verifica o tema salvo no navegador
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggle.checked = true;
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggle.checked = false;
  }

  // Alterna o tema ao clicar no checkbox
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
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
  const mainToggle = document.getElementById('theme-toggle');
const mobileToggle = document.getElementById('mobile-theme-toggle');

function updateTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  document.body.classList.toggle('light', !isDark);
  mainToggle.checked = isDark;
  mobileToggle.checked = isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

mainToggle.addEventListener('change', () => {
  updateTheme(mainToggle.checked);
});

mobileToggle.addEventListener('change', () => {
  updateTheme(mobileToggle.checked);
});


