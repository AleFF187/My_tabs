// получаем все кнопки
const tabButtons = document.querySelectorAll('.tab__button');
// получаем активную кнопку
let tabButtonActive = document.querySelector('.tab__button_active');
// получаем все вкладки
const tabContents = document.querySelectorAll('.tab__content');
// получаем активную кнопку
let tabContentActive = document.querySelector('.tab__content_active');

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].onclick = function(){
    tabButtonActive.classList.remove('tab__button_active'); 
    tabButtons[i].classList.add('tab__button_active');
    tabButtonActive = tabButtons[i];
    tabContentActive.classList.remove('tab__content_active');
    tabContents[i].classList.add('tab__content_active');
    tabContentActive = tabContents[i];
  };
}