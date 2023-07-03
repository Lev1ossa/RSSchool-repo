type Callback = (event: Event) => void;

export type ListenersObj = Record<string, Callback>;

export interface ElementCreatorProps {
  tag: string;
  classes: string[];
  textContent: string;
  listeners: ListenersObj | null;
}

export enum Statuses {
  statusWin = 'win',
  statusWinHelp = 'winHelp',
  statusUnfinished = 'unfinished',
}

export type TableItem = {
  id: string,
  tag: string,
  class: string,
  tooltip: string,
}

export type TableItems = TableItem[];

export type HtmlEditorItem = {
  id: string,
  tag: string,
  selector: string,
  children: HtmlEditorItem[],
}

export type HtmlEditorItems = HtmlEditorItem[];

export type LevelData = {
  name: string,
  title: string,
  helpTag: string,
  status: Statuses,
  tableItems: TableItems,
  htmlEditorItems: HtmlEditorItems,
}

export type ElAttribute = {
  attribute: string,
  value: string,
}

export type ElAttributes = ElAttribute[];

export type LevelsData = Record<number, LevelData>;
