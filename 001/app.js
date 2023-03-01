// ボタン
const btn = document.querySelector('.btn')
// ボックスオブジェクト
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
  box.classList.toggle('active')
})