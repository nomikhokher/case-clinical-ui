import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface Demo {
  label?: string
  json?: any
  expanded?: boolean
}

interface DevJsonState {
  demos?: Demo[]
}

const demos: Demo[] = [
  {
    label: 'Simple JSON',
    json: {
      name: 'my-app',
      version: '1.0.0',
      license: 'MIT',
      private: true,
    },
  },
  {
    label: 'JSON',
    expanded: true,
    json: {
      'simple key': 'simple value',
      numbers: 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'special value': undefined,
      owner: null,
      'simple obect': {
        'simple key': 'simple value',
        numbers: 1234567,
        'simple list': ['value1', 22222, 'value3'],
        'simple obect': {
          key1: 'value1',
          key2: 22222,
          key3: 'value3',
        },
      },
    },
  },
]

@Injectable()
export class DevJsonStore extends ComponentStore<DevJsonState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
