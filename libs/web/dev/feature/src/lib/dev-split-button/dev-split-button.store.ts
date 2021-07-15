import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Lists, ComponentProp } from './model'

export interface Item {
  id?: string
  name?: string
  lists?: Lists[]
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: ComponentProp[]
  component_outputs?: ComponentProp[]
}

interface DevSplitButtonState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevSplitButtonStore extends ComponentStore<DevSplitButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Split button',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/split-button/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Split button', path: '/dev/spli/button' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-split-button/dev-split-button.component.ts',
        },
        items: {
          lists: [
            {
              icon: 'clipboard',
              label: 'Paste',
            },
            {
              icon: 'clipboardCopy',
              label: 'Paste Special',
            },
            {
              icon: 'clipboardCheck',
              label: 'Paste as Formula',
            },
            {
              icon: 'clipboardList',
              label: 'Paste as Hyperlink',
            },
          ],
        },
        component_inputs: [
          { label: 'Icon', prop: '[icon]', description: 'Shows the icon what you want.', dataType: 'String' },
          { label: 'Label', prop: '[label]', description: 'Shows the label what you wnt.', dataType: 'String' },
        ],
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
