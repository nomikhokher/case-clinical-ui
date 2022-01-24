import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-list-group/model'

export interface Item {
  id?: string
  name?: string
}

interface DevListGroupState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'List Group',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/list-group/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'List Group', path: '/dev/list-group' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-list-group/dev-list-group0.component.ts',
  items: {
    tabsData: [
      {
        title: 'The current link item',
        textColor: 'text-white',
        textAlign: 'text-left',
        borderColor: 'border-b border-gray-200',
        rounded: 'rounded-t-lg',
        pointer: 'cursor-pointer',
        enabled: true,
        focus: '',
        hover: '',
        bgColor: 'bg-blue-600',
      },
      {
        title: 'A second link item',
        textColor: 'text-gray-600',
        textAlign: 'text-left',
        borderColor: 'border-b border-gray-200',
        rounded: '',
        pointer: 'cursor-pointer',
        enabled: true,
        focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600',
        hover: 'bg-gray-100 hover:text-gray-500',
        bgColor: 'bg-white',
      },
      {
        title: 'A third link item',
        textColor: 'text-gray-600',
        textAlign: 'text-left',
        borderColor: 'border-b border-gray-200',
        rounded: '',
        pointer: 'cursor-pointer',
        enabled: true,
        focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600',
        hover: 'bg-gray-100 hover:text-gray-500',
        bgColor: 'bg-white',
      },
      {
        title: 'A fourth link item',
        textColor: 'text-gray-600',
        textAlign: 'text-left',
        borderColor: 'border-b border-gray-200',
        rounded: '',
        pointer: 'cursor-pointer',
        enabled: true,
        focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600',
        hover: 'bg-gray-100 hover:text-gray-500',
        bgColor: 'bg-white',
      },
      {
        title: `A disabled link item`,
        textColor: 'text-gray-400',
        textAlign: 'text-left',
        borderColor: 'border-gray-200',
        rounded: 'rounded-b-lg',
        pointer: 'cursor-default',
        enabled: false,
        focus: 'outline-none focus:ring-0',
        hover: '',
        bgColor: 'bg-white',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Design Class',
      prop: '[DesignClass]',
      description: 'Show Classes in section heading',
      dataType: 'Array',
      typeArray: [
        [
          { title: `The current link item` },
          { textColor: 'text-white-400' },
          { textAlign: 'text-left' },
          { borderColor: 'border-gray-200' },
          { rounded: 'rounded-b-lg' },
          { pointer: 'cursor-default' },
          { enabled: false },
          { focus: 'outline-none focus:ring-0' },
          { hover: '' },
          { bgColor: 'bg-white' },
        ],
        //2
        [
          { title: `A second link item` },
          { textColor: 'text-gray-600' },
          { textAlign: 'text-left' },
          { borderColor: 'border-b border-gray-200' },
          { rounded: '' },
          { pointer: 'cursor-pointer' },
          { enabled: true },
          { focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600' },
          { hover: 'bg-gray-100 hover:text-gray-500' },
          { bgColor: 'bg-white' },
        ],
        //3
        [
          { title: `A third link item` },
          { textColor: 'text-gray-600' },
          { textAlign: 'text-left' },
          { borderColor: 'border-b border-gray-200' },
          { rounded: '' },
          { pointer: 'cursor-pointer' },
          { enabled: true },
          { focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600' },
          { hover: 'bg-gray-100 hover:text-gray-500' },
          { bgColor: 'bg-white' },
        ],
        //4
        [
          { title: `A fourth link item` },
          { textColor: 'text-gray-600' },
          { textAlign: 'text-left' },
          { borderColor: 'border-b border-gray-200' },
          { rounded: '' },
          { pointer: 'cursor-pointer' },
          { enabled: true },
          { focus: 'outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600' },
          { hover: 'bg-gray-100 hover:text-gray-500' },
          { bgColor: 'bg-white' },
        ],
        //5
        [
          { title: `A disabled link item` },
          { textColor: 'text-gray-400' },
          { textAlign: 'text-left' },
          { borderColor: 'border-gray-200' },
          { rounded: 'rounded-b-lg' },
          { pointer: 'cursor-default' },
          { enabled: false },
          { focus: 'outline-none focus:ring-0' },
          { hover: '' },
          { bgColor: 'bg-white' },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevListGroupStore extends ComponentStore<DevListGroupState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    //this.loadItemsEffect()
  }

  // readonly items$ = this.select(this.state$, (s) => s.items)
  // readonly vm$ = this.select(this.items$, (items) => ({ items }))

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
