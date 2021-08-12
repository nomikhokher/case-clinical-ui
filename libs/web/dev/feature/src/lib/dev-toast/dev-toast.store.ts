import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { WebUiToastService } from '@schema-driven/web/ui/toast'
import { tap } from 'rxjs/operators'

export interface Demo {
  id?: string
  demo?
  demop?
  idp?
  idu?
  demodu?
}

interface DevToastState {
  demos?: Demo[]
  config
}

const config = {
  headerTitle: 'Toast',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/toast/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Toast', path: '/dev/toasts' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-toast.component.ts',
}

@Injectable()
export class DevToastStore extends ComponentStore<DevToastState> {
  constructor(private readonly toast: WebUiToastService) {
    super({
      demos: [],
      config,
    })
    this.patchState({
      demos: [
        {
          id: 'show',
          demo: this.showToastEffect,
          idp: 'Bottom Center',
          demop: this.bottomCenter,
          idu: 'Duration 1s',
          demodu: this.oneSeconds,
        },
        {
          id: 'error',
          demo: this.errorToastEffect,
          idp: 'Bottom Left',
          demop: this.bottomLeft,
          idu: 'Duration 2s',
          demodu: this.twoSeconds,
        },
        {
          id: 'warning',
          demo: this.warningToastEffect,
          idp: 'Bottom Right',
          demop: this.bottomRight,
          idu: 'Duration 3s',
          demodu: this.threeSeconds,
        },
        {
          id: 'loading',
          demo: this.loadingToastEffect,
          idp: 'Top Left',
          demop: this.topLeft,
          idu: 'Duration 4s',
          demodu: this.fourSeconds,
        },
        {
          id: 'success',
          demo: this.successToastEffect,
          idp: 'Top Right',
          demop: this.topRight,
          idu: 'Duration 5s',
          demodu: this.fiveSeconds,
        },
        {
          id: 'dismissible',
          demo: this.DismisToastEffect,
          idp: 'Top Center',
          demop: this.topCenter,
          idu: 'Default Duration',
          demodu: this.default,
        },
      ],
    })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))

  readonly showToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the show toast')
        this.toast.show('This is the show toast')
      }),
    ),
  )

  readonly errorToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the error toast')
        this.toast.error('This is the error toast')
      }),
    ),
  )

  readonly warningToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the warning toast')
        this.toast.warning('This is the warning toast')
      }),
    ),
  )

  readonly loadingToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the loading toast')
        this.toast.loading('This is the loading toast')
      }),
    ),
  )

  readonly successToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the success toast')
        this.toast.success('This is the success toast')
      }),
    ),
  )

  readonly DismisToastEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This is the success toast')
        this.toast.success('This toast is dismissible', { dismissible: true })
      }),
    ),
  )
  readonly bottomCenter = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Position in bottom center')
        this.toast.success('Position in bottom center', { position: 'bottom-center' })
      }),
    ),
  )

  readonly bottomLeft = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Posiiton is bottom left')
        this.toast.success('Posiiton is bottom left', { position: 'bottom-left' })
      }),
    ),
  )

  readonly bottomRight = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Position is bottom right')
        this.toast.success('Position is bottom right', { position: 'bottom-right' })
      }),
    ),
  )

  readonly topLeft = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Position is top left')
        this.toast.success('Position is top left', { position: 'top-left' })
      }),
    ),
  )

  readonly topRight = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Position is top right')
        this.toast.success('Position is top right', { position: 'top-right' })
      }),
    ),
  )

  readonly topCenter = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('Position is top center')
        this.toast.success('Position is top center', { position: 'top-center' })
      }),
    ),
  )

  readonly oneSeconds = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 1 second.')
        this.toast.success('This toast runs for 1 second.', { duration: 1000 })
      }),
    ),
  )

  readonly twoSeconds = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 2 second.')
        this.toast.success('This toast runs for 2 second.', { duration: 2000 })
      }),
    ),
  )

  readonly threeSeconds = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 3 second.')
        this.toast.success('This toast runs for 3 second.', { duration: 3000 })
      }),
    ),
  )

  readonly fourSeconds = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 4 second.')
        this.toast.success('This toast runs for 4 second.', { duration: 4000 })
      }),
    ),
  )

  readonly fiveSeconds = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 5 second.')
        this.toast.success('This toast runs for 5 second.', { duration: 5000 })
      }),
    ),
  )

  readonly default = this.effect(($) =>
    $.pipe(
      tap(() => {
        console.log('This toast runs for 6 second.')
        this.toast.success('This toast has default duration')
      }),
    ),
  )
}
