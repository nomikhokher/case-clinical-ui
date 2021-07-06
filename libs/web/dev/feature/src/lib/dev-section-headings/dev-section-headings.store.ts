import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Buttons, Heading, TabLinks } from './model'

export interface Item {
  id?: string
  name?: string
  heading?: Heading
  tabs?: TabLinks[]
  buttons?: Buttons[]
}

interface DevSectionHeadingsState {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
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
        heading: {
          title: 'Candidate',
          // description: 'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.',
        },

        tabs: [
          {
            id: '1',
            title: 'Applied',
            active: false,
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
