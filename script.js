const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const h1 = document.querySelector(".head_h1");

one.onclick = function () {
  one.classList.add("active");
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  five.classList.remove("active");
  six.classList.remove("active");
  seven.classList.remove("active");
  h1.innerText = "April 2018";
};

two.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.remove("active");
  four.classList.remove("active");
  five.classList.remove("active");
  six.classList.remove("active");
  seven.classList.remove("active");
  h1.innerText = "April 2019";
};
three.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.remove("active");
  five.classList.remove("active");
  six.classList.remove("active");
  seven.classList.remove("active");
  h1.innerText = "April 2020";
};
four.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  five.classList.remove("active");
  six.classList.remove("active");
  seven.classList.remove("active");
  h1.innerText = "April 2021";
};
five.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  five.classList.add("active");
  six.classList.remove("active");
  seven.classList.remove("active");
  h1.innerText = "April 2022";
};
six.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  five.classList.add("active");
  six.classList.add("active");
  seven.classList.remove("active");
  h1.innerText = "April 2023";
};
seven.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  five.classList.add("active");
  six.classList.add("active");
  seven.classList.add("active");
  h1.innerText = "April 2024";
};
