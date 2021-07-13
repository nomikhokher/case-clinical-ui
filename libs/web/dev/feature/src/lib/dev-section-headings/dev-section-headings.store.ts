import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Buttons, Heading, TabLinks, Inputs } from './model'

export interface Item {
  id?: string
  name?: string
  heading?: Heading
  tabs?: TabLinks[]
  buttons?: Buttons[]
  title?: string
  description?: string
  image?: string
  badge?: boolean
}

interface DevSectionHeadingsState {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
  component_inputs?: Inputs[]
}

@Injectable()
export class DevSectionHeadingsStore extends ComponentStore<DevSectionHeadingsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Section Headings',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/section-headings/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Section Headings', path: '/dev/section/headings' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-section-headings.component.ts',
      items: {
        title: 'Candidate',
        description: 'Workcation is a property rental website. Fringilla egestas justo massa purus sagittis malesuada.',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        badge: true,
        tabs: [
          {
            id: '1',
            title: 'Applied',
            active: false,
            badge: '20+',
          },
          {
            id: '2',
            title: 'Phone Screening',
            active: false,
          },
          {
            id: '3',
            title: 'Interview',
            active: false,
          },
          {
            id: '4',
            title: 'Offer',
            active: false,
            badge: '3',
          },
          {
            id: '5',
            title: 'Hired',
            active: false,
          },
        ],

        buttons: [
          {
            text: 'Share',
            color: 'white',
            icon: 'phone',
            fontColor: 'gray-700',
            hoverColor: 'gray-50',
          },
          {
            text: 'Create',
            color: 'indigo-700',
            icon: 'email',
            fontColor: 'white',
            hoverColor: 'indigo-600',
          },
        ],
      },
      component_inputs: [
        { label: 'Title', prop: '[title]', description: 'Shows the title.', dataType: 'String' },
        { label: 'Desciption', prop: '[description]', description: 'Shows the  description.', dataType: 'String' },
        { label: 'Image', prop: '[image]', description: 'Shows the image.', dataType: 'String' },
        { label: 'Tabs', prop: '[payload]', description: 'Show all tabs of section heading', dataType: 'Array' },
        { label: 'Buttons', prop: '[buttons]', description: 'Show buttons in section heading', dataType: 'Array' },
        { label: 'Badge', prop: '[badge]', description: 'Show the badges on tabs.', dataType: 'Boolean' },
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
