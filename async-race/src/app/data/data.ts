import { GameData } from '../types/types';

export const requestUrl = 'http://localhost:3000';

export const path = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
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
};
