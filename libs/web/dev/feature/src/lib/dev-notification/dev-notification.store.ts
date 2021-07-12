import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevNotificationState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Avatars',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/avatar/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Avatar', path: '/dev/avatar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-avatar.component.ts',
  items: [
    {
      icon: 'team',
      avatarImg:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Successfully saved!',
      title: 'Anyone with a link can now view this file.',
      closeBtn: true,
      show: true,
      timeInSec: 5,
      background: 'green',
      bottomSectionButton: [
        {
          id: 1,
          name: 'reply',
          fn: function acceptFn(value: any) {
            console.log(value)
          },
        },
        {
          id: 2,
          name: 'accept',
          fn: function acceptFn(value: any) {
            console.log(value)
          },
        },
        {
          id: 3,
          name: `Don't allow`,
          fn: function acceptFn(value: any) {
            console.log(value)
          },
        },
      ],
    },
  ],
  component_inputs: [
    { label: 'Mode', prop: '[mode]', description: 'Used to change the Avatar type', dataType: 'String' },
    { label: 'Payload', prop: '[payload]', description: 'Source of Avatar', dataType: 'String' },
    { label: 'Size', prop: '[size]', description: 'Adjust the size', dataType: 'Number' },
    { label: 'Radius', prop: '[radius]', description: 'Adjust the roundness', dataType: 'String' },
    { label: 'Badge', prop: '[badge]', description: 'Shows the badge on Avatar', dataType: 'Object' },
  ],
}

@Injectable()
export class DevNotificationStore extends ComponentStore<DevNotificationState> {
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
