let cont = document.querySelector(".container");
let div = document.querySelector(".div1");
let but = document.querySelector(".button1");
let but2 = document.querySelector(".button2");
let but3 = document.querySelector(".button3");

but.addEventListener("click", function () {
  div.remove();

  cont.appendChild(but);
  cont.classList.add("cont");
  but.classList.add("but1");

  but = Math.floor(Math.random() * 3);
  console.log(but);
  if (but == 0) {
    let win = document.createElement("p");
    cont.appendChild(win);
    win.innerHTML = "You Win";
    win.classList.add("winstyle");
    cont.appendChild(but3);
  } else if (but == 1) {
    let lose = document.createElement("p");
    cont.appendChild(lose);
    lose.innerHTML = "You Lose";
    lose.classList.add("losestyle");
    cont.appendChild(but2);
  } else if (but == 2) {
    let draw = document.createElement("p");
    cont.appendChild(draw);
    draw.innerHTML = "draw";
    draw.classList.add("drawstyle");
    let draw2 = document.createElement("div");
    draw2.innerHTML = "Rock";
    cont.appendChild(draw2);
    draw2.classList.add("button1");
  }
});

but2.addEventListener("click", function () {
  div.remove();

  cont.appendChild(but2);
  cont.classList.add("cont");
  but2.classList.add("but1");

  but2 = Math.floor(Math.random() * 3);
  if (but2 == 0) {
    let win = document.createElement("p");
    cont.appendChild(win);
    win.innerHTML = "You Win";
    win.classList.add("winstyle");
    cont.appendChild(but);
  } else if (but2 == 1) {
    let lose = document.createElement("p");
    cont.appendChild(lose);
    lose.innerHTML = "You Lose";
    lose.classList.add("losestyle");
    cont.appendChild(but3);
  } else if (but2 == 2) {
    let draw = document.createElement("p");
    cont.appendChild(draw);
    draw.innerHTML = "draw";
    draw.classList.add("drawstyle");
    let draw2 = document.createElement("div");
    draw2.innerHTML = "Paper";
    cont.appendChild(draw2);
    draw2.classList.add("button2");
  }
});

but3.addEventListener("click", function () {
  div.remove();

  cont.appendChild(but3);
  cont.classList.add("cont");
  but3.classList.add("but1");

  but3 = Math.floor(Math.random() * 3);
  if (but3 == 0) {
    let win = document.createElement("p");
    cont.appendChild(win);
    win.innerHTML = "You Win";
    win.classList.add("winstyle");
    cont.appendChild(but2);
  } else if (but3 == 1) {
    let lose = document.createElement("p");
    cont.appendChild(lose);
    lose.innerHTML = "You Lose";
    lose.classList.add("losestyle");
    cont.appendChild(but);
  } else if (but3 == 2) {
    let draw = document.createElement("p");
    cont.appendChild(draw);
    draw.innerHTML = "draw";
    draw.classList.add("drawstyle");
    let draw2 = document.createElement("div");
    draw2.innerHTML = "Scissors";
    cont.appendChild(draw2);
    draw2.classList.add("button3");
  }
});
