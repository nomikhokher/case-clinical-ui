import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { DataArray, Input } from './model'

export interface Item {
  id?: string
  name?: string
  data?: DataArray
}

interface DevAlertState {
  items?: Item
  loading?: boolean
  config?: Config
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: Input[]
}
interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

const data = {
  class: 'mb-4 mt-4',
  subject: 'Attention needed',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  bg_color: 'info',
  icon: 'exclamation',
  icon_show: true,
  alignment: 'left',
}

const config = {
  previewData: {
    header: 'Alerts',
    githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/alert/src/lib',
    breadcrumbs: [
      { label: 'Components', path: '/dev' },
      { label: 'Alert', path: '/dev/alert' },
    ],
    directory: `libs/web/dev/feature/src/lib/dev-alert/dev-alert.component.ts`,
  },
  items: {
    data: data,
    component_inputs: [
      { label: 'Class', prop: '[class]', description: 'Used for margin and padding', dataType: 'String' },
      { label: 'Subject', prop: '[subject]', description: `Shows the main heading of Alert`, dataType: 'String' },
      { label: 'Message', prop: '[message]', description: 'Shows the message of Alert', dataType: 'String' },
      {
        label: 'Color',
        prop: '[bg_color]',
        description: `Adjust Alert's background and text color`,
        dataType: 'String',
      },
      { label: 'Icon', prop: '[icon]', description: `Change the icon`, dataType: 'String' },
      { label: 'Display Icon', prop: '[icon_show]', description: `Display or Hide the icon`, dataType: 'Boolean' },
      { label: 'Position', prop: '[alignment]', description: `Adjust the position of Alert`, dataType: 'String' },
    ],
  },
}

@Injectable()
export class DevAlertStore extends ComponentStore<DevAlertState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
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
