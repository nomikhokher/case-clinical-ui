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

interface DevProgressBarProState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Progress Button',
  githubURL: 'https://github.com/Schema/progress-button/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Progress Button', path: '/dev/progress-button' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-progress-button.component.ts',
  items: {
    barTitle: 'Migrating MySQL database...',
    barData: [
      { status: 'Copying files' },
      { status: 'Migrating database' },
      { status: 'Compiling assets' },
      { status: 'Deploying' },
      { status: 'Successfully Done' },
    ],
    statusLevel: '3',
  },

  component_inputs: [
    { label: 'Progress Bar Title', prop: '[barTitle]', description: 'Show progress bar title.', dataType: 'String' },
    {
      label: 'Status Names',
      prop: '[barData]',
      description: 'Show the progress bar names.',
      dataType: 'Object',
      typeObj: [
        [{ status: 'Copying files' }],
        [{ status: 'Migrating database' }],
        [{ status: 'Compiling assets' }],
        [{ status: 'Deploying' }],
        [{ status: 'Successfully Done' }],
      ],
    },
    {
      label: 'Current status level',
      prop: '[statusLevel]',
      description: 'Adjust the width of progress bar according to level.',
      dataType: 'Number',
    },
  ],
}

@Injectable()
export class DevProgressBarProStore extends ComponentStore<DevProgressBarProState> {
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
