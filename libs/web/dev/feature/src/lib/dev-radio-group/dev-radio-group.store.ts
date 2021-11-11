import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevRadioGroupState {
  items?: Item[]
  loading?: boolean
  config
}

const config: any = {
  headerTitle: 'Radio Group',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/radio-group/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Radio Group', path: '/dev/radio-group' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-radio-group/dev-radio-group.component.ts',
  items: {
    heading: {
      title: 'Notifications',
      description: 'How do you prefer to receive notifications?',
    },
    inlineRadio: false,
    inlineDetail: true,
    radioButtons: [
      { name: 'Small', detail: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
      { name: 'Medium', detail: '8 GB RAM / 4 CPUS / 256 GB SSD Storage' },
      { name: 'Large', detail: '12 GB RAM / 8 CPUS / 512 GB SSD Storage' },
      { name: 'Extra Large', detail: '16 GB RAM / 8 CPUS / 1 TB SSD Storage' },
    ],
  },

  component_inputs: [
    {
      label: 'Heading',
      prop: '[heading]',
      description: 'Display the title and description of radio group.',
      dataType: 'Object',
    },
    {
      label: 'Inline Radios',
      prop: '[inlineRadio]',
      description: 'Adjust the Alignment.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Inline details',
      prop: '[inlineDetail]',
      description: 'Adjust the position of detail.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    { label: 'Radio button data', prop: '[radioButtons]', description: 'Data of radio buttons.', dataType: 'Array' },
  ],
}

@Injectable()
export class DevRadioGroupStore extends ComponentStore<DevRadioGroupState> {
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
