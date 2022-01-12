import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-countdown/model'
//import { Configs } from '../dev-countdown/model'
export interface Item {
  id?: string
  name?: string
}

interface DevCountdownState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'CountDown',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/countdown/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'CountDown', path: '/dev/countdown' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-countdown.component.ts',
  items: {
    delay: 5,
    year: 0,
    month: 0,
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0,
    mode: false,
    timestamp: new Date('Jan 21, 2022 00:00:00').getTime(),
  },
  component_inputs: [
    {
      label: 'Delay',
      prop: '[delay]',
      description: 'Delay',
      dataType: 'Number',
    },
    {
      label: 'Year',
      prop: '[year]',
      description: 'Year',
      dataType: 'Number',
    },
    {
      label: 'Month',
      prop: '[month]',
      description: 'month',
      dataType: 'Number',
    },
    {
      label: 'Days',
      prop: '[days]',
      description: 'days',
      dataType: 'Number',
    },
    {
      label: 'Hours',
      prop: '[hours]',
      description: 'hours',
      dataType: 'Number',
    },
    {
      label: 'Minutes',
      prop: '[minutes]',
      description: 'minutes',
      dataType: 'Number',
    },
    {
      label: 'Seconds',
      prop: '[seconds]',
      description: 'seconds',
      dataType: 'Number',
    },
    {
      label: 'Mode',
      prop: '[mode]',
      description: `mode`,
      dataType: 'Boolean',
      type: ['false', 'true'],
    },
    {
      label: 'Timestamp',
      prop: '[timestamp]',
      description: 'timestamp',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevCountdownStore extends ComponentStore<DevCountdownState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    // this.loadItemsEffect()
  }
  //readonly config$ = this.select(this.state$, (s) => s.config)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
  getValueOfDate() {}
  /* readonly loadItemsEffect = this.effect(($) =>
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
  )*/
}
