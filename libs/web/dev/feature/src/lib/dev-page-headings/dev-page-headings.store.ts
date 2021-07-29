import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './models'

export interface Item {
  id?: string
  name?: string
  config?: Config
}

interface DevPageHeadingsState {
  componentProps?: ComponentProps[]
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
  component_inputs?: Input[]
}

@Injectable()
export class DevPageHeadingsStore extends ComponentStore<DevPageHeadingsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Page Headings',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/page-headings/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Page Headings', path: '/dev/page/headings' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-page-headings/dev-page-headings.component.ts',
      componentProps: [
        { name: 'buttons', value: 'buttons' },
        { name: 'lowerSubHeadings', value: 'lowerSubHeadings' },
        { name: 'upperSubHeadings', value: 'upperSubHeadings' },
      ],
      items: {
        config: {
          title: 'Example Title',
          meta: [
            { label: 'Jobs', icon: 'briefcase' },
            { label: 'Remote', icon: 'locationMarker' },
            { label: '$120k – $140k', icon: 'currencyDollar' },
          ],
          // controls: [
          //   {
          //     icon: 'chevronDown',
          //     text: 'More',
          //     color: 'gray',
          //   },
          //   {
          //     icon: 'link',
          //     text: 'View',
          //     color: 'gray',
          //   },
          //   {
          //     icon: 'pencil',
          //     text: 'Edit',
          //     color: 'gray',
          //   },
          //   {
          //     icon: 'check',
          //     text: 'Publish',
          //     color: 'indigo',
          //   },
          // ],
        },
      },

      component_inputs: [
        {
          label: 'Data',
          prop: '[meta]',
          description: 'Show all data of the header',
          dataType: 'Array',
        },
        {
          label: 'Title',
          prop: '[title]',
          description: 'Title of the header',
          dataType: 'String',
          // type : ['Exanple', "Another", 'example']
        },
        // {
        //   label: 'Controls',
        //   prop: '[controls]',
        //   description: 'Show the controls of header',
        //   dataType: 'Array',
        // },
      ],
    })
    // this.loadItemsEffect()
  }

  // readonly items$ = this.select(this.state$, (s) => s.items)
  readonly vm$ = this.select(this.state$, (s) => s)

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
