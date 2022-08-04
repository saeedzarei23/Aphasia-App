// we make our selection over here
const main = document.querySelector("#main"),
  foodbtn = document.querySelector("#food"),
  painbtn = document.querySelector("#pain"),
  pain = document.querySelector(".pain"),
  food = document.querySelector(".food"),
  emotion = document.querySelector(".emotion"),
  emotionbtn = document.querySelector("#emotion"),
  back4 = document.querySelector("#back4"),
  back3 = document.querySelector(".back3"),
  back2 = document.querySelector(".back2"),
  back1 = document.querySelector(".back1"),
  back = document.querySelector(".back"),
  yesOrNow = document.querySelector(".yesOrNow"),
  evaluate = document.querySelector("#head"),
  container = [...document.querySelectorAll(".container")],
  norm = [...document.querySelectorAll(".normal")],
  norm2 = document.querySelector(".normal"),
  yesOrNowbtn = document.querySelector("#yesOrnow");

// this event listner is for moving in ton different pages of app
/*
each of this if statment is for moving into the next page
*/
 
document.addEventListener("click", function (e) {
  // this is for pain
  if (
    e.target === painbtn ||
    e.target.matches(".pain-pic") ||
    e.target.matches(".pain-text-titel")
  ) {
    main.classList.add("hide");
    pain.classList.remove("hide");
  }
  // this for going back into main page form food page
  if (e.target === back || e.target.matches(".img-back")) {
    food.classList.add("hide");
    main.classList.remove("hide");
  }
  // this for going back into main page form yes or now  page
  if (e.target === back1 || e.target.matches(".backy")) {
    main.classList.remove("hide");
    yesOrNow.classList.add("hide");
  }
  // this for going back into main page form pain  page
  if (e.target === back2 || e.target.matches(".img-back2")) {
    pain.classList.add("hide");
    main.classList.remove("hide");
  }
  // this for going back into main page form emotion  page
  if (e.target === back3 || e.target.matches(".img-back3")) {
    emotion.classList.add("hide");
    main.classList.remove("hide");
  }
  // this for going  into food page form main page
  if (
    e.target == foodbtn ||
    e.target.matches(".food-pic") ||
    e.target.matches(".food-text")
    ) {
      main.classList.add("hide");
      food.classList.remove("hide");
    }
    // this for going  into emtion page form main page
    if (
      e.target === emotionbtn ||
      e.target.matches(".emotion-pic") ||
      e.target.matches(".emotion-text")
      ) {
        main.classList.add("hide");
        emotion.classList.remove("hide");
      }
      // this for going back into main page form yes or now  page
      // this for going back into main page form yes or now  page
  if (e.target === yesOrNowbtn || e.target.matches(".yesOrnow-text")) {
    main.classList.add("hide");
    yesOrNow.classList.remove("hide");
  }
  if (e.target.matches(".pain-text") || e.target.matches(".pain-box")) {
    pain.classList.add("hide");
    evaluate.classList.remove("hide");
  }
  if (e.target.matches("#back6") || e.target.matches(".img-back6")) {
    evaluate.classList.add("hide");
    main.classList.remove("hide");
  }
});
container.forEach((container) => {
  container.addEventListener("click", (e) => {
    const normal = e.target;
    normal.classList.add("acttive");
    setTimeout(() => {
      normal.classList.remove("acttive");
    }, 5000);
  });
});
