// ハンバーガーボタン

const button = document.getElementById('js-headerButton');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    button.classList.toggle('is-open');
    menu.classList.toggle('p-menu--open');
});