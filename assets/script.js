// Reveal-on-scroll + phrase de fin aléatoire + année du footer
(function () {
  // --- apparitions au scroll ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // --- année du footer ---
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // --- "Sur ce, bon appétit et ___" : tiré au sort à chaque ouverture ---
  const fins = [
    "bonne journée.",
    "bonne soirée.",
    "bonne nuit.",
    "bonne manif !",
    "bonne grève !",
    "à bas le patriarcat !",
    "à bas la bourgeoisie !",
    "fuck les fachos !",
    "free Palestine 🍉",
    "ni dieu ni maître.",
    "mort aux frontières !",
    "vive la Commune !",
    "solidarité avec les sans-papiers.",
    "prenez soin les un·es des autres.",
    "restez ingouvernables.",
    "pas de justice, pas de paix.",
    "éteignez la télé, allez dehors.",
    "l'écologie ou la mort.",
    "organisez-vous.",
    "vive l'amour et la rage.",
  ];
  const end = document.getElementById("signoff-end");
  if (end) {
    end.textContent = fins[Math.floor(Math.random() * fins.length)];
  }
})();
