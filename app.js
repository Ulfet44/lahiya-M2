
const iconSort = document.querySelector(".sort");
const input = document.querySelector("input");
const deleteText = document.querySelector(".delete");
const addName = document.querySelector(".addName");
const ul = document.querySelector(".list");

addName.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = input.value;
  let btn = document.createElement("button");
  let img = document.createElement("img");
  btn.classList.add("remove");
  img.src = "./icons/Group 77.svg";
  img.setAttribute("alt", "");
  btn.append(img);
  li.append(btn);
  ul.append(li);
  if ((ul.style.display = "none")) {
    ul.style.display = "block";
  } else {
  }
  btn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
    if (ul.value = "") {
      ul.style.display = "none";
    }
  });
});

deleteText.addEventListener("click", (e) => {
  input.value = "";
});