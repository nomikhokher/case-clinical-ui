import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-feed/model'

export interface Item {
  id?: string
  name?: string
}

interface DevFeedState {
  loading?: boolean
  config?: Configs
}

let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Feeds',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/feed/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Feeds', path: '/dev/feed' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-feed.component.ts',
  items: {
    feedsListing: [
      {
        id: 1,
        heading: 'Applied to',
        title: 'Front End',
        time: 'set, friday 2pm',
        img:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        icon: 'user',
        size: 'lg',
        iconClass: 'green',
      },
      {
        id: 2,
        heading: 'Applied to',
        title: 'Front End',
        time: 'set, friday 2pm',
        img:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        icon: 'thumb_up',
        size: 'lg',
        iconClass: 'blue',
      },
    ],
  },

  component_inputs: [
    {
      label: 'Feed Listing',
      prop: '[feedsListing]',
      description: 'Shows all data of feed lists',
      dataType: 'Array',
      typeArray: [
        [
          { heading: 'Applied to' },
          { title: 'Front End' },
          { time: 'set, friday 2pm' },
          {
            img:
              'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
          },
          { icon: icon },
          { iconClass: 'green' },
        ],
        [
          { heading: 'Applied to' },
          { title: 'Front End' },
          { time: 'set, friday 2pm' },
          {
            img:
              'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
          },
          { icon: icon },
          { iconClass: 'blue' },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevFeedStore extends ComponentStore<DevFeedState> {
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
