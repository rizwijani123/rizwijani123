let currentSection = 'home';

function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
  currentSection = sectionId;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}