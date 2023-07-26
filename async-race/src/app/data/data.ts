import { GameData } from '../types/types';

export const requestUrl = 'http://localhost:3000';

export const path = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

export const carEngineStatuses = {
  start: 'started',
  stop: 'stopped',
  drive: 'drive',
};

export const sortProps = {
  wins: 'wins',
  time: 'time',
};

export const orderProps = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export const carBrands: string[] = [
  'Porsche',
  'Lamborgini',
  'Ferrari',
  'Maserati',
  'Lotus',
  'Dodge',
  'Tesla',
  'BMW',
  'Mercedes',
  'Ford'];

export const carModels: string[] = [
  'Diablo',
  'Enzo',
  '911s',
  'GranTurizmo',
  'Elise',
  'Viper',
  'ModelX',
  'M6',
  'SLR',
  'Mustang'];

export const gameData: GameData = {
  currentPage: 1,
  selectedCarID: 0,
  selectedCarName: '',
  selectedCarColor: '#000000',
  numberOfRandomCars: 100,
  carLength: 60,
  carsOnPage: [],
  carsActive: [],
  carsInRace: [],
  carsEngineBroken: [],
  raceActive: false,
  maxPage: 1,
  winnersCurrentPage: 1,
  winnersMaxPage: 1,
  sortProp: sortProps.time,
  orderProp: orderProps.DESC,
};
