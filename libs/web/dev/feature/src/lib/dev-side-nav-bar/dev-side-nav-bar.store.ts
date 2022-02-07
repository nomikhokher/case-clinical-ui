import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'
import { UiIcon } from '@schema-driven/web/ui/icon'
export interface Item {
  id?: string
  name?: string
}
let icon = Object.values(UiIcon)
interface DevSideNavBarState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Side Navigation',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/side-nav-bar/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Side Navigation', path: '/dev/side-nav-bar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/side-nav-bar/side-nav-bar.component.ts',
  items: {
    heading: 'Leroy Jenkins',
    background: 'white-800',
    menuItems: [
      { id: 1, icon: 'cube', title: 'Dashboard' },
      { id: 2, icon: 'search', title: 'Search' },
      { id: 3, icon: 'chat', title: 'Chat' },
      { id: 4, icon: 'scale', title: 'Orders' },
      { id: 5, icon: 'heart', title: 'Wishlist' },
      { id: 6, icon: 'setting', title: 'Settings' },
      { id: 7, icon: 'logout', title: 'Logout' },
    ],
  },
  component_inputs: [
    {
      label: 'heading',
      prop: '[heading]',
      description: 'Show heading',
      dataType: 'String',
    },

    { label: 'Background Color', prop: '[background]', description: 'Adjust background color.', dataType: 'String' },
    {
      label: 'Menu Items',
      prop: '[menuItems]',
      description: 'Shows the menu item on navbar.',
      dataType: 'Object',
      typeArray: [
        [{ icon: icon }, { title: 'Dashboard' }],
        [{ icon: icon }, { title: 'Search' }],
        [{ icon: icon }, { title: 'Chat' }],
        [{ icon: icon }, { title: 'Orders' }],
        [{ icon: icon }, { title: 'Wishlist' }],
        [{ icon: icon }, { title: 'Settings' }],
        [{ icon: icon }, { title: 'Logout' }],
      ],
    },
  ],
}

@Injectable()
export class DevSideNavBarStore extends ComponentStore<DevSideNavBarState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
  //readonly items$ = this.select(this.state$, (s) => s.items)
  //readonly vm$ = this.select(this.items$, (items) => ({ items }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
