import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevTextAreasState {
  items?: Item[]
  loading?: boolean
  config?
}

const config = {
  headerTitle: 'Text Area',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/text-areas/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Text Area', path: '/dev/text-areas' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-text-areas/dev-text-areas.component.ts',
  items: {
    button: { name: 'Post', bg: 'indigo' },
    icon: [{ icon: 'code' }, { icon: 'trash' }, { icon: 'at' }],
    iconPosition: 'top',
  },

  component_inputs: [
    {
      label: 'Button',
      prop: '[button]',
      description: 'Adjust the name and background color.',
      dataType: 'Object',
      typeObj: [{ name: 'Posdt' }, { bg: ['indigo', 'red', 'yellow', 'blue', 'pink', 'gray', 'purple', 'green'] }],
    },
    {
      label: 'Icons',
      prop: '[icon]',
      description: 'Show all icons.',
      dataType: 'Array',
      typeArray: [[{ icon: 'code' }], [{ icon: 'trash' }], [{ icon: 'at' }]],
    },
    {
      label: 'Icon Position',
      prop: '[iconPosition]',
      description: 'Adjust the position of icons.',
      dataType: 'String',
      type: ['top', 'bottom'],
    },
  ],
}

@Injectable()
export class DevTextAreasStore extends ComponentStore<DevTextAreasState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

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
