window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

let bar = document.querySelector("header nav .bar");
let clos = document.querySelector("header nav .close");
let ul = document.querySelector("ul");
let as = document.querySelectorAll("header ul a");

var map = L.map("map");

bar.addEventListener("click", () => {
  // ul.style.display = "flex";
  ul.style.right = "0";
});

clos.addEventListener("click", () => {
  // ul.style.display = "none";
  ul.style.right = "-250px";
});

as.forEach((a) => {
  a.addEventListener("mouseover", function () {
    as.forEach((a) => {
      a.classList.remove("active");
    });
    if (!a.classList.contains("color")) {
      a.classList.add("active");
    }
    a.addEventListener("mouseout", function () {
      a.classList.remove("active");
    });
  });
});

let slider = document.querySelector(".landing .slider");
let landing = document.querySelector(".landing");
let slide = document.querySelectorAll(".slider li");
let p2 = document.querySelector(".slider .p2");

slide.forEach((li) => {
  li.addEventListener("click", function () {
    slide.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    if (li.classList.contains("p2", "active")) {
      landing.classList.add("back");
    } else {
      landing.classList.remove("back");
    }
  });
});

let lis = document.querySelectorAll(".classes .box.two ul li");
let words = document.querySelectorAll(".classes .box.two .words");

lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    words.forEach((word) => {
      word.style.display = "none";
    });
    document.querySelector(
      `.classes .box.two ${li.dataset.word}`
    ).style.display = "block";
  });
});

let uls = document.querySelectorAll(".classes .box.three ul li");
let word = document.querySelectorAll(".classes .box.three .words");

uls.forEach((li) => {
  li.addEventListener("click", function () {
    uls.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    word.forEach((wor) => {
      wor.style.display = "none";
    });
    document.querySelector(
      `.classes .box.three ${li.dataset.wor}`
    ).style.display = "block";
  });
});

var span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 300) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const displaymap = () => {
  map.setView([29.969072, 32.536569], 13);
  var marker = L.marker([29.969072, 32.536569]).addTo(map);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
};
displaymap();
