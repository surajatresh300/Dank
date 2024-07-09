let url = "https://v2.jokeapi.dev/joke/Any";
let t1 = document.querySelector("#text");
let t2 = document.querySelector("#text2");
let t3 = document.querySelector("#text3");
let btn = document.querySelector("#btn");

const getData = async () => {
  console.log("Loading...");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
  if (data.setup.value != "undefined") {
    t1.innerText = data.setup;
  }
  if (data.delivery.value != "undefined") {
    t2.innerText = data.delivery;
  }
  if (data.joke.value != "undefined") {
    t3.innerText = data.joke;
  }
};

btn.addEventListener("click", getData);
