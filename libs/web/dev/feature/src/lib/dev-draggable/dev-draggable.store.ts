import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs, TaskPriority, TaskStatus, TaskType } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevDraggableState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
var today = new Date()

const config: Configs = {
  headerTitle: 'Draggable',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/draggable/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Draggable', path: '/dev/draggable' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-draggable/dev-draggable.component.ts',
  items: {
    draggableData: [
      {
        id: TaskStatus.BACKLOG,
        isActive: true,
        title: 'Backlog',
        tasks: [
          {
            id: '2',
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.BACKLOG,
            title: 'Behind the 900 stars - Update 08/2020',
            type: TaskType.STORY,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1),
          },
          {
            id: '1',
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.BACKLOG,
            title: 'Who is the author of Angular Jira clone?',
            type: TaskType.STORY,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          },
        ],
      },
      {
        id: TaskStatus.SELECTED,
        isActive: true,
        title: 'Selected',
        tasks: [
          {
            id: '3',
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.SELECTED,
            title: 'Set up Akita state management',
            type: TaskType.STORY,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          },
        ],
      },
      {
        id: TaskStatus.IN_PROGRESS,
        isActive: true,
        title: 'In Progress',
        tasks: [
          {
            id: '4',
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.IN_PROGRESS,
            title: 'Preparing backend API with GraphQL',
            type: TaskType.STORY,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          },
        ],
      },
      {
        id: TaskStatus.DONE,
        isActive: true,

        title: 'Done',
        tasks: [
          {
            id: '5',
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.DONE,
            title: 'Preparing backend API with GraphQL',
            type: TaskType.STORY,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          },
        ],
      },
    ],
  },
}

@Injectable()
export class DevDraggableStore extends ComponentStore<DevDraggableState> {
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
