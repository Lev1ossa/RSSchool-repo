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
  tag: string,
  class: string,
  tooltip: string,
}

export type TableItems = TableItem[];

export type HtmlEditorItem = {
  tag: string,
  selector: string,
  children: HtmlEditorItem[],
}

export type HtmlEditorItems = HtmlEditorItem[];

export type LevelData = {
  title: string,
  helpTag: string,
  status: Statuses,
  tableItems: TableItems,
  htmlEditorItems: HtmlEditorItems,
}

export type LevelsData = Record<number, LevelData>;
