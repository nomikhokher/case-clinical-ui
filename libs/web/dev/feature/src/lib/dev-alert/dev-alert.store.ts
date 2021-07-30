import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ServiceCodepreview } from 'libs/web/ui/codepreview.service'
import { DataArray, Input } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  id?: string
  name?: string
  data?: DataArray
}

interface DevAlertState {
  items?: Item
  loading?: boolean
  config?: Config
  data?: DataArray
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

let data = {
  class: 'mb-4 mt-4',
  subject: 'Attention needed',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  bg_color: 'warning',
  icon: 'exclamation',
  icon_show: true,
  alignment: 'left',
}
let icons = Object.values(UiIcon)
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
      {
        label: 'Position',
        prop: '[alignment]',
        description: `Adjust the position of Alert`,
        dataType: 'String',
        type: ['left', 'center', 'right'],
      },
      {
        label: 'Color',
        prop: '[bg_color]',
        description: `Adjust Alert's background and text color`,
        dataType: 'String',
        type: ['success', 'danger', 'info', 'warning'],
      },
      { label: 'Class', prop: '[class]', description: 'Used for margin and padding', dataType: 'String' },
      { label: 'Icon', prop: '[icon]', description: `Change the icon`, dataType: 'String', type: icons },
      {
        label: 'Display Icon',
        prop: '[icon_show]',
        description: `Display or Hide the icon`,
        dataType: 'Boolean',
        type: ['true', 'false'],
      },
      { label: 'Message', prop: '[message]', description: 'Shows the message of Alert', dataType: 'String' },
      { label: 'Subject', prop: '[subject]', description: `Shows the main heading of Alert`, dataType: 'String' },
    ],
  },
}

@Injectable()
export class DevAlertStore extends ComponentStore<DevAlertState> {
  constructor(private readonly sdk: ApolloAngularSDK, public readonly serviceData: ServiceCodepreview) {
    super({ config, data })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  data$ = this.select(this.state$, (s) => s.data)

  readonly vm$ = this.select(this.config$, this.data$, (config, data) => ({ config, data }))

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
