import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevDividerState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Divider',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/divider/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Divider', path: '/dev/divider' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-divider.component.ts',
  items: [
    {
      directionToolbar: 'end', // direction can be [start, end, center]
      toolbar: true,
      icons: ['team', 'office', 'attachment', 'trash'],
    },
  ],
  component_inputs: [
    {
      label: 'Toolbar Position',
      prop: '[directionToolbar]',
      description: 'Adjust the position of toolbar.',
      dataType: 'String',
    },
    { label: 'Toolbar', prop: '[toolbar]', description: 'Show and hide the toolbar', dataType: 'Boolean' },
    { label: 'Icons', prop: '[icons]', description: 'Show the icons', dataType: 'Array<string>' },
  ],
}

@Injectable()
export class DevDividerStore extends ComponentStore<DevDividerState> {
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
