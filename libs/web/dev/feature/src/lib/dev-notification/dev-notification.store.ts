import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevNotificationState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Notification',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/notification/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Notification', path: '/dev/notification' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-notification/dev-notification.component.ts',
  items: [
    {
      icon: 'team',
      avatarImg:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Successfully saved!',
      title: 'Anyone with a link can now view this file.',
      closeBtn: true,
      show: true,
      timeInSec: 10,
      background: 'indigo',
      bottomSectionButton: [
        {
          id: 1,
          name: 'reply',
          fn: function acceptFn(value: any) {},
        },
        {
          id: 2,
          name: 'accept',
          fn: function acceptFn(value: any) {},
        },
        {
          id: 3,
          name: `Don't allow`,
          fn: function acceptFn(value: any) {},
        },
      ],
    },
  ],
  component_inputs: [
    { label: 'Icon', prop: '[icon]', description: 'Shows the icon.', dataType: 'String' },
    { label: 'Avatar Image', prop: '[avatarImg]', description: 'Shows the image.', dataType: 'String' },
    { label: 'Name', prop: '[name]', description: 'Shows the name of notification.', dataType: 'String' },
    { label: 'Title', prop: '[title]', description: 'Show the title of notification.', dataType: 'String' },
    {
      label: 'CloseButton',
      prop: '[closeBtn]',
      description: 'Close the notification modal.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Show',
      prop: '[show]',
      description: 'Show the modal of notification.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Time in Seconds',
      prop: '[timeInSec]',
      description: 'Holds the notification for x seconds.',
      dataType: 'Number',
    },
    { label: 'Background', prop: '[background]', description: 'Adjust the background color.', dataType: 'String' },
    {
      label: 'bottomSectionButton',
      prop: '[bottomSectionButton]',
      description: 'Bottom buttons of notification',
      dataType: 'Object',
      typeArray: [[{ name: 'accept' }]],
    },
  ],
  component_outputs: [
    { label: 'Click', prop: '	(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
  ],
}

@Injectable()
export class DevNotificationStore extends ComponentStore<DevNotificationState> {
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
