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


