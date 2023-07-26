import { path, requestUrl } from '../data/data';
import {
  CarData, CarMoveProps, CarsData, EngineProps, GarageData, Winner, WinnersCarsData, WinnersData,
} from '../types/types';

export const getGarageData = async (currentPage: number): Promise<GarageData> => fetch(`${requestUrl}${path.garage}?_page=${currentPage}&_limit=7`).then(
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

export const createCar = async (carName: string, carColor: string): Promise<CarData> => fetch(`${requestUrl}${path.garage}`, {
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

export const updateCar = async (carId: number, carName: string, carColor: string): Promise<CarData> => fetch(`${requestUrl}${path.garage}/${carId}`, {
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

export const deleteCar = async (carId: number): Promise<void> => {
  fetch(
    `${requestUrl}${path.garage}/${carId}`,
    {
      method: 'DELETE',
    },
  ).then(
    () => {},
    (err) => {
      throw new Error(err);
    },
  );
};

export const patchCarEngine = async (carId: number, carStatus: string): Promise<CarMoveProps> => fetch(`${requestUrl}${path.engine}?id=${carId}&status=${carStatus}`, {
  method: 'PATCH',
}).then(
  (response) => {
    // if (response.status === 500) {

    // }
    const { status } = response;
    return response.json().then(
      (engineProps: EngineProps) => {
        const carMoveProps: CarMoveProps = { engineProps, carId, status };
        return carMoveProps;
      },
      (err) => {
        const error = new Error(err);
        error.message = '500';
        throw error;
      },
    );
  },
  (err) => {
    throw new Error(err);
  },
);

export const getCar = async (carId: number): Promise<CarData> => fetch(`${requestUrl}${path.garage}/${carId}`, {
  method: 'GET',
}).then(
  (response) => response.json().then(
    (carData: CarData) => carData,
    (err) => { throw new Error(err); },
  ),
  (err) => { throw new Error(err); },
);

export const getWinner = async (carId: number): Promise<Winner> => fetch(`${requestUrl}${path.winners}/${carId}`, {
  method: 'GET',
}).then(
  (response) => response.json().then(
    (winner: Winner) => winner,
    (err) => { throw new Error(err); },
  ),
  (err) => { throw new Error(err); },
);

export const deleteWinner = async (carId: number): Promise<void> => fetch(`${requestUrl}${path.winners}/${carId}`, {
  method: 'DELETE',
}).then(
  () => {},
  (err) => { throw new Error(err); },
);

export const CreateWinner = async (carId: number, carWins: number, carTime: number): Promise<void> => fetch(`${requestUrl}${path.winners}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: `${carId}`,
    wins: `${carWins}`,
    time: `${carTime}`,
  }),
}).then(
  () => {},
  (err) => { throw new Error(err); },
);

export const updateWinner = async (carId: number, carWins: number, carTime: number): Promise<void> => fetch(`${requestUrl}${path.winners}/${carId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    wins: `${carWins}`,
    time: `${carTime}`,
  }),
}).then(
  () => {},
  (err) => { throw new Error(err); },
);

export const getWinnersData = async (currentPage: number, sortProp: string, orderProp: string): Promise<WinnersData> => fetch(`${requestUrl}${path.winners}?_page=${currentPage}&_limit=10&_sort=${sortProp}&_order=${orderProp}`).then(
  (response) => response.json().then(
    (winnersCarsData: WinnersCarsData) => {
      const winnersNumber = Number(response.headers.get('X-Total-Count'));
      const winnersPagesNumber = Math.ceil(winnersNumber / 10);
      return { winnersCarsData, winnersNumber, winnersPagesNumber };
    },
    (err: string) => {
      throw new Error(err);
    },
  ),
  (err: string) => {
    throw new Error(err);
  },
);
