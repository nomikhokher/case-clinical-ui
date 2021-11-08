import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

const config = {
  headerTitle: 'Upload',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/upload/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Upload', path: '/dev/upload' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-upload.component.ts',
  items: {
    imgSize: '36',
    buttonPostion: 'right',
    imgAlign: 'left',
  },
  component_inputs: [
    {
      label: 'Button Position',
      prop: '[imgSize]',
      description: 'Adjust the position of the buttons.',
      dataType: 'String',
      type: ['28', '32', '36', '40', '44', '48', '52', '56', '60'],
    },
    {
      label: 'Image Size',
      prop: '[buttonPostion]',
      description: 'Adjust the size of image.',
      dataType: 'String',
      type: ['left', 'right'],
    },
    {
      label: 'Image Alignment',
      prop: '[imgAlign]',
      description: 'Adjust the alignment of image.',
      dataType: 'String',
      type: ['left', 'right'],
    },
  ],
}

interface DevUploadState {
  items?: Item[]
  loading?: boolean
  config?
}

@Injectable()
export class DevUploadStore extends ComponentStore<DevUploadState> {
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
