

const images = [...document.querySelectorAll('.slider-item-img')];
const slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05; // smaller = slower

// init img src
images.forEach((img, i)=> {
  img.style.backgroundImage = `url('${img.dataset.img}')`;
});

// linear interpolation
const lerp = (start, end, t) => {
  return start * (1-t) + end * t;
}

const setTransform = (el, transform) => {
  el.style.transform = transform;
}

const initSlider = () => {
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

const animateImages = () => {
  let ratio = current / imageWidth;
  let intersectionRatioValue;
  
  images.forEach((img, i) => {
    intersectionRatioValue = ratio - (i * 0.15);
    setTransform(img, `translateX(${intersectionRatioValue * 20}px)`)
  })
}

const animate = () => {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(slider, `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate);
}

initSlider();
animate();

// MILESTONE NUMBER

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  const speed = 100; // Speed of counting

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 50);
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  });
});





var sliderCounter = 0;
var sliderContent = [
  "Web Development",
  "WordPress Development",
  "App Development",
  "Plugin Development",
  "CRM Integrations"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);




