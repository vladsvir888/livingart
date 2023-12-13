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
    this.header = document.querySelector('.header');
    this.emailInput = {
      element: this.form.querySelector('.input--email'),
      regex: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
    };
    this.phoneInput = {
      element: this.form.querySelector('.input--phone'),
      regex: /^\+\d+$/,
    };

    this.addValidators();

    this.pristine = new Pristine(this.form, this.validationConfig);

    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  submitHandler(event) {
    const isValid = this.pristine.validate();

    if (!isValid) {
      event.preventDefault();

      LivingartCallback.scrollUp();
    }
  }

  static scrollUp() {
    window.scroll({
      top: 0,
    });
  }

  addValidators() {
    Pristine.addValidator('livingart-email', (value) => {
      if (this.emailInput.regex.test(value)) {
        return true;
      }

      return false;
    }, 'Please, enter a correct email. Special symbols and cyrillic alphabet are not allowed. For example, test123@gmail.com');

    Pristine.addValidator('livingart-phone', (value) => {
      if (value === '' || this.phoneInput.regex.test(value)) {
        return true;
      }

      return false;
    }, 'Please, enter a correct phone. Plus symbol and numbers are allowed. For example, +12124567890');
  }
}

customElements.define('livingart-callback', LivingartCallback);
