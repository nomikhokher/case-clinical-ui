import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { UiTable, UiTableColumn } from '@schema-driven/web/ui/table'

export interface Demo {
  cols: UiTableColumn[]
  data: any[]
}

interface DevTableState {
  demos?: Demo[]
  config
}

const config = {
  headerTitle: 'Table',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/table/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Table', path: '/dev/table' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-table/dev-table.component.ts',
  items: {
    cols: [
      UiTable.column('name', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('weight', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('symbol', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('position', {
        className: 'text-right bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName:
          'text-right bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none dark:border-gray-50',
      }),
    ],
    data: [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ],
  },
  component_inputs: [
    { label: 'Columns', prop: '[cols]', description: 'Show the columns name of the table', dataType: 'Array' },
    {
      label: 'Data',
      prop: '[data]',
      description: 'This object hold some props',
      dataType: 'Object',
      typeArray: [
        [{ position: '1' }, { name: 'Hydrogen' }, { weight: '1.0079' }, { symbol: 'H' }],
        [{ position: '2' }, { name: 'Helium' }, { weight: '4.0026' }, { symbol: 'He' }],
        [{ position: '3' }, { name: 'Lithium' }, { weight: '6.941' }, { symbol: 'Li' }],
        [{ position: '4' }, { name: 'Beryllium' }, { weight: '10.811' }, { symbol: 'Be' }],
        [{ position: '5' }, { name: 'Boron' }, { weight: '12.0107' }, { symbol: 'B' }],
        [{ position: '6' }, { name: 'Carbon' }, { weight: '15.9994' }, { symbol: 'C' }],
        [{ position: '7' }, { name: 'Nitrogen' }, { weight: '18.9984' }, { symbol: 'N' }],
        [{ position: '8' }, { name: 'Oxygen' }, { weight: '20.1797' }, { symbol: 'O' }],
        [{ position: '9' }, { name: 'Fluorine' }, { weight: '15.9994' }, { symbol: 'F' }],
        [{ position: '10' }, { name: 'Neon' }, { weight: '20.1797' }, { symbol: 'N' }],
      ],
    },
  ],
}

let demos: Demo[] = [
  {
    cols: [
      UiTable.column('name', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('weight', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('symbol', {
        className: 'bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName: 'bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none',
      }),
      UiTable.column('position', {
        className: 'text-right bg-white text-black border dark:bg-transparent dark:text-current dark:border-none',
        headerClassName:
          'text-right bg-white text-black border dark:bg-gray-700 dark:text-current dark:border-none dark:border-gray-50',
      }),
    ],
    data: [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ],
  },
]

@Injectable()
export class DevTableStore extends ComponentStore<DevTableState> {
  constructor() {
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
