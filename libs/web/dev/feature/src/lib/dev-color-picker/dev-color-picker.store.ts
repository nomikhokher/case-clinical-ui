import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevColorPickerState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Color Picker',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/color-picker/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Color Picker', path: '/dev/color-picker' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-color-picker.component.ts',
  items: {
    position: 'rigth',
    userColors: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'pink', 'purple'],
    userVariants: [50, 100, 200, 300, 400],
    hideInput: false,
  },
  component_inputs: [
    {
      label: 'Color Shades',
      prop: '[userVariants]',
      description: 'Shows the different shades of color',
      dataType: 'Array<number>',
    },
    { label: 'Colors', prop: '[userColors]', description: 'Shows the colors to choose', dataType: 'Array<string>' },
    { label: 'hideInput', prop: '[hideInput]', description: 'Shows the value of color in input', dataType: 'Boolean' },
    { label: 'Position', prop: '[position]', description: 'Adjust the position of color picker', dataType: 'String' },
  ],
}

@Injectable()
export class DevColorPickerStore extends ComponentStore<DevColorPickerState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.items$, this.config$, (items, config) => ({ items, config }))

  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
