import { Statuses } from "../types/types";

export const levelsData = {
  1: {
    name: 'level1',
    title: 'Select all white plates',
    helpTag: 'plate',
    status: Statuses.statusUnfinished,
    tableItems: [
      {
        id: '1',
        tag: 'plate',
        class: 'skew',
        tooltip: '<plate></plate>',
      },
      {
        id: '2',
        tag: 'plate',
        class: 'skew',
        tooltip: '<plate></plate>',
      }
    ],
    htmlEditorItems: [
      {
        id: '0',
        tag: 'div',
        selector: 'class="table"',
        children: [
          {
            id: '1',
            tag: 'plate',
            selector: 'id="hey"',
            children: [],
          },
          {
            id: '2',
            tag: 'plate',
            selector: 'id="yeh"',
            children: [],
          }
        ]
      }
    ]
  }
}
