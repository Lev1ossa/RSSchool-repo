import { Statuses } from "../types/types";

export const gameData = {
  currentLevel: '1',
  levelsData: {
    1: {
      name: 'level1',
      title: 'Time to dishwash! Select all white plates',
      helpTag: 'plate',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'plate',
          id: '',
          classes: ['skew'],
          children: [],
        },
        {
          tag: 'plate',
          id: '',
          classes: ['skew'],
          children: [],
        }
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    2: {
      name: 'level2',
      title: 'There no place for plates, you need to remove all bentos. Select all bentos',
      helpTag: 'bento',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [],
        },
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [],
        },
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [],
        },
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    3: {
      name: 'level3',
      title: `bento shouldn't be on plate. Select bento on plate`,
      helpTag: 'plate bento',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
            {
              tag: 'apple',
              id: '',
              classes: [],
              children: [],
            }
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
            {
              tag: 'bento',
              id: '',
              classes: ['skew'],
              children: [],
            }
          ],
        },
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [],
        }
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'plate',
              selector: '',
              children: [
                {
                  tag: 'apple',
                  selector: '',
                  children: [],
                },
              ],
            },
            {
              tag: 'plate',
              selector: '',
              children: [
                {
                  tag: 'bento',
                  selector: '',
                  children: [],
                }
              ],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
          ]
        }
      ]
    },
    4: {
      name: 'level4',
      title: `Fruits should be in freezer, not on table. Select all fruits`,
      helpTag: 'orange, apple',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'orange',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
          ],
        },
        {
          tag: 'apple',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'orange',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'orange',
              selector: '',
              children: [],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'apple',
              selector: '',
              children: [],
            },
            {
              tag: 'orange',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    5: {
      name: 'level5',
      title: `You don't need small plate, remove it! Select small plate`,
      helpTag: 'plate.small',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: ['skew', 'small'],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: [],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'plate',
              selector: 'class="small"',
              children: [],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    6: {
      name: 'level6',
      title: 'You dont need small green bento today, remove it! Select small green bento',
      helpTag: 'bento.small#green',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: '',
          classes: [''],
          children: [],
        },
        {
          tag: 'bento',
          id: 'green',
          classes: ['skew', 'small'],
          children: [],
        },
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [],
        },
        {
          tag: 'bento',
          id: '',
          classes: ['small'],
          children: [],
        }
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: 'class="small" id="green"',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: 'class="small"',
              children: [],
            },
          ]
        }
      ]
    },
    7: {
      name: 'level7',
      title: `Green bento only for holidays, remove it from table! Select green bento`,
      helpTag: 'bento#green',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [
          ],
        },
        {
          tag: 'bento',
          id: 'green',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [
          ],
        },
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: 'id="green"',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    8: {
      name: 'level8',
      title: `You need to clean table, remove all! Select all items`,
      helpTag: '*',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: ['skew'],
          children: [
            {
              tag: 'tomato',
              id: '',
              classes: ['skew'],
              children: [
              ],
            },
          ],
        },
        {
          tag: 'apple',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'orange',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: '',
              children: [
                {
                  tag: 'tomato',
                  selector: '',
                  children: [],
                },
              ],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'apple',
              selector: '',
              children: [],
            },
            {
              tag: 'orange',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    9: {
      name: 'level9',
      title: `You need to clean table, but you want orange. Remove all, except it! Select all items, except orange`,
      helpTag: ':not(orange)',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'plate',
          id: '',
          classes: ['skew'],
          children: [
            {
              tag: 'tomato',
              id: '',
              classes: ['skew'],
              children: [
              ],
            },
          ],
        },
        {
          tag: 'apple',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'orange',
          id: '',
          classes: [],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: '',
              children: [
                {
                  tag: 'tomato',
                  selector: '',
                  children: [],
                },
              ],
            },
            {
              tag: 'plate',
              selector: '',
              children: [],
            },
            {
              tag: 'apple',
              selector: '',
              children: [],
            },
            {
              tag: 'orange',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
    10: {
      name: 'level10',
      title: `Clean table from empty bento. Select all empty bentos`,
      helpTag: 'bento:empty',
      helpUsed: false,
      status: Statuses.statusUnfinished,
      tableItems: [
        {
          tag: 'bento',
          id: 'green',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'bento',
          id: '',
          classes: [],
          children: [
            {
              tag: 'tomato',
              id: '',
              classes: [],
              children: [
              ],
            },
          ],
        },
        {
          tag: 'bento',
          id: '',
          classes: ['skew'],
          children: [
          ],
        },
        {
          tag: 'orange',
          id: '',
          classes: [],
          children: [
          ],
        },
      ],
      htmlEditorItems: [
        {
          tag: 'div',
          selector: 'class="table"',
          children: [
            {
              tag: 'bento',
              selector: 'id="green"',
              children: [],
            },
            {
              tag: 'bento',
              selector: '',
              children: [
                {
                  tag: 'tomato',
                  selector: '',
                  children: [],
                },
              ],
            },
            {
              tag: 'bento',
              selector: '',
              children: [],
            },
            {
              tag: 'orange',
              selector: '',
              children: [],
            }
          ]
        }
      ]
    },
  }
}
