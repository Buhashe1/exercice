function ShowContent(sectionName) {

    // Sélectionner toutes les sections
    const sections = document.querySelectorAll(".section");

    // Cacher toutes les sections
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Afficher la bonne section
    const activeSection = document.querySelector("." + sectionName);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}

// Afficher la section home au début
document.addEventListener("DOMContentLoaded", () => {
    ShowContent("home");
});
