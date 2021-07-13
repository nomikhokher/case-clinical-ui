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

interface DevChipsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

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
      bgColor: 'bg-pink-200',
      textColor: 'text-pink-700',
      hoverColor: 'bg-pink-300',
    },
    {
      text: '',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      bgColor: 'bg-purple-300',
      textColor: 'text-purple-700',
      hoverColor: 'bg-purple-200',
    },
    {
      text: 'World',
      bgColor: 'bg-red-700',
      textColor: 'text-red-100',
      hoverColor: 'bg-red-600',
    },
    {
      text: 'Accepted',
      bgColor: 'bg-yellow-700',
      textColor: 'text-yellow-100',
      hoverColor: 'bg-yellow-600',
    },
    {
      text: 'Fixed',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      hoverColor: 'bg-green-200',
    },
    {
      text: 'Chips',
      bgColor: 'bg-indigo-700',
      textColor: 'text-indigo-100',
      hoverColor: 'bg-indigo-600',
      cross: 'cross',
    },
    {
      text: 'Custom',
      img: '',
      icon: 'office',
      bgColor: 'bg-yellow-700',
      textColor: 'text-yellow-100',
      hoverColor: 'bg-yellow-600',
      cross: 'cross',
    },
  ],
  component_inputs: [
    { label: 'Text', prop: '[text]', description: 'Text in chips', dataType: 'String' },
    { label: 'Icon', prop: '[icon]', description: 'Shows the icons', dataType: 'String' },
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Used to change the background color',
      dataType: 'String',
    },
    { label: 'Text Color', prop: '[textColor]', description: 'To change the text color', dataType: 'String' },
    { label: 'Close sign', prop: '[cross]', description: 'Cross sign to close the chips.', dataType: 'String' },
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
