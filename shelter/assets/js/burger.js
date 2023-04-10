const navList = document.querySelector('.nav-list');
const burgerBtn = document.querySelector('.burger-menu');

let currentActive = false;

const toggleActive = function() {
  burgerBtn.classList.toggle('active');
  navList.classList.toggle('active');
  if (currentActive) {
    document.body.style.overflow = "";
  } else {
    window.scrollTo(0,0);
    document.body.style.overflow = "hidden";
  }

  currentActive = !currentActive;
}

burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleActive();
});

document.addEventListener('click', function (e) {
  const clickTarget = e.target;
  // const targetNav = clickTarget == navList || navList.contains(clickTarget);
  const targetNav = clickTarget == navList;
  const targetBurgetBtn = clickTarget == burgerBtn;
  const NavActive = navList.classList.contains('active');

  if(!targetNav && !targetBurgetBtn && NavActive) {
    toggleActive();
  }
});