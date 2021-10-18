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

interface DevListContainerState {
  config?: Configs
}

const config: Configs = {
  headerTitle: 'List Container',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/list-container/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'List Container', path: '/dev/list-containers' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-list-container/dev-list-container.component.ts',
  items: {
    classNames: 'text-red-600',
    roundedDividers: true,
  },
  component_inputs: [
    { label: 'Class Names', prop: '[classNames]', description: 'Shows style of these classes', dataType: 'string' },
    { label: 'Dividers', prop: '[roundedDividers]', description: 'Shows the divider', dataType: 'boolean' },
  ],
}

@Injectable()
export class DevListContainerStore extends ComponentStore<DevListContainerState> {
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
