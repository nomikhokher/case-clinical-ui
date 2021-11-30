import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevEmptyStatesWithRecommendationsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Empty States with recommendations',
  githubURL:
    'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/empty-states-with-recommendations/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Empty States with recommendations', path: '/dev/empty-states-with-recommendations' },
  ],
  directory:
    '/libs/web/dev/feature/src/lib/dev-empty-states-with-recommendations/dev-empty-states-with-recommendations.component.ts',
  items: {
    heading: 'Recommended team members',
    userData: [
      {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        img:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        role: 'Designer',
        img:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        role: 'Director, Product Development',
        img:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        img:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        img:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    options: [{ opt: 'Can View' }, { opt: 'Can Edit' }],
  },
  component_inputs: [
    { label: 'Heading', prop: '[heading]', description: 'Shows the title.', dataType: 'String' },
    {
      label: 'User Data',
      prop: '[userData]',
      description: 'Shows the title.',
      dataType: 'String',
      typeArray: [
        [
          { name: 'Lindsay Walton' },
          { role: 'Front-end Developer' },
          {
            img:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { name: 'Courtney Henry' },
          { role: 'Designer' },
          {
            img:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { name: 'Tom Cook' },
          { role: 'Director, Product Development' },
          {
            img:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { name: 'Whitney Francis' },
          { role: 'Copywriter' },
          {
            img:
              'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          { name: 'Leonard Krasner' },
          { role: 'Senior Designer' },
          {
            img:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
      ],
    },
    {
      label: 'Options',
      prop: '[options]',
      description: 'Shows the title.',
      dataType: 'String',
      typeArray: [[{ opt: 'Can View' }], [{ opt: 'Can Edit' }]],
    },
  ],
}

@Injectable()
export class DevEmptyStatesWithRecommendationsStore extends ComponentStore<DevEmptyStatesWithRecommendationsState> {
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
