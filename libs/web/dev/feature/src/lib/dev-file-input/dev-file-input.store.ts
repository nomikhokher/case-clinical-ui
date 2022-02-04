import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-file-input/model'

export interface Item {
  id?: string
  name?: string
}

interface DevFileInputState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'File Input',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/file-input/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'File Input', path: '/dev/file-input' },
  ],
  directory: '/libs/web/dev/feature/src/lib/file-input/file-input.component.ts',
  items: {
    background: 'white-500',
  },
  component_inputs: [
    // { label: 'Background Color', prop: '[background]', description: 'Adjust background color.', dataType: 'String' },
  ],
}

@Injectable()
export class DevFileInputStore extends ComponentStore<DevFileInputState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }
  readonly config$ = this.select(this.state$, (s) => s.config)
  //readonly items$ = this.select(this.state$, (s) => s.items)
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
