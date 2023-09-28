const popup = document.querySelector('.popup-card');
const popupBtn = document.querySelector('.popup-button');
const sliderItems = document.querySelectorAll('.slider-item');


let currentActivePopup = false;

const toggleActivePopup = function() {
  popupBtn.classList.toggle('active');
  popup.classList.toggle('active');
  if (currentActivePopup) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }

  currentActivePopup = !currentActivePopup;
}

const updPopup = (sliderItem) => {
  let petName = sliderItem.children[1].children[0].innerHTML;
  let currPet = PETS.find(item => item.name == petName);

  popup.children[1].children[0].children[0].src = currPet.img;
  popup.children[1].children[1].children[0].children[0].innerHTML = currPet.name;
  popup.children[1].children[1].children[0].children[1].innerHTML = currPet.type + ' - ' + currPet.breed;
  popup.children[1].children[1].children[1].innerHTML = currPet.description;
  popup.children[1].children[1].children[2].children[0].innerHTML = `<span class="popup-list-bold">Age:</span> ${currPet.age}</li>`;
  popup.children[1].children[1].children[2].children[1].innerHTML = `<span class="popup-list-bold">Inoculations:</span> none</li>`;
  popup.children[1].children[1].children[2].children[2].innerHTML = `<span class="popup-list-bold">Diseases:</span> none</li>`;
  popup.children[1].children[1].children[2].children[3].innerHTML = `<span class="popup-list-bold">Parasites:</span> none</li>`;

}

popupBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleActivePopup();
});

document.addEventListener('click', function (e) {
  const clickTarget = e.target;
  const targetPopup = clickTarget == popup || popup.contains(clickTarget);
  const targetPopupBtn = clickTarget == popupBtn;
  const popupActive = popup.classList.contains('active');

  if(!targetPopup && !targetPopupBtn && popupActive) {
    toggleActivePopup();
  }
});

for (let i = 0; i < 9; i++) {
  sliderItems[i].addEventListener('click', (e) => {
    e.stopPropagation();
    updPopup(sliderItems[i]);
    toggleActivePopup();
    
  });
}

