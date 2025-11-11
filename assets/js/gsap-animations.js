// animation section hero // 
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero_title");
  if (heroTitle) {
    const letters = heroTitle.innerText.split("").map(char => {
      if (char === " ") return `<span class="letter" style="display:inline-block; width:0.5em;"></span>`;
      return `<span class="letter" style="display:inline-block; opacity:0;">${char}</span>`;
    });

    heroTitle.innerHTML = letters.join("");

    gsap.to(heroTitle.querySelectorAll(".letter"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.05,
      y: -20,
      delay: 0.5
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const heroSubtitle = document.querySelector(".hero_subtitle");
  if (heroSubtitle) {
    const words = heroSubtitle.innerText.split(" ").map((word, i) => {
      return `<span class="word" style="display:inline-block; opacity:0;">${word}</span>`;
    });

    heroSubtitle.innerHTML = words.join(" ");

    const wordSpans = heroSubtitle.querySelectorAll(".word");

    gsap.fromTo(
      wordSpans[0],
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
    );

    gsap.fromTo(
      wordSpans[1],
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2 }
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const heroLinks = document.querySelectorAll(".hero_links a");

  if (heroLinks.length) {
    gsap.from(heroLinks, {
      scale: 0,          
      opacity: 0,        
      duration: 0.5,    
      ease: "back.out(5.7)", 
      stagger: 0.2,      
      delay: 2.5        
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {

  gsap.from(".hero_scroll .text", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 3,
    onComplete: () => {
      
      gsap.set(".hero_scroll .text", { clearProps: "transform" });
    }
  });

 
  gsap.from(".hero_scroll a img", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 3,
    onComplete: () => {
      gsap.set(".hero_scroll a img", { clearProps: "transform" });
    }
  });
});




// animation section description //

document.addEventListener("DOMContentLoaded", () => {
    
    const elements = document.querySelectorAll(".split-text");

    elements.forEach(el => {
        let words = el.innerText.split(" ");
        el.innerHTML = words
            .map(word => `<span class="word" style="display:inline-block; opacity:0;">${word}</span>`)
            .join(" ");

        gsap.fromTo(
            el.querySelectorAll(".word"),
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.07,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );
    });
    setTimeout(() => ScrollTrigger.refresh(), 100);
});




