let card = document.querySelector('.weatherCard');
let weatherNextDays = document.querySelector('.weatherNextDays');
let button = document.querySelector('.showMore');
let city = document.querySelector('.city');
let image = document.querySelector('.img');
let temperature = document.querySelector('.temperature');

let now = new Date().toLocaleString().slice(0, -10);

let todayDate = document.querySelector('.date');
todayDate.innerText = `${now}`;

button.addEventListener('click', () => {
  card.classList.toggle('active');
})

function renderRow(date, img, temp) {
  // создать div строку, создать внутренние div-ы, создать img, наполнить всё данными, поместить в разматку
  let nowDate = document.createElement('div');
  let time = document.createElement('div');
  let dayDate = date.split(' ')[0];
  nowDate.innerText = `${dayDate}`;

  let image = document.createElement('img');
  image.src = `https://openweathermap.org/img/wn/${img}@2x.png`;

  let temperature = document.createElement('div')
  temperature.innerText = `${temp.toFixed()}°C`;

  let mainBlock = document.createElement('div');
  mainBlock.classList.add('row');
  mainBlock.appendChild(nowDate);
  mainBlock.appendChild(time);
  mainBlock.appendChild(image);
  mainBlock.appendChild(temperature);

  weatherNextDays.appendChild(mainBlock);
}

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function() { 
  let info = JSON.parse(httpRequest.responseText);
  city.innerText = info.city.name;

  let icon = info.list[0].weather[0].icon;
  image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;


  let temp = info.list[0].main.temp;
  temperature.innerText = `${temp.toFixed()}°C`;
  for (let i = 0; i < 40; i += 8) {
    renderRow(info.list[i].dt_txt, info.list[i].weather[0].icon, info.list[i].main.temp);
  }

  card.style.background = `url(images/${icon.slice(0,2)}.jpg)`;

};

httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric');
httpRequest.send();