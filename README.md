# My_tabs
реализация табов на divах

// ***** HTML *****
  <div class="tab__wrapper">
  
    <div class="tab__buttons_wrapper">
      <div class="tab__button tab__button_active">ВКЛАДКА 1</div>
      <div class="tab__button">ВКЛАДКА 2</div>
      <div class="tab__button">ВКЛАДКА 3</div>
      <!-- здесь добавлять вкладки -->
    </div>
  
    <div class="tab__content_wrapper">
      <div class="tab__content tab__content_active">
        <h1>Контент 1</h1>
      </div>
      <div class="tab__content">
        <h1>Контент 2</h1>
      </div>
      <div class="tab__content">
        <h1>Контент 3</h1>
      </div>
      <!-- здесь добавлять содержимое вкладок -->
    </div>
    
  </div>
// ***** HTML *****


// ***** CSS *****
*{
  box-sizing: border-box;
}

p{
  margin: 0;
}

/* стили для кнопок */
.tab__buttons_wrapper{
  display: flex;  
  /* произвольная ширина контейнера для кнопок */
  width: 550px;
}

.tab__button + .tab__button{
  margin-left: 25px;
}

.tab__button{
  flex-grow: 1;  
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  padding: 10px 20px;
  color: #555;
  background-color: lightgray;
  border-radius: 5px;
  user-select: none;
}

.tab__button_active{
  background-color: gray;
  color: #fff;
}

/* стили для содержимого кладок */
.tab__content_wrapper{
  margin-top: 10px;
  /* выставляем ширину контента равную ширине контейнера для кнопок*/
  width: 550px;
  height: 180px;
}

.tab__content{
  display: none;
  width: 100%;
  height: 100%;
  font-size: 15px; 
  line-height: 1.5em;
  padding: 10px 20px;
  background-color: lightgreen;
}

.tab__content_active{
  display: block;
}
// ***** CSS *****
  
// ***** JS *****
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
// ***** JS *****
