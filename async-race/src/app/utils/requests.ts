import { path, requestUrl } from '../data/data';
import { CarData, CarsData, GarageData } from '../types/types';

export const getGarageData = async (currentPage: number): Promise<GarageData | void> => fetch(`${requestUrl}${path.garage}?_page=${currentPage}&_limit=7`).then(
  (response) => response.json().then(
    (cars: CarsData) => {
      const carsNumber = Number(response.headers.get('X-Total-Count'));
      const carsPagesNumber = Math.ceil(carsNumber / 7);
      return { cars, carsNumber, carsPagesNumber };
    },
    (err: string) => {
      throw new Error(err);
    },
  ),
  (err: string) => {
    throw new Error(err);
  },
);

export const createCar = async (carName: string, carColor: string): Promise<CarData | void> => fetch(`${requestUrl}${path.garage}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: carName,
    color: carColor,
  }),
}).then(
  (result) => result.json().then(
    (carData: CarData) => carData,
    (err: string) => {
      throw new Error(err);
    },
  ),
  (err: string) => {
    throw new Error(err);
  },
);

export const updateCar = async (carId: number, carName: string, carColor: string): Promise<CarData | void> => fetch(`${requestUrl}${path.garage}/${carId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: carName,
    color: carColor,
  }),
}).then(
  (result) => result.json().then(
    (carData: CarData) => carData,
    (err: string) => {
      throw new Error(err);
    },
  ),
  (err: string) => {
    throw new Error(err);
  },
);
