export default function createIntersectionObserver(elements, callback, options = {}) {
  if (typeof callback !== 'function') return;

  const observer = new IntersectionObserver(callback, options);

  elements.forEach((heading) => {
    observer.observe(heading);
  });
}
