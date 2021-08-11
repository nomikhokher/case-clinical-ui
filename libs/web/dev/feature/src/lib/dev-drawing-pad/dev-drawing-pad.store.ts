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

interface DevDrawingPadState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Drawing Pad',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/drawing-pad/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Drawing Pad', path: '/dev/drawing-pad' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-drawing-pad/dev-drawing-pad.component.ts',
  items: {
    width: 400,
    height: 400,
    strokeStyle: 'fff',
    lineWidth: 10,
  },
  component_inputs: [
    { label: 'Width of Pad', prop: '[width]', description: 'Adjust the width of drawing pad.', dataType: 'Number' },
    { label: 'Height of Pad', prop: '[height]', description: 'Adjust the height of drawing pad.', dataType: 'Number' },
    {
      label: 'Color of Stroke',
      prop: '[strokeStyle]',
      description: 'Adjust the color of line stroke.',
      dataType: 'String',
    },
    { label: 'Width of line', prop: '[lineWidth]', description: 'Adjust the width of line', dataType: 'Number' },
  ],
}

@Injectable()
export class DevDrawingPadStore extends ComponentStore<DevDrawingPadState> {
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
