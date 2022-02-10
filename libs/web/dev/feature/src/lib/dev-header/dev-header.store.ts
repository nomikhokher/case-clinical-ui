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

interface DevHeaderState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Header',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/header/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Header', path: '/dev/header' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-header/dev-header.component.ts',
  items: {
    headernav: [
      {
        id: 1,
        title: 'Solution',
        icon: 'chevronDown',
      },
      {
        id: 2,
        title: 'Pricing',
        icon: '',
      },
      {
        id: 3,
        title: 'Docs',
        icon: '',
      },
      {
        id: 4,
        title: 'More',
        icon: 'chevronDown',
      },
    ],
    buttons: [
      {
        text: 'Sign In',
        backColor: 'white',
      },
      {
        text: 'Sign Up',
        backColor: 'indigo-500',
      },
    ],
  },
  component_inputs: [
    // {
    //   label: 'Card content',
    //   prop: '[contactCard]',
    //   description: 'It shows all your detail in contact card. ',
    //   dataType: 'Object',
    //    typeObj: [
    //     [{ id: 1 }, { title: 'Solution' }, { icon: 'chevronDown' }],
    //     [{ id: 2 }, { title: 'Pricing' }, { icon: '' }],
    //     [{ id: 3 }, { title: 'Docs' }, { icon: '' }],
    //     [{ id: 4 }, { title: 'More' }, { icon: 'chevronDown' }],
    //   ],
    // },
    // {
    //   label: 'Buttons',
    //   prop: '[buttons]',
    //   description: 'Shows the buttons. ',
    //   dataType: 'Object',
    //   typeArray: [
    //     [{ text: 'Sign In' }, { backColor: 'white' }],
    //     [{ text: 'Sign Up' }, { backColor: 'indigo-500' }],
    //   ],
    // },
  ],
}

@Injectable()
export class DevHeaderStore extends ComponentStore<DevHeaderState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    //this.loadItemsEffect()
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
