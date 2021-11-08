import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevProgressBarState {
  items?: Item[]
  loading?: boolean
  config
}

const config = {
  headerTitle: 'Progress Bar',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/progress-bar',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Progress Bar', path: '/dev/progress-bar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-progress-bar.component.ts',
  items: {
    onCompleteColor: 'yellow',
    inProgressColor: 'blue',
    startingColor: 'red',
  },
  component_inputs: [
    {
      label: 'Stating Color',
      prop: '[startingColor]',
      description: 'Starting color of progress bar.',
      dataType: 'String',
      type: ['red', 'blue', 'green', 'indigo', 'yellow', 'gray', 'purple', 'pink'],
    },
    {
      label: 'In Progress Color',
      prop: '[inProgressColor]',
      description: 'Uncompleted color of progress bar.',
      dataType: 'String',
      type: ['red', 'blue', 'green', 'indigo', 'yellow', 'gray', 'purple', 'pink'],
    },
    {
      label: 'Task Completed Color',
      prop: '[onCompleteColor]',
      description: 'Completed color of progress bar.',
      dataType: 'String',
      type: ['red', 'blue', 'green', 'indigo', 'yellow', 'gray', 'purple', 'pink'],
    },
  ],
}

@Injectable()
export class DevProgressBarStore extends ComponentStore<DevProgressBarState> {
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
