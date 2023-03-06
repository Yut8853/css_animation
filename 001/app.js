document.addEventListener('DOMContentLoaded', () => {
  // ボタン
  const btn = document.querySelector('.btn');
  // ボックスオブジェクト
  const box = document.querySelector('.box');

  btn.addEventListener('click', () => {
    box.classList.add('active');
    // box.style.transform = 'translateX(calc(100vw - 100px))';
  });

  box.addEventListener('animationend', () => {
    box.classList.remove('active');
    // box.style.transform = 'translateX(0px)'
  });
});
