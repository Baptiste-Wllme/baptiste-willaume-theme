document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollToPlugin); 

  const scrollLink = document.querySelector('.hero_scroll a');
  if (scrollLink) {
    scrollLink.addEventListener('click', (e) => {
      e.preventDefault();

        const target = "#description";
        
        gsap.to(document.body, {
          duration: 1.5,
          scrollTo: target,
          ease: "power2.inOut"
        });
    });
  }
});
