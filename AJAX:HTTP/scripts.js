// Задание 2
// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть <div></div>. Достать с сервера заголовок задачи и отобразить его в div.

// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//   let obj = JSON.parse(httpRequest.responseText);
//   console.log(obj);
//   document.querySelector('div').innerText = obj.title;
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();


// Задание 3
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//   let array = JSON.parse(httpRequest.responseText);
//   console.log(array);
//   for(let i = 0; i < 20; i++) {
//     let li = document.createElement('li');
//     li.innerText = array[i].title;
//     document.querySelector('ul').appendChild(li);
//   }
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// httpRequest.send();


// Задание 4
// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments
// Оформить тегами как в ПРИМЕРЕ.

// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.

// let section = document.querySelector('section');
// let addInfo = (name, content, className) => {

//   let teg = document.createElement(name); 
//   teg.innerText = content;
//   teg.classList.add(className);

//   section.appendChild(teg);
// }

// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//   let data = JSON.parse(httpRequest.responseText);
//   console.log(data);
//   for(let i = 0; i < 10; i++) {
//     addInfo('h3', data[i].name, 'name');
//     addInfo('p', data[i].email, 'email');
//     addInfo('p', data[i].body, 'body');
//   }
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();