//scrolling circles and text at bottom of showcase
const showcase = document.getElementById('showcase');
const outerCircle = document.getElementById('outer-circle');
const middleCircle = document.getElementById('middle-circle');
const innerCircle = document.getElementById('inner-circle');
const scrollingText = document.getElementById('scrolling-text');

function scrollingCirTxtAnimation(r) {
  if (r < 0.5) {
    r = 0.5;
  }
  outerCircle.style.transform = `translate(-50%, 50%) rotate(${45+360*(1-r)}deg)`;
  middleCircle.style.transform = `translate(-50%, 50%) rotate(${45-360*(1-r)}deg)`;
  innerCircle.style.transform = `translate(-50%, 50%) rotate(${45+360*(1-r)}deg)`;
  scrollingText.style.opacity = 2*r-1;
}

const scrollingObserveOption  = {
  root: null,
  rootMargin: '0px',
  threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1]
}

const observeScrolling = new IntersectionObserver((e) => {
  scrollingCirTxtAnimation(e[0].intersectionRatio);
  console.log('fire')
}, scrollingObserveOption);

observeScrolling.observe(showcase);