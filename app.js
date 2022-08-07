
// some of the elemant might be unncecary so we 
// need to make dection about them later
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
    classAddOrRemove(main, pain);
  }
  // this for going back into main page form food page
  if (e.target === back || e.target.matches(".img-back")) {
    classAddOrRemove(food, main);
  }
  // this for going back into main page form yes or now  page
  if (e.target === back1 || e.target.matches(".backy")) {
    classAddOrRemove(yesOrNow, main);
  }
  // this for going back into main page form pain  page
  if (e.target === back2 || e.target.matches(".img-back2")) {
    classAddOrRemove(pain, main);
  }
  // this for going back into main page form emotion  page
  if (e.target === back3 || e.target.matches(".img-back3")) {
    classAddOrRemove(emotion, main);
  }
  // this for going  into food page form main page
  if (
    e.target == foodbtn ||
    e.target.matches(".food-pic") ||
    e.target.matches(".food-text")
  ) {
    classAddOrRemove(main, food);
  }
  // this for going  into emtion page form main page
  if (
    e.target === emotionbtn ||
    e.target.matches(".emotion-pic") ||
    e.target.matches(".emotion-text")
  ) {
    classAddOrRemove(main, emotion);
  }
  // this for going back into main page form yes or now  page
  // this for going back into main page form yes or now  page
  if (e.target === yesOrNowbtn || e.target.matches(".yesOrnow-text")) {
    classAddOrRemove(main, yesOrNow);
  }
  if (e.target.matches(".pain-text") || e.target.matches(".pain-box")) {
    classAddOrRemove(pain, evaluate);
  }
  if (e.target.matches("#back6") || e.target.matches(".img-back6")) {
    classAddOrRemove(evaluate, main);
  }
});


// we had probelm in this part so we write this code 
// for when touch or click on any h3 or img tag we add
// active class to the parent that way we avoid the 
// probelm 
//  probelm : when click on the img or h3 tag only the 
// get active calss becuse e.taget only get active class


container.forEach((container) => {
// in here add event listner to all of the continaer
// so when we click on any of then we add active class to them
  container.addEventListener("click", (e) => {
    const normal = e.target;

    // this is for the img when we click on it
    if (normal.matches("img")) {
      const grand = normal.parentElement;
      grand.classList.add("acttive");
      setTimeout(() => {
        grand.classList.remove("acttive");
      }, 5000);
    }
    // this is for the h3 when we click on it
    if (normal.matches("h3")) {
      const grand = normal.parentElement;
      grand.classList.add("acttive");
      setTimeout(() => {
        grand.classList.remove("acttive");
      }, 5000);
      
    }
    // this is for the div when we click on it
    normal.classList.add('acttive')
    setTimeout(() => {
      normal.classList.remove("acttive");
    }, 5000);
  });
});

// this function help us add or remove class to the
// elemant that we need so we dont repaet overself

function classAddOrRemove(add, remove) {
  add.classList.add("hide");
  remove.classList.remove("hide");
}
