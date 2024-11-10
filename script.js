



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




