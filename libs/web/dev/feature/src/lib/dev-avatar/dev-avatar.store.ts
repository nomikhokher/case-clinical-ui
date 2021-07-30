import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs, Crumbs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevAvatarState {
  items?: Item[]
  loading?: boolean
  config?: Configs
  payload?: string
}
const payload =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const config: Configs = {
  headerTitle: 'Avatars',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/avatar/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Avatar', path: '/dev/avatar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-avatar/dev-avatar.component.ts',
  items: [
    { mode: 'img', payload: payload, size: 14, radius: 'circle' },
    { mode: 'img', payload: payload, size: 14, radius: 'circle', badge: { color: 'red', position: 'bottom-left' } }, // position can be [bottom-left, bottom-right, top-left, top-bottom]
    { mode: 'text', payload: 'MB', size: 14, radius: 'rounded' },
    { mode: 'text', payload: 'TW', size: 14, radius: 'rounded', badge: { color: 'yellow', position: 'top-right' } },
    { mode: 'text', payload: 'DEMO', size: 14, radius: 'rounded', badge: { color: 'gray', position: 'top-right' } },
  ],
  component_inputs: [
    {
      label: 'Badge',
      prop: '[badge]',
      description: 'Shows the badge on Avatar',
      dataType: 'Object',
      typeObj: [{ position: ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }, { color: 'gray' }],
    },
    {
      label: 'Mode',
      prop: '[mode]',
      description: 'Used to change the Avatar type(img or Text)',
      dataType: 'String',
      type: ['img', 'text'],
    },
    {
      label: 'Payload',
      prop: '[payload]',
      description: 'Source of Avatar(Some text or URL for img)',
      dataType: 'String',
    },
    {
      label: 'Radius',
      prop: '[radius]',
      description: 'Adjust the roundness',
      dataType: 'String',
      type: ['rounded', 'circle'],
    },
    {
      label: 'Size',
      prop: '[size]',
      description: 'Adjust the size',
      dataType: 'Number',
      type: ['8', '10', '14', '16', '20'],
    },
  ],
}

@Injectable()
export class DevAvatarStore extends ComponentStore<DevAvatarState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  // readonly items$ = this.select(this.state$, (s) => s.items)
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
