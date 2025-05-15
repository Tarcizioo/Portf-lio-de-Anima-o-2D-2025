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
const closeSidebarBtn = document.getElementById("closeSidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});
closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

const modal = document.getElementById("gif-modal");
const modalGif = document.getElementById("modal-gif");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalDesc = document.getElementById("modal-description");

const closeBtn = document.querySelector(".close-btn");

const gifData = {
    "Título 1": {
      description: "Projeto feito para estudar loops e animações com Krita.",
      tools: ["Krita", "After Effects", "Photoshop"]
    },
    "Título 2": {
      description: "Animação experimental usando máscaras e iluminação.",
      tools: ["After Effects", "Illustrator"]
    },
    "Título 3": {
      description: "Loop simples feito no Photoshop para treino de tempo.",
      tools: ["Photoshop"]
    },
    "Título 4": {
      description: "Projeto com foco em expressão facial.",
      tools: ["Krita", "Toon Boom"]
    }
  };

  document.querySelectorAll(".gif-card").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        const title = card.querySelector("span").textContent;

        modalGif.src = img.src;
        modalTitle.textContent = title;
        modalDesc.textContent = gifData[title].description || "Descrição não disponível.";

        modalTags.innerHTML = "";

        (gifData[title].tools || []).forEach(tool => {
            const tag = document.createElement("span");
            tag.textContent = tool;
            modalTags.appendChild(tag);
        }
        );
        modal.classList.remove("hidden");
    });
});
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});