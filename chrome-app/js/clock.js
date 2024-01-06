const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침 했을 때 1초후에 시간이 출력되므로, 바로 시간이 출력되도록 함수를 실행시킴.
setInterval(getClock, 1000);
