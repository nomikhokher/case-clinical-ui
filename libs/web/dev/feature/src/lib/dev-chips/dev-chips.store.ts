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

interface DevChipsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Chips',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/chips/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Chips', path: '/dev/chips' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-chips.component.ts',
  items: [
    {
      text: 'Hello',
      bgColor: 'pink',
      textColor: 'pink',
      hoverColor: 'pink',
    },
    {
      text: '',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      bgColor: 'purple',
      textColor: 'purple',
      hoverColor: 'purple',
    },
    {
      text: 'World',
      bgColor: 'red',
      textColor: 'red',
      hoverColor: 'red',
    },
    {
      text: 'Accepted',
      bgColor: 'yellow',
      textColor: 'yellow',
      hoverColor: 'yellow',
    },
    {
      text: 'Fixed',
      bgColor: 'green',
      textColor: 'green',
      hoverColor: 'green',
    },
    {
      text: 'Chips',
      bgColor: 'indigo',
      textColor: 'indigo',
      hoverColor: 'indigo',
      cross: true,
    },
    {
      text: 'Custom',
      img: '',
      icon: 'office',
      bgColor: 'yellow',
      textColor: 'gray',
      hoverColor: 'red',
      cross: true,
    },
  ],
  component_inputs: [
    { label: 'Text', prop: '[text]', description: 'Text in chips', dataType: 'String' },
    { label: 'Icon', prop: '[icon]', description: 'Shows the icons', dataType: 'String', type: icon },
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Used to change the background color',
      dataType: 'String',
      type: ['yellow', 'red', 'green'],
    },
    { label: 'Text Color', prop: '[textColor]', description: 'To change the text color', dataType: 'String' },
    {
      label: 'Close sign',
      prop: '[cross]',
      description: 'Cross sign to close the chips.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    { label: 'Image', prop: '[img]', description: 'Used to show the image.', dataType: 'String' },
    {
      label: 'On Hover color',
      prop: '[hoverColor]',
      description: 'Used to change the background color when Hover on it.',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevChipsStore extends ComponentStore<DevChipsState> {
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
