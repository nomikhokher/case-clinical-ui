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

interface DevWeatherUpdatesState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Weather Updates',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/weather-updates/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Weather Updates', path: '/dev/weather-updates' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-weather-updates/dev-weather-updates.component.ts',
  items: {
    cardColor: 'gray',
    city: 'lahore',
  },

  component_inputs: [
    {
      label: 'Weather Card Color',
      prop: '[cardColor]',
      description: 'Adjust the color of background.',
      dataType: 'String',
      type: ['gray', 'red', 'blue', 'yellow', 'indigo', 'pink', 'purple', 'green'],
    },
    {
      label: 'City Name',
      prop: '[city]',
      description: 'Name of city of which you want to see the weather updates.',
      dataType: 'String',
      type: ['lahore', 'karachi', 'sialkot', 'delhi', 'chicago', 'washingtondc', 'berlin', 'tokyo'],
    },
  ],
}

@Injectable()
export class DevWeatherUpdatesStore extends ComponentStore<DevWeatherUpdatesState> {
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
