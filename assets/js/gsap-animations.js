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
  console.log("SplitText loader — DOM ready");

  
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP ou ScrollTrigger manquant !");
    return;
  }

  const elements = Array.from(document.querySelectorAll(".split-text"));
  console.log("Éléments split-text trouvés :", elements.length);

  elements.forEach((el, idx) => {
    console.log("Traitement élément", idx, el);

    
    if (el.dataset.split === "done") {
      console.log("-> déjà splitté, skip");
      return;
    }
    el.dataset.split = "done";

    
    const words = el.innerText.trim().split(/\s+/);
    el.innerHTML = words
      .map((w, i) => `<span class="word" style="display:inline-block;opacity:0;transform:translateY(20px);" data-i="${i}">${w}</span>`)
      .join(" ");

    const wordSpans = el.querySelectorAll(".word");
    console.log("Spans créés :", wordSpans.length);

   
    const tl = gsap.timeline({ paused: true });
    tl.to(wordSpans, {
      y: 0,
      opacity: 1,
      stagger: 0.07,
      duration: 1.2,
      ease: "power3.out"
    });

   
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 95%",
      onEnter: () => {
        console.log("onEnter -> play", idx);
        tl.play(0);
      },
      onEnterBack: () => {
        console.log("onEnterBack -> play", idx);
        tl.play(0);
      },
      onLeave: () => {
        console.log("onLeave -> reset", idx);
        tl.pause(0); 
      
        gsap.set(wordSpans, { opacity: 0, y: 20 });
      },
      onLeaveBack: () => {
        console.log("onLeaveBack -> reset", idx);
        tl.pause(0);
        gsap.set(wordSpans, { opacity: 0, y: 20 });
      },
      
      onRefresh(self) {
        if (self.isActive) {
          console.log("onRefresh actif -> play", idx);
          tl.play(0);
        }
      },
      markers: false
    });

    
    requestAnimationFrame(() => {
      if (st.isActive) {
        console.log("requestAnimationFrame: trigger déjà actif -> play", idx);
        tl.play(0);
      } else {
      }
    });
  });

 
  window.addEventListener("load", () => {
    console.log("window.load -> ScrollTrigger.refresh()");
    ScrollTrigger.refresh();
  });


  setTimeout(() => {
    console.log("timeout refresh");
    ScrollTrigger.refresh();
  }, 150);
});






