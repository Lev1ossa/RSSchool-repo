import type { RaceTrackView } from '../view/main/garage/race/raceTrack/raceTrackView';

export type Callback = (event: Event) => void;

export type ListenersObj = Record<string, Callback>;

export interface ElementCreatorProps {
  tag: string;
  classes: string[];
  textContent: string;
  listeners: ListenersObj | null;
}

export type ElAttribute = {
  attribute: string,
  value: string,
};

export type ElAttributes = ElAttribute[];

export interface InputElementCreatorProps {
  blockProps: ElementCreatorProps,
  inputProps: ElementCreatorProps,
  inputColorProps: ElementCreatorProps,
  buttonProps: ElementCreatorProps,
  buttonName: string,
}

export type GameData = {
  currentPage: number,
  selectedCarID: number,
  selectedCarName: string,
  selectedCarColor: string,
  numberOfRandomCars: number,
  carLength: number,
  carsOnPage: RaceTrackView[],
  raceActive: boolean,
  currentWinnerID: number,
};

export type CarData = {
  name: string,
  color: string,
  id: number,
};

export type CarsData = CarData[];

export type GarageData = {
  cars: CarsData,
  carsNumber: number,
  carsPagesNumber: number,
};

export type EngineProps = {
  velocity: number,
  distance: number,
};

export type CarMoveProps = {
  engineProps: EngineProps,
  carId: number,
  status: number,
};

export type WinnerProps = {
  carId: number,
  carTime: number,
};
