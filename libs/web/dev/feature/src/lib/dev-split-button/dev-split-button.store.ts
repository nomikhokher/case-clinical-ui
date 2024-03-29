import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { UiIcon } from '@schema-driven/web/ui/icon'
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

let icon = Object.values(UiIcon)

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
            { label: 'Split button', path: '/dev/split-button' },
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
          {
            label: 'Lists',
            prop: '[lists]',
            description: 'Shows the List.',
            dataType: 'Array',
            typeArray: [
              [{ icon: icon }, { label: 'Paste' }],
              [{ icon: icon }, { label: 'Paste Special' }],
              [{ icon: icon }, { label: 'Paste as Formula' }],
              [{ icon: icon }, { label: 'Paste as Hyperlink' }],
            ],
          },
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
