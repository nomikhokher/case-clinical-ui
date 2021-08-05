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

interface DevStackedListsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config = {
  headerTitle: 'Stacked Lists',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/two-column-stacked-list/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Stacked Lists', path: '/dev/stacked-lists' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-stacked-lists/dev-stacked-lists.component.ts',
  items: [
    {
      twoColumnStackedList: true,
      id: 1,
      name: 'Jennie Marley',
      email: 'hh@yahoo.com',
      img:
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
    {
      twoColumnStackedList: true,
      id: 2,
      name: 'Mick Tim',
      email: 'hh@yahoo.com',
      img:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
    {
      twoColumnStackedList: false,
      id: 3,
      name: 'Anie Finn',
      email: 'hh@yahoo.com',
      img:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
    {
      twoColumnStackedList: true,
      id: 4,
      name: 'Custom List',
      email: 'custom@Customization.com',
      img:
        'https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg',
      date: 'January 7, 2020',
      status: 'This list can be customize.',
    },
  ],
  component_inputs: [
    {
      label: 'Two Column Lists',
      prop: '[twoColumnStackedList]',
      description: 'Adjust Two or Single column stacked list.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    { label: 'Id', prop: '[id]', description: 'ID of list.', dataType: 'String' },
    { label: 'Name', prop: '[name]', description: 'Shows the name.', dataType: 'String' },
    { label: 'Email', prop: '[email]', description: 'Shows the email adress.', dataType: 'String' },
    { label: 'Image URL', prop: '[img]', description: 'Shows the image.', dataType: 'String' },
    { label: 'Date of Birth', prop: '[date]', description: 'Shows the date of birth.', dataType: 'String' },
    { label: 'Status', prop: '[status]', description: 'Shows the Status.', dataType: 'String' },
  ],
}

@Injectable()
export class DevStackedListsStore extends ComponentStore<DevStackedListsState> {
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
