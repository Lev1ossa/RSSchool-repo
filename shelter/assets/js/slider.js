const PETS = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pet-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pet-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pet-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pet-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pet-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pet-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pet-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pet-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

const baseArr = [1, 2, 3, 4, 5, 6, 7, 8];
const pastArr = [];
const currArr = [];
const nextArr = [];

const generateNewArr = (checkArr) => {
  const newArr = [];
  const cleanBaseArr = baseArr.filter(item => !checkArr.includes(item));
  
  for (let i = 0; i < 3; i++) {
   let randomIdx = Math.floor(Math.random() * (cleanBaseArr.length - 1));
   newArr.push(cleanBaseArr.splice(randomIdx, 1)[0]);
  }

  return newArr;
}

const initSlider = () => {
  pastArr.splice(0, pastArr.length, ...generateNewArr([]));
  currArr.splice(0, currArr.length, ...generateNewArr(pastArr));
  nextArr.splice(0, nextArr.length, ...generateNewArr(currArr));
}

const sliderForward = () => {
  pastArr.splice(0, pastArr.length, ...currArr);
  currArr.splice(0, currArr.length, ...nextArr);
  nextArr.splice(0, nextArr.length, ...generateNewArr(currArr));
};

const sliderBackward = () => {
  nextArr.splice(0, nextArr.length, ...currArr);
  currArr.splice(0, currArr.length, ...pastArr);
  pastArr.splice(0, pastArr.length, ...generateNewArr(currArr));
};

initSlider();

const sliderPrev = document.querySelector('.slider-prev');
const sliderCurr = document.querySelector('.slider-current');
const sliderNext = document.querySelector('.slider-next');

const updCardsInfo = () => {
  currArr.forEach((item, idx) => {
    sliderCurr.children[idx].children[0].children[0].src = PETS[item - 1].img;
    sliderCurr.children[idx].children[0].children[0].alt = PETS[item - 1].type + ' ' + PETS[item - 1].name;
    sliderCurr.children[idx].children[1].children[0].innerHTML = PETS[item - 1].name;
  })

  pastArr.forEach((item, idx) => {
    sliderPrev.children[idx].children[0].children[0].src = PETS[item - 1].img;
    sliderPrev.children[idx].children[0].children[0].alt = PETS[item - 1].type + ' ' + PETS[item - 1].name;
    sliderPrev.children[idx].children[1].children[0].innerHTML = PETS[item - 1].name;
  })

  nextArr.forEach((item, idx) => {
    sliderNext.children[idx].children[0].children[0].src = PETS[item - 1].img;
    sliderNext.children[idx].children[0].children[0].alt = PETS[item - 1].type + ' ' + PETS[item - 1].name;
    sliderNext.children[idx].children[1].children[0].innerHTML = PETS[item - 1].name;
  })
}

updCardsInfo();

const BTN_LEFT = document.querySelector('.slider-left-button-form');
const BTN_RIGHT = document.querySelector('.slider-right-button-form');
const SLIDER = document.querySelector('.slider-wrapper');

BTN_LEFT.addEventListener('click', () => {
  SLIDER.classList.add('transition-left');
})

const moveLeft = () => {
  SLIDER.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  SLIDER.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

SLIDER.addEventListener('animationend', (e) => {
  if (e.animationName === "move-left") {
    SLIDER.classList.remove("transition-left");
    sliderBackward();
  } else {
    SLIDER.classList.remove("transition-right");
    sliderForward();
  }

  updCardsInfo();
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})