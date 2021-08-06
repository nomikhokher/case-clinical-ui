import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'

export interface Item {
  id?: string
  name?: string
}

interface NavbarsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Navbars',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/navbars/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Navbars', path: '/dev/navbars' },
  ],
  directory: '/libs/web/dev/feature/src/lib/navbars/navbars.component.ts',
  items: {
    quickAction: 'button', //it can be [button, search, or empty if you do not want any qiuck action bar]
    background: 'indigo',
    optionList: [{ item: 'Your Profile' }, { item: 'Setting' }, { item: 'Sign out' }],
    menuItems: [{ menu: 'Dashboard' }, { menu: 'Team' }, { menu: 'Project' }, { menu: 'Calendar' }],
  },
  component_inputs: [
    {
      label: 'quickAction',
      prop: '[quickAction]',
      description: 'Show Quick Button or Quick Search bar',
      dataType: 'String',
      type: ['button', 'search', 'none'],
    },
    { label: 'Background Color', prop: '[background]', description: 'Adjust background color.', dataType: 'String' },
    {
      label: 'Options List',
      prop: '[optionList]',
      description: 'Shows the options when click on avatar.',
      dataType: 'Object',
      typeArray: [[{ item: 'Your Profile' }], [{ item: 'Setting' }], [{ item: 'Sign out' }]],
    },
    {
      label: 'Menu Items',
      prop: '[menuItems]',
      description: 'Shows the menu item on navbar.',
      dataType: 'Object',
      typeArray: [[{ menu: 'Dashboard' }], [{ menu: 'Team' }], [{ menu: 'Project' }], [{ menu: 'Calendar' }]],
    },
  ],
}

@Injectable()
export class NavbarsStore extends ComponentStore<NavbarsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

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
