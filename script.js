const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const bgm = document.getElementById("bgm");

let currentIdx = 0;

slides = [
  {
    line1: "Here we go...",
    line2: "Get ready!",
  },
  {
    line1: "quand je dis HU",
    line2: "vous dites GO",
  },
  {
    line1: "quand je dis HUG",
    line2: "vous dites O",
  },
  {
    line1: "quand je dis HUGO",
    line2: "vous dites rien.",
  },
  {
    line1: "on continue !",
    line2: " ",
  },
  {
    line1: "quand je dis PA",
    line2: "vous dites STEQUE",
  },
  {
    line1: "quand je dis ME",
    line2: "vous dites ZINE",
  },
  {
    line1: "quand je dis IMPRO",
    line2: "vous dites ACADEMY",
  },
  {
    line1: "quand je dis ORNI",
    line2: "vous dites THORYNQUE",
  },
  {
    line1: "quand je dis LI",
    line2: "vous dites LLOIS",
  },
  {
    line1: "quand je dis SCENE",
    line2: "vous dites OUVERTE",
  },
  {
    line1: "quand je dis MERCI",
    line2: "vous dites DE RIEN",
  },
  {
    line1: "quand je dis (un calcul)",
    line2: "vous dites (la réponse)",
  },
  {
    line1: "3 + 2",
    line2: "= ?",
  },
  {
    line1: "6 x 4",
    line2: "= ?",
  },
  {
    line1: "7²",
    line2: "= ?",
  },
  {
    line1: "2x² - 9x - 5 = 0",
    line2: "x = ?",
  },
  {
    img: "./assets/trinome.png",
  },
  {
    line1: "on reste dedans !",
    line2: " ",
  },
  {
    line1: "quand je dis SIX",
    line2: "vous dites AVRIL",
  },
  {
    line1: "quand je dis VINGT",
    line2: "vous dites CINQ",
  },
  {
    line1: "quand je dis WE LOVE",
    line2: "vous dites HUGO",
  },
  {
    line1: "et enfin....",
    line2: " ",
  },
  {
    line1: "quand je dis JOYEUX",
    line2: "vous dites z'ANNIF",
  },
  {
    class2: "small",
    line1: "quand je dis HUGO",
    line2:
      "vous vous tournez vers lui et lui faites un compliment sincère toustes en même temps",
  },
  {
    line1: "quand je dis C'EST",
    line2: "vous dites FINI",
  },
  {
    img: "./assets/fin.png",
  },
];

function changeSlide(newSlideIdx) {
  const slide = slides.at(newSlideIdx);
  if (!slide) {
    return;
  }

  if (slide.line1 && slide.line2) {
    line1.innerHTML = slide.line1;
    line2.innerHTML = slide.line2;
  }

  if (slide.img) {
    line1.innerHTML = `<img src="${slide.img}" alt="slide image" />`;
    line2.innerHTML = "";
  }

  if (slide.class2 === "small") {
    line2.classList.add("small");
  } else {
    line2.classList.remove("small");
  }

  currentIdx = newSlideIdx;
}

changeSlide(currentIdx);

function nextSlide() {
  currentIdx = (currentIdx + 1) % slides.length;
  changeSlide(currentIdx);
}

function prevSlide() {
  currentIdx = (currentIdx - 1 + slides.length) % slides.length;
  changeSlide(currentIdx);
}

// Change slides when pressing arrow keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "m") {
    toggleBgm();
  }
});

function toggleBgm() {
  if (bgm.muted) {
    bgm.muted = false;
  } else {
    bgm.muted = true;
  }
}
