import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'

export interface Item {
  id?: string
  name?: string
}

interface DevTableListsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Table Lists',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/table-lists/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Table Lists', path: '/dev/table-lists' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-table-lists/dev-table-lists.component.ts',
  items: {
    width: '7xl', //width can be [xs, sm , md , lg, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl]
    background: 'indigo',
    columns: [{ title: 'Name' }, { title: 'Title' }, { title: 'Role' }, { title: '' }],
    dataList: [
      {
        title: 'Cody Fisher',
        tagLine: 'cody.fisher@example.com',
        jobTitle: 'Regional Paradigm Technician',
        jobTagLine: 'Optimization',
        role: 'Admin',
        button: 'Delete',
      },
      {
        title: 'Jane Cooper',
        tagLine: 'jane.cooper@example.com',
        jobTitle: 'Forward Response Developer',
        jobTagLine: 'Directives',
        role: 'Member',
        button: 'Edit',
      },
      {
        title: 'Esther Howard',
        tagLine: 'esther.howard@example.com',
        jobTitle: 'Product Directives Officer',
        jobTagLine: 'Intranet',
        role: 'Member',
        button: 'Edit',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Columns',
      prop: '[columns]',
      description: 'Shows the columns of table.',
      dataType: 'Object',
      typeArray: [[{ title: 'Name' }], [{ title: 'Ttile' }], [{ title: 'Role' }], [{ title: ' ' }]],
    },
    {
      label: 'Rows Data',
      prop: '[dataList]',
      description: 'Shows the data of rows.',
      dataType: 'Object',
      typeArray: [
        [
          { title: 'Cody Fisher' },
          { tagLine: 'cody.fisher@example.com' },
          { jobTitle: 'Regional Paradigm Technician' },
          { jobTagLine: 'Optimization' },
          { role: 'Admin' },
          { button: 'Delete' },
        ],
        [
          { title: 'Jane Cooper' },
          { tagLine: 'jane.cooper@example.com' },
          { jobTitle: 'Forward Response Developer' },
          { jobTagLine: 'Directives' },
          { role: 'Member' },
          { button: 'Edit' },
        ],
        [
          { title: 'Esther Howard' },
          { tagLine: 'esther.howard@example.com' },
          { jobTitle: 'Product Directives Officer' },
          { jobTagLine: 'Intranet' },
          { role: 'Member' },
          { button: 'Edit' },
        ],
      ],
    },
    {
      label: 'Width',
      prop: '[width]',
      description: 'Adjust the size of lists.',
      dataType: 'String',
      type: ['7xl', '6xl', '5xl', '4xl', '3xl', '2xl', 'lg', 'md', 'sm'],
    },
    {
      label: 'Background Color',
      prop: '[background]',
      description: 'Adjust the background color of table.',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevTableListsStore extends ComponentStore<DevTableListsState> {
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
