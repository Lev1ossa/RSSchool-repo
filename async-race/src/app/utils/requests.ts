import { path, requestUrl } from '../data/data';
import { CarsData, GarageData } from '../types/types';

export const getGarageData = async (currentPage: number): Promise<GarageData> => {
  const response = await fetch(`${requestUrl}${path.garage}?_page=${currentPage}&_limit=7`);
  const cars: CarsData = await response.json();
  const carsNumber = Number(response.headers.get('X-Total-Count'));
  const carsPagesNumber = Math.ceil(carsNumber / 7);
  return { cars, carsNumber, carsPagesNumber };
};
