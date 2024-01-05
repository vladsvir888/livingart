import createIntersectionObserver from './helpers/createIntersectionObserver';
import scroll from './helpers/scroll';

function initScrollSpy() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const navBlock = document.querySelector('.info-section__nav');
  const headings = document.querySelectorAll('.text-block h2');
  let activeHeadingIndicator = '';

  if (!headings.length || !navBlock || !window.matchMedia('(min-width: 1201px)').matches) return;

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeElement = document.querySelector('.info-section__button.active');

        if (activeElement) {
          activeElement.classList.remove('active');
        }

        // eslint-disable-next-line prefer-destructuring
        activeHeadingIndicator = entry.target.classList[0];
        document
          .querySelector(`.info-section__button[href="#${activeHeadingIndicator}"]`)
          .classList.add('active');
      }
    });
  }

  function generateNavElements() {
    let templateString = '';

    headings.forEach((heading, index) => {
      templateString += `<a class="info-section__button ${index === 0 ? 'active' : ''}" href="#${heading.classList[0]}">${heading.textContent}</a>`;
    });

    navBlock.insertAdjacentHTML('afterbegin', templateString);
  }

  createIntersectionObserver(headings, callback, {
    rootMargin: '0px 0px -90% 0px',
  });
  generateNavElements();

  const navElements = document.querySelectorAll('.info-section__button');

  if (!navElements.length) return;

  navElements.forEach((navElement) => {
    navElement.addEventListener('click', (event) => {
      event.preventDefault();

      const className = navElement.getAttribute('href').slice(1);
      const heading = document.querySelector(`[class="${className}"]`);
      const rectTopElement = heading.getBoundingClientRect().top + window.scrollY - headerHeight;

      scroll({
        top: rectTopElement,
      });
    });
  });
}

export default initScrollSpy;
