import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  id?: string
  name?: string
}

interface DevFooterState {
  items?: Item[]
  loading?: boolean
  config: Configs
}
let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Footer',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/footer/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Footer', path: '/dev/footer' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-footer.component.ts',
  items: {
    bgColor: 'white',
    textColor: 'gray',
    lists: [
      {
        heading: 'SOLUTIONS',
        items: [{ title: 'Marketing' }, { title: 'Analytics' }, { title: 'Commerce' }, { title: 'Insights' }],
      },
      {
        heading: 'SUPPORT',
        items: [{ title: 'Pricing' }, { title: 'Documentation' }, { title: 'Guides' }, { title: 'API Status' }],
      },
      {
        heading: 'COMPANY',
        items: [{ title: 'About' }, { title: 'Blog' }, { title: 'Jobs' }, { title: 'Press' }, { title: 'Partners' }],
      },
      {
        heading: 'LEGAL',
        items: [{ title: 'Claim' }, { title: 'Privacy' }, { title: 'Terms' }],
      },
    ],
    rights: '© 2020 Workflow, Inc. All rights reserved.',
    icons: [
      {
        svg: 'github',
      },
      {
        svg: 'facebook',
      },
      {
        svg: 'twitter',
      },
      {
        svg: 'instagram',
      },
      {
        svg: 'dribbble',
      },
    ],
  },

  component_inputs: [
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Adjust background color of footer',
      dataType: 'String',
    },
    { label: 'Text Color', prop: '[textColor]', description: 'Adjust text color of footer', dataType: 'String' },
    {
      label: 'List',
      prop: '[lists]',
      description: 'Shows all data of footer lists',
      dataType: 'Array',
      typeArray: [
        [
          { heading: 'Solutions' },
          { items: ` [{ title: 'Marketing' }, { title: 'Analytics' }, { title: 'Commerce' }, { title: 'Insights' }]` },
        ],
        [
          { heading: 'Support' },
          { items: `[{ title: 'Pricing' }, { title: 'Documentation' }, { title: 'Guides' }, { title: 'API Status' }]` },
        ],
        [
          { heading: 'Company' },
          {
            items: `[{ title: 'About' }, { title: 'Blog' }, { title: 'Jobs' }, { title: 'Press' }, { title: 'Partners' }]`,
          },
        ],
        [{ heading: 'Legal' }, { items: `[{ title: 'Claim' }, { title: 'Privacy' }, { title: 'Terms' }]` }],
      ],
    },
    { label: 'Rights', prop: '[rights]', description: 'Display the rights text of footer', dataType: 'String' },
    {
      label: 'Icons',
      prop: '[icons]',
      description: 'Display social icons on footer',
      dataType: 'Array',
      typeArray: [[{ svg: icon }], [{ svg: icon }], [{ svg: icon }], [{ svg: icon }], [{ svg: icon }]],
    },
  ],
}

@Injectable()
export class DevFooterStore extends ComponentStore<DevFooterState> {
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
