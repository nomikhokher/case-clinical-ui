import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Timeline, Inputs } from './model'

export interface Item {
  id?: string
  name?: string
  timelines: Timeline[]
}

interface DevTimelineState {
  config?: Config
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData?: PreviewData
  items?: Item
  loading?: boolean
  component_inputs?: Inputs[]
  component_outputs?: Inputs[]
}

@Injectable()
export class DevTimelineStore extends ComponentStore<DevTimelineState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Timeline',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/timeline/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Timeline', path: '/dev/timeline' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-timeline/dev-timeline.component.ts',
        },
        items: {
          timelines: [
            {
              id: '1',
              timelineColor: 'bg-pink-500',
              icon: 'check',
              status: 'Package Booked',
              statusTitle: 'Customer cancelled the order',
            },
            {
              id: '2',
              timelineColor: 'bg-red-500',
              icon: 'x',
              status: 'Cancelled',
              statusTitle: 'Customer cancelled the order',
            },
            {
              id: '2',
              timelineColor: 'bg-gray-300',
              icon: 'information_circle',
              status: 'Delivered',
            },
          ],
        },
        component_inputs: [
          {
            label: 'Timelines',
            prop: '[timelines]',
            description:
              'timeline | Business English ... a plan or a line that shows the dates when the different stages of an activity or process should be completed.',
            dataType: 'Array',
            typeArray: [
              [
                { timelineColor: 'bg-pink-500' },
                { icon: Object.values(UiIcon) },
                { status: 'Package Booked' },
                { statusTitle: 'Customer cancelled the order' },
              ],
              [
                { timelineColor: 'bg-pink-500' },
                { icon: Object.values(UiIcon) },
                { status: 'Package Booked' },
                { statusTitle: 'Customer cancelled the order' },
              ],
              [
                { timelineColor: 'bg-pink-500' },
                { icon: Object.values(UiIcon) },
                { status: 'Package Booked' },
                { statusTitle: 'Customer cancelled the order' },
              ],
            ],
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
