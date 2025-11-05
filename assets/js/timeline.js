document.querySelectorAll('.cv_toggle').forEach(button => {
  button.addEventListener('click', function () {
    const wrapper = this.closest('.cv_item-wrapper');
    const isBottom = wrapper.classList.contains('bottom'); 

    wrapper.classList.toggle('open');

    if (isBottom) {
      this.textContent = wrapper.classList.contains('open') ? '▼' : '▲';
    } else {
      this.textContent = wrapper.classList.contains('open') ? '▲' : '▼';
    }
  });
});

// ::before ajusté // 

(function () {
  const timeline = document.querySelector('.cv_timeline');
  if (!timeline) return;

  const updateLine = () => {

    const totalWidth = timeline.scrollWidth;
    const firstItem = timeline.querySelector('.cv_item');
    const lastItem  = timeline.querySelector('.cv_item:last-of-type');

    let left = 0;
    let width = totalWidth;

    if (firstItem && lastItem) {
  
      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstItem.getBoundingClientRect();
      const lastRect  = lastItem.getBoundingClientRect();


      const firstRel = firstItem.offsetLeft + firstItem.offsetWidth / 2;
      const lastRel  = lastItem.offsetLeft + lastItem.offsetWidth / 2;

      left = firstRel;                
      width = Math.max(0, lastRel - firstRel); 
    }


    timeline.style.setProperty('--line-left', left + 'px');
    timeline.style.setProperty('--line-width', width + 'px');
  };


  window.addEventListener('load', updateLine);
  window.addEventListener('resize', () => {

    clearTimeout(window._updateLineT);
    window._updateLineT = setTimeout(updateLine, 120);
  });


  const ro = new MutationObserver(() => updateLine());
  ro.observe(timeline, { childList: true, subtree: true });


  timeline.addEventListener('load', updateLine, true);

  updateLine();
})();

// drag & grab //

(function () {
  const timeline = document.querySelector('.cv_timeline');
  if (!timeline) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;


  const prevScrollBehavior = timeline.style.scrollBehavior || '';
  const prevScrollSnap = getComputedStyle(timeline).scrollSnapType || '';

  function onPointerDown(e) {
    isDown = true;
    timeline.classList.add('grabbing');


    document.body.style.userSelect = 'none';

  
    timeline.style.scrollBehavior = 'auto';
    timeline.style.scrollSnapType = 'none';


    startX = e.pageX;
    scrollLeft = timeline.scrollLeft;

 
    document.addEventListener('pointermove', onPointerMove, { passive: false });
    document.addEventListener('pointerup', onPointerUp, { passive: false });

  
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX;
    const walk = x - startX; 
    timeline.scrollLeft = scrollLeft - walk;
  }

  function onPointerUp() {
    if (!isDown) return;
    isDown = false;
    timeline.classList.remove('grabbing');

  
    timeline.style.scrollBehavior = prevScrollBehavior || 'smooth';
    timeline.style.scrollSnapType = prevScrollSnap || 'x mandatory';
    document.body.style.userSelect = '';

    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
  }

 
  timeline.addEventListener('pointerdown', onPointerDown, { passive: false });
})();

