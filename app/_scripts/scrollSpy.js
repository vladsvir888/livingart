function initScrollSpy() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const headings = document.querySelectorAll('.text-block [data-heading]');
  const navElements = document.querySelectorAll('.info-section__button');
  let activeHeadingIndicator = '';

  if (!headings.length || !navElements.length || !window.matchMedia('(min-width: 901px)').matches) return;

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector('.info-section__button.active').classList.remove('active');
        // eslint-disable-next-line prefer-destructuring
        activeHeadingIndicator = entry.target.classList[0];
        document
          .querySelector(`.info-section__nav [href="#${activeHeadingIndicator}"]`)
          .classList.add('active');
      }
    });
  }

  const options = {
    rootMargin: '0px 0px -90% 0px',
  };
  const observer = new IntersectionObserver(callback, options);

  headings.forEach((heading) => {
    observer.observe(heading);
  });

  navElements.forEach((navElement) => {
    navElement?.addEventListener('click', (event) => {
      event.preventDefault();

      const className = navElement.getAttribute('href').slice(1);
      const heading = document.querySelector(`[class="${className}"]`);
      const rectTopElement = heading.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scroll({
        top: rectTopElement,
      });
    });
  });
}

export default initScrollSpy;
