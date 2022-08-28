// Scroll To Top
let span = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Toggle Menu
let toggler = document.querySelector("i.toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

// Fetch API
async function fetchData() {
  try {
    let myData = await fetch("/appartements.json");
    let appartements = await myData.json();
    let cont = document.querySelector(".cont");
    for (let i = 0; i < appartements.length; i++) {
      let box = document.createElement("div");
      box.className = "box";

      let image = document.createElement("div");
      image.className = "image";
      let img = document.createElement("img");
      img.src = appartements[i].img;
      image.appendChild(img);

      let text = document.createElement("div");
      text.className = "text";
      let h4 = document.createElement("h4");
      let h4Text = document.createTextNode(appartements[i].heading);
      h4.appendChild(h4Text);
      let p = document.createElement("p");
      let pText = document.createTextNode(appartements[i].price);
      p.appendChild(pText);
      let shower = document.createElement("p");
      let showerText = document.createTextNode(appartements[i].shower);
      let showerIcon = document.createElement("i");
      showerIcon.className = "fa-solid fa-shower";
      shower.appendChild(showerIcon);
      shower.appendChild(showerText);
      let bed = document.createElement("p");
      let bedText = document.createTextNode(appartements[i].bed);
      let bedIcon = document.createElement("i");
      bedIcon.className = "fas fa-bed";
      bed.appendChild(bedIcon);
      bed.appendChild(bedText);
      text.appendChild(h4);
      text.appendChild(p);
      text.appendChild(shower);
      text.appendChild(bed);

      box.appendChild(image);
      box.appendChild(text);
      cont.appendChild(box);
    }
  } catch (error) {
    console.log(new Error("Data Not Found"));
  }
}

fetchData();
