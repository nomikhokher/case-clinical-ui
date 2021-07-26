import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-slide-over/model'

export interface Item {
  id?: string
  name?: string
}

interface DevSlideOverState {
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Slide Over',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/slide-over/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Slide Over', path: '/dev/slide-over' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-slide-over.component.ts',
  items: {
    width: 'max-w-2xl',
    overlay: 'bg-gray-500 bg-opacity-75 transition-opacity',
    slideOverHeader: true,
    slideOverFooter: true,
    closeButtonOutSide: true,
  },

  component_inputs: [
    { label: 'Layout Width', prop: '[width]', description: 'Set width of the layout.', dataType: 'string' },
    { label: 'Layout Overlay', prop: '[overlay]', description: 'Show the Overlay of Layout.', dataType: 'string' },
    {
      label: 'SlideOver Header',
      prop: '[slideOverHeader]',
      description: 'Show header on layout.',
      dataType: 'boolean',
    },
    {
      label: 'SlideOver Footer',
      prop: '[slideOverFooter]',
      description: 'Show footer on layout.',
      dataType: 'boolean',
    },
    {
      label: 'Close Button OutSide',
      prop: '[closeButtonOutSide]',
      description: 'Close the Layout to click on button',
      dataType: 'boolean',
    },
  ],
}

@Injectable()
export class DevSlideOverStore extends ComponentStore<DevSlideOverState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
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
