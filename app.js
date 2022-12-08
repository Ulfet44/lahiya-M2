
const iconSort = document.querySelector(".sort");
const input = document.querySelector("input");
const deleteText = document.querySelector(".delete");
const addName = document.querySelector(".addName");
const ul = document.querySelector(".list");

addName.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let spn = document.createElement('span')
  // li.innerText = input.value;
  let btn = document.createElement("button");
  let img = document.createElement("img");
  btn.classList.add("remove");
  img.src = "./icons/Group 77.svg";
  img.setAttribute("alt", "");
  btn.append(img);
  li.append(btn)
  spn.innerText = input.value
  li.append(spn)
  ul.append(li);
  if ((ul.style.display = "none")) {
    ul.style.display = "block";
  }
  else if (ul.firstChild.value == "") {
    ul.style.display = "none";
  }
  else { }

  btn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
    if (ul.firstChild.value == "") {
      ul.style.display = "none";
    } else { }
  });


});

deleteText.addEventListener("click", (e) => {
  input.value = "";
});

let sorted = true
iconSort.addEventListener("click", () => {
  let arr = []
  const listElement = document.querySelectorAll('.list li span')
  console.log(listElement);
  // const sorteded = document.querySelector('.list li span')
  listElement.forEach((item) => {
    arr.push(item.textContent)
  })
  
  if (sorted) {
    arr.sort()
    sorted = false
    listElement.forEach((item, index) => {
      item.textContent = arr[index]
    })
  } else {
    arr.reverse()
    listElement.forEach((item, index) => {
      item.textContent = arr[index]
    })
    sorted = true
  }
  console.log(arr)
})