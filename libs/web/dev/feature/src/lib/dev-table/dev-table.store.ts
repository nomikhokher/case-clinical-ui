import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { UiTable, UiTableColumn } from '@schema-driven/web/ui/table'

export interface Demo {
  label: string
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
  directory: '/libs/web/dev/feature/src/lib/dev-table.component.ts',
}

const demos: Demo[] = [
  {
    label: 'Simple Table',
    cols: [
      UiTable.column('name'),
      UiTable.column('weight'),
      UiTable.column('symbol'),
      UiTable.column('position', { className: 'text-right', headerClassName: 'text-right' }),
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
