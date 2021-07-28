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

interface DevBannersState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

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
        textColor: 'white',
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
    { label: 'Icon', prop: '[icon]', description: 'Displays the icon', dataType: 'String' },
    { label: 'Position', prop: '[position]', description: 'Adjust the position', dataType: 'String' },
    { label: 'Button', prop: '[buttons]', description: 'Display buttons in the banner', dataType: 'Array' },
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
