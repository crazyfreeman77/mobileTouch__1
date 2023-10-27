'use strict'


// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

let out1 = document.querySelector('.out-1');

function t1() {

      out1.textContent = 'touch';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let out2 = document.querySelector('.out-2');
let countTouch = 0;

function t2() {

      countTouch++;
      out2.textContent = countTouch;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let out3 = document.querySelector('.out-3');
let block31 = document.querySelector('.div-3_1');
let block32 = document.querySelector('.div-3_2');

function t3(event) {

      if (event.target === block31) {
        out3.textContent = '1';
      } else if (event.target === block32) {
        out3.textContent = '2';
      }
      console.log(event);
}
block31.addEventListener('touchstart', t3);
block32.addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */


function t4() {

      console.log('Событие touchstart сработало');
      document.querySelector('.out-4').textContent = 'touch';
}

document.querySelector('.b-4').addEventListener('click', () => {
    console.log('Кнопка b-4 нажата');
    document.querySelector('.div-4').addEventListener('touchstart', t4);
});


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {

      document.querySelector('.div-4').removeEventListener('touchstart', t4);
      document.querySelector('.out-4').textContent = '';
      console.log('Событие ontouchstart на блоке div-4: Очищено');
}

document.querySelector('.b-5').addEventListener('click', () => {
  console.log('Кнопка b-5: Нажата');
  t5();
});

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let out6 = document.querySelector('.out-6');

function t6() {

      out6.textContent = 'touchend';
}

document.querySelector('.div-4').addEventListener('touchend', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */


function t7() {

      document.querySelector('.div-7').style.backgroundColor = 'red';
}

document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {

      let ranIndx = Math.floor(Math.random() * a8.length);
      document.querySelector('.div-8').style.backgroundColor = a8[ranIndx];
}

document.querySelector('.div-8').addEventListener('touchstart', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

let out9 = document.querySelector('.out-9');

function t9(event) {

      document.querySelector('.div-9').textContent = event.targetTouches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let block10 = document.querySelector('.div-10');
let w = block10.clientWidth;

function t10() {

      w++;
      block10.style.width = w + 'px';
}

block10.addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let out11 = document.querySelector('.out-11');

function t11(event) {

      let blkY = event.targetTouches[0].radiusY;
      let blkX = event.targetTouches[0].radiusX;

      out11.innerHTML = `radiusY: ${blkY}<br>radiusX: ${blkX}`;
}

document.querySelector('.div-11').addEventListener('touchstart', t11);



// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с верстко<p>1. Добавьте на кнопку nex событие  так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/
const images = document.querySelectorAll('.img-12-min');
let count = 0;
const bigImage = document.querySelector('.img-12-max');
let touchActive = false;

const next = document.querySelector('.next');
next.onclick = nextFunction;
const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
const res = document.querySelector('.reset');
res.onclick = resFunction;

next.addEventListener('touchstart', function (event) {

      touchActive = true;
      nextFunction(event); 
});

prev.addEventListener('touchstart', function (event) {

      touchActive = true;
      prevFunction(event);
});

res.addEventListener('touchstart', function () {

      touchActive = true;
      resFunction();
});

document.addEventListener('touchend', function () {
  touchActive = false;
});

function nextFunction(event) {

      if ( !touchActive ) {
        event.preventDefault();

        if (count + 1 < images.length) {
          count++;
        } else {
          count = 0;
        }
        images.forEach((img) => {
          img.classList.remove('active-img');
        });
        images[count].classList.add('active-img');
        bigImage.src = images[count].src;
      }
}

function prevFunction(event) {

      if ( !touchActive ) {
        event.preventDefault();

        if (count - 1 >= 0) {
          count--;
        } else {
          count = images.length - 1;
        }
        images.forEach((img) => {
          img.classList.remove('active-img');
        });
        images[count].classList.add('active-img');
        bigImage.src = images[count].src;
      }
}

function resFunction() {

      if ( !touchActive ) {
        count = 0;
        images.forEach((img) => {
          img.classList.remove('active-img');
        });
        images[count].classList.add('active-img');
        bigImage.src = images[count].src;
      }
}