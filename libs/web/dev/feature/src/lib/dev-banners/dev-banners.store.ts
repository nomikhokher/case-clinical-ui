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

interface DevBannersState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Banner',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/banners/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Banners', path: '/dev/banners' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-banners.component.ts',
  items: {
    text: "Big news! We're excited to announce a brand new product.",
    bgColor: 'indigo',
    icon: 'speakerphone',
    position: '', // position = top/bottom
    buttons: [
      {
        text: 'Learn More',
        bgColor: 'red',
        textColor: 'white',
      },
      {
        text: 'Get Started',
        bgColor: 'yellow',
        textColor: 'green',
      },
    ],
  },
  component_inputs: [
    { label: 'Banner Text', prop: '[text]', description: 'Display the text on banner', dataType: 'String' },
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Adjust the background color of banner',
      dataType: 'String',
    },
    { label: 'Icon', prop: '[icon]', description: 'Displays the icon', dataType: 'String', type: icon },
    {
      label: 'Position',
      prop: '[position]',
      description: 'Adjust the position',
      dataType: 'String',
      type: ['top', 'bottom'],
    },
    {
      label: 'Button',
      prop: '[buttons]',
      description: 'Display buttons in the banner',
      dataType: 'Array',
      typeArray: [
        [{ text: 'Learn More' }, { bgColor: 'red' }, { textColor: 'White' }],
        [{ text: 'Get Started' }, { bgColor: 'yellow' }, { textColor: 'White' }],
      ],
    },
  ],
}

@Injectable()
export class DevBannersStore extends ComponentStore<DevBannersState> {
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
