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
}

export type ElAttributes = ElAttribute[];