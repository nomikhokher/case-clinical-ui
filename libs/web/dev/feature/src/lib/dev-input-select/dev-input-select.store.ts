import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

interface DevInputSelectState {
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Input Select',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/input-select/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Input Select', path: '/dev/input-select' },
  ],
  directory: '/libs/web/dev/feature/src/lib/input-select.component.ts',
  items: {
    options: [{ opt: 'Can View' }, { opt: 'Can Edit' }],
  },
  component_inputs: [
    {
      label: 'Input Select',
      prop: '[options]',
      description: 'Shows all the options',
      dataType: 'Array',
      typeArray: [{ opt: 'Can View' }, { opt: 'Can Edit' }],
    },
  ],
  component_outputs: [
    {
      label: 'Click',
      prop: '(click)',
      description: 'Invoked when button is clicked and return object',
      dataType: '() => object',
    },
  ],
}

@Injectable()
export class DevInputSelectStore extends ComponentStore<DevInputSelectState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
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
