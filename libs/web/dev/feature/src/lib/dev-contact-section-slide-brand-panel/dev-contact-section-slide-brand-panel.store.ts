import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-contact-section-slide-brand-panel/model'
export interface Item {
  id?: string
  name?: string
}

interface DevContactSectionSlideBrandPanelState {
  //items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Contact Section By Slide Brand Panel',
  githubURL:
    'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/contact-section-slide-brand-panel/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Contact-Section-By-Slide-Brand-Panel', path: '/dev/contact-section-slide-brand-panel' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-contact-section-slide-brand-panel.component.ts',
}

@Injectable()
export class DevContactSectionSlideBrandPanelStore extends ComponentStore<DevContactSectionSlideBrandPanelState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    //this.loadItemsEffect()
  }
  readonly config$ = this.select(this.state$, (s) => s.config)
  //readonly items$ = this.select(this.state$, (s) => s.items)
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
