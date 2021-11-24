import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevFolderOptionsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Folder Options',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/folder-options/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Folder Options', path: '/dev/folder-options' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-folder-options/dev-folder-options.component.ts',
  items: {
    download: {
      fileName: 'dummy.pdf',
      path: '/assets/documents/',
    },
    folder: {
      title: 'PDF Books',
      description: 'Lorem ipsum dolar...',
    },
    width: 'full',
  },

  component_inputs: [
    {
      label: 'Download option',
      prop: '[download]',
      description: 'To download the file in folder options.',
      dataType: 'Object',
      typeObj: [{ fileName: 'dummy.pdf' }, { path: '/assets/documents/' }],
    },
    {
      label: 'Folder Name',
      prop: '[folder]',
      description: 'For folder name and description.',
      dataType: 'Object',
      typeObj: [{ title: 'PDF Books' }, { description: 'Lorem ipsum dolar...' }],
    },
    {
      label: 'Width',
      prop: '[width]',
      description: 'Adjust the width of folder option component.',
      dataType: 'String',
      type: ['full', '1/3', '1/2', '2/3', '9/12', '10/11'],
    },
  ],
}

@Injectable()
export class DevFolderOptionsStore extends ComponentStore<DevFolderOptionsState> {
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
