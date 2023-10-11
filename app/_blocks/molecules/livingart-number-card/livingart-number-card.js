import { CountUp } from 'countup.js';

function countStart() {
  const nums = document.querySelectorAll('.number-card__num span');

  if (!nums.length) return;

  nums.forEach((num) => {
    new CountUp(num, num.textContent, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
      separator: '',
    });
  });
}

export default countStart;
