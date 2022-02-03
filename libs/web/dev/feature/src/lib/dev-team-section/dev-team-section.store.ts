import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { Configs } from './model'
export interface Item {
  id?: string
  name?: string
}

interface DevTeamSectionState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Team Section',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/team-section/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Team Section', path: '/dev/team-section' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-team-section/dev-team-section.component.ts',
  items: {
    contactCard: [
      {
        id: 1,
        title: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 2,
        title: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 3,
        title: 'Dries Vincent',
        role: 'Manager, Business Relations',
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 4,
        title: 'Lindsay Walton',
        role: 'Front-end Developer',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Card content',
      prop: '[contactCard]',
      description: 'It shows all your detail in contact card. ',
      dataType: 'Object',
      typeObj: [
        [
          { title: 'Leslie Alexander' },
          { role: 'Co-Founder / CEO' },
          {
            image:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { title: 'Michael Foster' },
          { role: 'Co-Founder / CTO' },
          {
            image:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { title: 'Dries Vincent' },
          { role: 'Manager, Business Relations' },
          {
            image:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { title: 'Lindsay Walton' },
          { role: 'Front-end Developer' },
          {
            image:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevTeamSectionStore extends ComponentStore<DevTeamSectionState> {
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
