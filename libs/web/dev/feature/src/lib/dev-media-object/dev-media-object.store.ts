import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevMediaObjectState {
  items?: Item[]
  loading?: boolean
  config
}

const config = {
  headerTitle: 'Media Object',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/media-object/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Media Object', path: '/dev/media-objects' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-media-object.component.ts',
  items: {
    circle: true,
    verticalDirection: 'center',
    height: 20,
    width: 20,
    horizontalDirection: 'left',
    title: 'Lorem ipsum',
    description: ` Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
    quidem ipsam quia iusto.`,
  },
  component_inputs: [
    {
      label: 'Circle',
      prop: '[circle]',
      description: 'Adjust the roundness of object',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Vertical Position',
      prop: '[verticalDirection]',
      description: 'Adjust the vertical position of content.',
      dataType: 'String',
      type: ['start', 'center', 'end'],
    },
    {
      label: 'Horizontal Position',
      prop: '[horizontalDirection]',
      description: 'Adjust the horizontal position of content.',
      dataType: 'String',
      type: ['left', 'right'],
    },
    { label: 'Title', prop: '[title]', description: 'Shows the title.', dataType: 'String' },
    { label: 'Description', prop: '[description]', description: 'Shows the description.', dataType: 'String' },
    { label: 'Hieght', prop: '[height]', description: 'Adjust the hieght of object', dataType: 'Number' },
    { label: 'Width', prop: '[width]', description: 'Adjust the width of object', dataType: 'Number' },
  ],
}

@Injectable()
export class DevMediaObjectStore extends ComponentStore<DevMediaObjectState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  readonly loadItemsEffect = this.effect(($) =>
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
  )
}
