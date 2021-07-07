import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: any[]
  component_outputs?: any[]
}
interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface DevEditorState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevEditorStore extends ComponentStore<DevEditorState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Editor',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/editor/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Editor', path: '/dev/editor' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-editor/dev-editor.component.ts',
        },
      },
    })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)

  readonly vm$ = this.select(this.config$, (config) => ({ config }))

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
