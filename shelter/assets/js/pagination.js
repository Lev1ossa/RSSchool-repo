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

const CARDS = document.querySelectorAll('.cards-item');
const LEFT_DOUBLE_BUTTON = document.querySelector('.nav-left-double-button');
const LEFT_BUTTON = document.querySelector('.nav-left-button');
const RIGHT_BUTTON = document.querySelector('.nav-right-button');
const RIGHT_DOUBLE_BUTTON = document.querySelector('.nav-right-double-button');
const NumberButton = document.querySelector('.nav-page-button');

const baseArr = [1, 2, 3, 4, 5, 6, 7, 8];

const shuffleArr = arr => {
  newArr = [...arr];
	for(let i = newArr.length - 1; i > 0; i--){ 
		let randomInt = Math.floor(Math.random() * (i + 1));
		let container = newArr[randomInt];
		newArr[randomInt] = newArr[i];
		newArr[i] = container;
	}
	return newArr;
}

const getPseudoRandomArr = () => {
  const resultArr = [];
  const randomArr = shuffleArr(baseArr);
  const chunkedArr = [];
  for (let i = 0; i < randomArr.length; i += 3) {
    chunkedArr.push(randomArr.slice(i, i + 3));
  }

  for (let i = 0; i < 6; i++) {
    chunkedArr.forEach(item => resultArr.push(shuffleArr(item)));
  }

  return resultArr.flat();
}

pseudoRandomArr = getPseudoRandomArr();

const getCurrentWidthPoint = () => {
  let currentClientWidth = document.documentElement.clientWidth;
  let currentMediaPoint;
  if (currentClientWidth < 768) {
    currentMediaPoint = 320;
  } else if (currentClientWidth < 1280) {
    currentMediaPoint = 768;
  } else {
    currentMediaPoint = 1280;
  }
  return currentMediaPoint;
};

const getNumberOfPages = () => {
  let currentWidthPoint = getCurrentWidthPoint();
  let numOfPages = 0;
  if (currentWidthPoint == 320) {
    numOfPages = 16;
  } else if (currentWidthPoint == 768) {
    numOfPages = 8;
  } else if (currentWidthPoint == 1280) {
    numOfPages = 6;
  }
  return numOfPages;
};

let numberOfPages = getNumberOfPages();
let prevNumberOfPages = numberOfPages;

const updCards = () => {
  const currentPage = Number(NumberButton.innerHTML);
  const numberOfElements = 48 / numberOfPages;
  let startIdx = (currentPage - 1) * numberOfElements;
  let endIdx = startIdx + 8;
  const currentPageArr = pseudoRandomArr.slice(startIdx, endIdx);
  
  currentPageArr.forEach((item, idx) => {
    CARDS[idx].children[0].children[0].src = PETS[item - 1].img;
    CARDS[idx].children[0].children[0].alt = PETS[item - 1].type + ' ' + PETS[item - 1].name;
    CARDS[idx].children[1].children[0].innerHTML = PETS[item - 1].name;
  });
}

updCards();

const updButtons = () => {
  if (Number(NumberButton.innerHTML) == 1) {
    LEFT_DOUBLE_BUTTON.disabled = true;
    LEFT_BUTTON.disabled = true;
    RIGHT_BUTTON.disabled = false;
    RIGHT_DOUBLE_BUTTON.disabled = false;
  } else if (Number(NumberButton.innerHTML) == numberOfPages) {
    LEFT_DOUBLE_BUTTON.disabled = false;
    LEFT_BUTTON.disabled = false;
    RIGHT_BUTTON.disabled = true;
    RIGHT_DOUBLE_BUTTON.disabled = true;
  } else {
    LEFT_DOUBLE_BUTTON.disabled = false;
    LEFT_BUTTON.disabled = false;
    RIGHT_BUTTON.disabled = false;
    RIGHT_DOUBLE_BUTTON.disabled = false;
  }
};

updButtons();

const updCurrPage = () => {
  if (Number(NumberButton.innerHTML) > numberOfPages){
    NumberButton.innerHTML = numberOfPages;
  }
};

window.addEventListener('resize', function(e){
  numberOfPages = getNumberOfPages();
  if (!(prevNumberOfPages == numberOfPages)){
    updCurrPage();
    updCards();
    updButtons();
    prevNumberOfPages = numberOfPages;
  }
});

LEFT_DOUBLE_BUTTON.addEventListener('click', (e) => {
  NumberButton.innerHTML = '1';
  updCards();
  updButtons();
});

LEFT_BUTTON.addEventListener('click', (e) => {
  let currentPage = Number(NumberButton.innerHTML);
  NumberButton.innerHTML = currentPage - 1;
  updCards();
  updButtons();
});

RIGHT_BUTTON.addEventListener('click', (e) => {
  let currentPage = Number(NumberButton.innerHTML);
  NumberButton.innerHTML = currentPage + 1;
  updCards();
  updButtons();
});

RIGHT_DOUBLE_BUTTON.addEventListener('click', (e) => {
  NumberButton.innerHTML = numberOfPages;
  updCards();
  updButtons();
});

console.log(pseudoRandomArr);
