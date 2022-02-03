import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

// export interface Item {
//     id: string
//     btnText: string
//     description: string
//     show: boolean
//     icon?: string
// }

interface DevCollapseState {
  collapse?: any[]
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Collapse',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/collapse/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Collapse', path: '/collapse' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-collapse.component.ts',
  items: {
    btnColor: 'red',
    btnText: 'Collapse 1',
    collapse: [
      {
        description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
        officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
        wolf moon tempor, sunt aliqua put a bird on `,
        show: false,
        icon: 'chevronRight',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Collapse',
      prop: '[collapse]',
      description: 'Collapse',
      dataType: 'string',
    },
    {
      label: 'Button Color',
      prop: '[btnColor]',
      description: 'Button Color',
      dataType: 'string',
    },
    {
      label: 'Button Text',
      prop: '[btnText]',
      description: 'Button Text',
      dataType: 'string',
    },
  ],
}

@Injectable()
export class DevCollapseStore extends ComponentStore<DevCollapseState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
  // readonly items$ = this.select(this.state$, (s) => s.items)
  // readonly vm$ = this.select(this.items$, (items) => ({ items }))

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
