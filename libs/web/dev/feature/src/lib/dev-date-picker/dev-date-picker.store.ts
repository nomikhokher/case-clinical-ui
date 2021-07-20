import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProp } from './model'

export interface Item {
  id?: string
  name?: string
  dateFormat?: string
  inputGivenOrNot?: boolean
  timePicker?: boolean
  rangePicker?: boolean
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
interface DevDatePickerState {
  config?: Config
  loading?: boolean
}

const config = {
  headerTitle: 'Date Picker',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/date-picker/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Date Picker', path: '/dev/date-picker' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-date-picker.component.ts',
}

@Injectable()
export class DevDatePickerStore extends ComponentStore<DevDatePickerState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Date Picker',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/date-picker/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Date Picker', path: '/dev/date/picker' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-date-picker/dev-date-picker.component.ts',
        },
        items: {
          dateFormat: 'DDMMYYYY',
          inputGivenOrNot: true,
          rangePicker: true,
          timePicker: true,
        },
        component_inputs: [
          { label: 'DateFormat', prop: '[dateFormat]', description: 'Change the format of date.', dataType: 'String' },
          {
            label: 'InputGivenOrNot',
            prop: '[inputGivenOrNot]',
            description: 'You use the input then pass the value of True or False.',
            dataType: 'Boolean',
          },
          {
            label: 'Time picker',
            prop: '[timePicker]',
            description: 'You use the time then pass the value of True or False.',
            dataType: 'Boolean',
          },
          {
            label: 'Range',
            prop: '[range]',
            description: 'You use the range then pass the value of True or False.',
            dataType: 'Boolean',
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
