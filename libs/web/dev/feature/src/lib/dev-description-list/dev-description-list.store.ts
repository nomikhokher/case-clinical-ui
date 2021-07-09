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

interface DevDescriptionListState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Description List',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/description-list/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Description List', path: '/dev/description-list' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-description-list.component.ts',
  items: {
    data: [
      {
        title: 'Fullname',
        value: 'Margot Foster',
        icon: 'team',
      },
      {
        title: 'Application For',
        value: 'Backend Developer',
        icon: 'office',
      },
      {
        title: 'Email address',
        value: 'margotfoster@example.com',
        icon: 'email',
      },
      {
        title: 'Salary expectation',
        value: '$120,000',
        icon: 'dollar',
      },
      {
        title: 'About',
        value:
          'ugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
        icon: 'about',
      },
      {
        title: 'Attachments',
        icon: 'attachment',
        value: ['resume_back_end_developer.pdf', 'coverletter_back_end_developer.pdf'],
        type: 'attachment',
      },
    ],
    formTitle: 'Applicant Information',
    tagLine: 'Personal details and application.',
    background: 'indigo',
    showIcon: true,
  },
  component_inputs: [
    { label: 'Data', prop: '[data]', description: 'Shows all data of list', dataType: 'Object' },
    { label: 'Form Title', prop: '[formTitle]', description: 'Shows the title of form.', dataType: 'String' },
    { label: 'Tag Line', prop: '[tagLine]', description: `Shows the title's tag line.`, dataType: 'String' },
    { label: 'Background Color', prop: '[background]', description: 'Change the backgrond', dataType: 'String' },
    { label: 'Icons', prop: '[showIcon]', description: 'Shows and hide icons.', dataType: 'Boolean' },
  ],
}

@Injectable()
export class DevDescriptionListStore extends ComponentStore<DevDescriptionListState> {
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
