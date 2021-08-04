import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevContactCardState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Contact Card',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/contact-card/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Contact Card', path: '/dev/contact-card' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-contact-card.component.ts',
  items: {
    contactCard: {
      id: 1,
      title: 'Jane Cooper',
      tagLine: 'Paradigm Representative',
      email: 'janecooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin',
      icon: 'user',
    },
    buttons: [
      {
        text: 'Email',
        icon: 'email',
      },
      {
        text: 'Call',
        icon: 'phone',
      },
    ],
    toggleCard: 'false',
  },
  component_inputs: [
    {
      label: 'Card content',
      prop: '[contactCard]',
      description: 'It shows all your detail in contact card. ',
      dataType: 'Object',
      typeObj: [
        { title: 'Jane Cooper' },
        { tagLine: 'Paradigm Representative' },
        { email: 'janecooper@example.com' },
        {
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        { role: 'Admin' },
        { icon: icon },
      ],
    },
    {
      label: 'Buttons',
      prop: '[buttons]',
      description: 'Shows the buttons. ',
      dataType: 'Object',
      typeArray: [
        [{ text: 'Email' }, { icon: icon }],
        [{ text: 'Call' }, { icon: icon }],
      ],
    },
    {
      label: 'Card Style',
      prop: '[toggleCard]',
      description: 'Change the card style. ',
      dataType: 'Boolean',
      type: ['false', 'true'],
    },
  ],
}

@Injectable()
export class DevContactCardStore extends ComponentStore<DevContactCardState> {
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
