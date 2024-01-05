import createIntersectionObserver from './helpers/createIntersectionObserver';

export default function initAnimation() {
  const animationElements = document.querySelectorAll('.animate-element');

  if (!animationElements.length) return;

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }

  createIntersectionObserver(animationElements, callback);
}
