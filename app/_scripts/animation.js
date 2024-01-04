export default function initAnimation() {
  const animationElements = document.querySelectorAll('.footer');

  if (!animationElements.length) return;

  animationElements.forEach((animationElement) => {
    animationElement.addEventListener('sal:in', ({ detail }) => {
      const { target } = detail;

      if (!target.classList.contains('animate-element')) return;

      target.classList.add('show');
    });
  });
}
