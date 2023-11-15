document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const yOffset = targetSection.getBoundingClientRect().top;
      const yOffsetAdjusted = yOffset > 0 ? yOffset : 0;

      window.scrollTo({
        top: yOffsetAdjusted + window.scrollY,
        behavior: 'smooth'
      });
    }
  });
});
