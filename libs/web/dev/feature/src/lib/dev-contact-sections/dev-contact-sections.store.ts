import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-contact-sections/model'
export interface Item {
  id?: string
  name?: string
}

interface DevContactSectionsState {
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Contact Section',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/contact-sections/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Contact-Sections', path: '/dev/contact-sections' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-contact-sections.component.ts',
}

@Injectable()
export class DevContactSectionsStore extends ComponentStore<DevContactSectionsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    // this.loadItemsEffect()
  }
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
  getValueOfDate() {}
  /* readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState( { loading: true })),
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
