import Pristine from 'pristinejs';

export default class LivingartCallback extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('.callback__form');
    this.validationConfig = {
      classTo: 'input-wrap',
      errorClass: 'input-error',
      successClass: 'success',
      errorTextParent: 'input-wrap',
      errorTextTag: 'div',
      errorTextClass: 'input-error-text',
    };
    this.selectors = {
      header: '.header',
    };
    this.pristine = new Pristine(this.form, this.validationConfig);

    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  submitHandler(event) {
    const isValid = this.pristine.validate();

    if (!isValid) {
      event.preventDefault();

      const headerHeight = document.querySelector(this.selectors.header).offsetHeight;
      // eslint-disable-next-line max-len
      const rectTopElement = (this.form.getBoundingClientRect().top + window.scrollY) - headerHeight;
      window.scroll({
        top: rectTopElement,
      });
    }
  }
}

customElements.define('livingart-callback', LivingartCallback);
