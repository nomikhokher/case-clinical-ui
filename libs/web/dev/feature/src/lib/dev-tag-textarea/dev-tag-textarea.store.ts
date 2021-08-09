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

interface DevTagTextareaState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Tag Textarea',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/tag-textarea/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Tag Textarea', path: '/dev/tag-textarea' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-tag-textarea/dev-tag-textarea.component.ts',
  items: {
    color: 'green',
  },
  component_inputs: [
    {
      label: 'Color',
      prop: '[color]',
      description: 'Adjust the color of tags',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevTagTextareaStore extends ComponentStore<DevTagTextareaState> {
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
