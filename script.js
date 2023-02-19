const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  // console.log(currentActive);
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
  // console.log(currentActive);
});
prev.addEventListener("click", () => {
  currentActive--;
  // console.log(currentActive);
  if (currentActive < 1) {
    currentActive = 1;
  }
  // console.log(currentActive);
  update();
});
// updated function is created for update
function update() {
  circle.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  // this logic is built for when user click the button  active button and progress line forward simultaneously
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  //  previous return button code
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
