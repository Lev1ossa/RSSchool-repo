import { Statuses } from "../types/types";

export const levelsData = {
  1: {
    title: 'Select all white plates',
    helpTag: 'plate',
    status: Statuses.statusUnfinished,
    tableItems: [
      {
        tag: 'plate',
        class: 'skew',
        tooltip: '<plate></plate>',
      },
      {
        tag: 'plate',
        class: 'skew',
        tooltip: '<plate></plate>',
      }
    ],
    htmlEditorItems: [
      {
        tag: 'div',
        selector: 'class="table"',
        children: [
          {
            tag: 'plate',
            selector: 'id="hey"',
            children: [],
          },
          {
            tag: 'plate',
            selector: 'id="yeh"',
            children: [],
          }
        ]
      }
    ]
  }
}
