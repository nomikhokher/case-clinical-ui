import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { WebUiToastService } from '@schema-driven/web/ui/toast'
import { tap } from 'rxjs/operators'

export interface Demo {
  id?: string
  demo?: () => void
}

interface DevToastState {
  demos?: Demo[]
}

@Injectable()
export class DevToastStore extends ComponentStore<DevToastState> {
  constructor(private readonly toast: WebUiToastService) {
    super({
      demos: [],
    })
    this.patchState({
      demos: [
        { id: 'show', demo: this.showToastEffect },
        { id: 'error', demo: this.errorToastEffect },
        { id: 'warning', demo: this.warningToastEffect },
        { id: 'loading', demo: this.loadingToastEffect },
        { id: 'success', demo: this.successToastEffect },
      ],
    })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))

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
}
