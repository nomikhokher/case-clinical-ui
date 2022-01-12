import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs, Buttons } from '../dev-card-with-detail/Model/card-with-detail.model'

export interface Item {
  id?: string
  name?: string
}

interface DevCardWithDetailState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'CardWithDetail',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/card-with-detail/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'CardWithDetail', path: '/card-with-detail' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-card-with-detail.component.ts',
  items: {
    subTitle: '@tomcook4',
    description:
      'Poet Shakespeares poetic developmentShakesInstitute now and then theTLS editing a selection of Wordsworth he',
    title: 'Tom Cook',
    buttons: [
      {
        text: 'Share',
        color: 'white',
        fontColor: 'white',
        hoverColor: 'gray',
      },
      {
        text: 'Create',
        color: 'indigo',
        fontColor: 'gray',
        hoverColor: 'indigo',
      },
    ],
  },

  component_inputs: [
    {
      label: 'subTitle',
      prop: '[subTitle]',
      description: 'subTitle',
      dataType: 'String',
    },
    {
      label: 'description',
      prop: '[description]',
      description: 'description',
      dataType: 'String',
    },
    {
      label: 'Title',
      prop: '[title]',
      description: 'Title',
      dataType: 'String',
    },
    {
      label: 'Buttons',
      prop: '[buttons]',
      description: 'Show buttons in section heading',
      dataType: 'Array',
      typeArray: [
        [{ text: 'Share' }, { color: 'white' }, { fontColor: 'gray' }, { hoverColor: 'gray' }],
        [{ text: 'Create' }, { color: 'indigo' }, { fontColor: 'white' }, { hoverColor: 'indigo' }],
      ],
    },
  ],
}

@Injectable()
export class DevCardWithDetailStore extends ComponentStore<DevCardWithDetailState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
