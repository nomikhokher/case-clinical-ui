import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevBadgeState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Badges',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/badge/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Badge', path: '/dev/avatar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-avatar.component.ts',
  items: {
    color: 'red',
    size: 'lg',
    rounded: 'rounded',
    icon: '',
    position: 'left', // position = left/right
  },
  component_inputs: [
    { label: 'Color', prop: '[color]', description: 'Adjust the color of badge', dataType: 'String' },
    { label: 'Size', prop: '[size]', description: 'Adjust the size', dataType: 'String' },
    { label: 'Round Corner', prop: '[rounded]', description: 'Adjust the roundness of corner', dataType: 'String' },
    { label: 'Icon', prop: '[icon]', description: 'Displays the icon', dataType: 'String' },
    { label: 'Position', prop: '[position]', description: 'Adjust the position', dataType: 'String' },
  ],
}

@Injectable()
export class DevBadgeStore extends ComponentStore<DevBadgeState> {
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
