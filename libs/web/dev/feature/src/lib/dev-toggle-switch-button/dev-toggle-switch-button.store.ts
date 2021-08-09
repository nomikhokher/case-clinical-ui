import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { StoreToggleSwitchButton, ComponentProp } from './model'

export interface Item {
  id?: string
  name?: string
  storeToggleSwitchButton?: StoreToggleSwitchButton
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

interface DevToggleSwitchButtonState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevToggleSwitchButtonStore extends ComponentStore<DevToggleSwitchButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Toggle Switch Button',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/toggle-switch-button/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Toggle Switch Button', path: '/dev/toggle/switch/button' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-store-toggle-switch-button/toggle-switch-button.component.ts',
        },
        items: {
          storeToggleSwitchButton: {
            // id: 1,
            height: 'h-5',
            width: 'w-5',
            left: 'left-full',
            bgColor: 'indigo',
            divWidth: 'w-14',
            divHeight: 'h-7',
            onOff: false,
          },
        },
        component_inputs: [
          { label: 'Height', prop: '[height]', description: 'What you want set height.', dataType: 'String' },
          { label: 'width', prop: '[width]', description: 'What you want set width.', dataType: 'String' },
          { label: 'Left', prop: '[left]', description: 'What you want set left margin .', dataType: 'String' },
          {
            label: 'background Color',
            prop: '[bgColor]',
            description: 'What you want set background Color .',
            dataType: 'String',
          },
          {
            label: 'Div Width',
            prop: '[divWidth]',
            description: 'What you want set parent div width.',
            dataType: 'String',
          },
          {
            label: 'Div Height',
            prop: '[divHeight]',
            description: 'What you want set parent div height .',
            dataType: 'String',
          },
          {
            label: 'On OR Off',
            prop: '[onOff]',
            description: 'What you want set toggle button on or off .',
            dataType: 'Boolean',
            type: ['false', 'true'],
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
