import { carBrands, carModels } from '../data/data';
import { CarData } from '../types/types';
import { createCar } from './requests';

export const getRandomCarName = (): string => `${carBrands[Math.floor(Math.random() * carBrands.length)]} ${carModels[Math.floor(Math.random() * carModels.length)]}`;

export const getRandomCarColor = (): string => {
  const colorStrLength = 6;
  const symbols = '0123456789ABCDEF';
  let randomColor = '';
  for (let i = 0; i < colorStrLength; i += 1) {
    randomColor += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return `#${randomColor}`;
};

export const createRandomCars = async (): Promise<void> => {
  const randomCars: Promise<CarData | void>[] = new Array(100).fill('').map(
    () => createCar(getRandomCarName(), getRandomCarColor()),
  );
  Promise.all(randomCars).then(
    () => {},
    (err) => {
      throw new Error(err);
    },
  );
};
