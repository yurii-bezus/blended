// const button = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");
// button.addEventListener("click", () => {
//   console.log(input.value);
// });
// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);

// // 2 - отримай елемент id="title" і виведи його в консоль;

// const ideElem = document.querySelector("#title");
// console.log(ideElem);
// // 3 - отримай елемент class="list" і виведи його в консоль;

// const elClass = document.querySelector(".list");
// console.log(elClass);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const allElemData = document.querySelectorAll("[data-topic]");
// console.log(allElemData);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const firstElemData = allElemData[0];
// console.log(firstElemData);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const lastElemData = allElemData[allElemData.length - 1];
// console.log(lastElemData);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const allH3 = document.querySelectorAll("h3");
// console.log(allH3);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// allH3.forEach((h3) => {
//   h3.classList.add("active");
// });

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liDataTopic = document.querySelector('li[data-topic="navigation"]');
// console.log(liDataTopic);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// liDataTopic.style.backgroundColor = "yellow";
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const textVhange = liDataTopic.querySelector("p");
// textVhange.textContent = "Я змінив тут текст!";
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const list = document.querySelector("ul");
// const li = document.createElement("li");
// const h3 = document.createElement("h3");
// const p = document.createElement("p");
// h3.textContent = "Властивість innerHTML";
// p.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// li.appendChild(h3);
// li.appendChild(p);
// list.appendChild(li);

// const markup = `<li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>`;
// list.insertAdjacentHTML("beforeend", markup);
// 20 - очисти список

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.createElement("div");
// numberContainer.classList.add("numberContainer");

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < 100; i++) {
//   const number = randomNumber();
//   const div = document.createElement("div");
//   div.classList.add("number");
//   if (number % 2 === 0) {
//     div.classList.add("even");
//   } else {
//     div.classList.add("odd");
//   }
//   div.textContent = number;
//   numberContainer.appendChild(div);
// }
// document.body.appendChild(numberContainer);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
const input = document.querySelector(".js-username-input");
const checkbox = document.querySelector(".js-policy-checkbox");
const span = document.querySelector(".js-username-output");
function handleInput() {
  const value = input.value;
  if (value.length > 6) {
    input.classList.add("success");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
  }
  if (value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = value;
  }
}

input.addEventListener("input", handleInput);

input.addEventListener("focus", () => {
  const value = input.value.trim();
  if (value === "") {
    input.style.outline = "3px solid red";
  } else {
    input.style.outline = "3px solid green";
  }
});

input.addEventListener("blur", () => {
  const value = input.value.trim();
  if (value === "") {
    input.style.outline = "3px solid red";
  } else {
    input.style.outline = "3px solid lime";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (checkbox.checked && value !== "") {
    const userData = { username: value };
    console.log(userData);
  } else {
    alert("заповніть всі поля");
  }
});
