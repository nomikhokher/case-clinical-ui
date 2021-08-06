import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'

export interface Item {
  id?: string
  name?: string
}

interface DevToolbarState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Toolbar',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/toolbar/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Toolbar', path: '/dev/toolbar' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-toolbar/dev-toolbar.component.ts',
  items: {
    background: 'gray',
    buttons: [
      {
        icon: 'scissors',
        title: 'Cut',
      },
      {
        icon: 'copy',
        title: 'Copy',
      },
      {
        icon: 'clipboard',
        title: 'Paste',
      },
      {
        icon: 'colorPicker',
        title: 'Color Picker',
      },
      {
        icon: 'alignLeft',
        title: 'Align Left',
      },
      {
        icon: 'alignRight',
        title: 'Align Right',
      },
      {
        icon: 'alignCenter',
        title: 'Align Center',
      },
      {
        icon: 'arrowExpand',
        title: 'Arrow Expand',
      },
      {
        icon: 'setting',
        title: 'Setting',
      },
      {
        icon: 'cursor',
        title: 'Cursor',
      },
      {
        icon: 'download',
        title: 'Download',
      },
      {
        icon: 'upload',
        title: 'Upload',
      },
      {
        icon: 'mail',
        title: 'Mail Box',
      },
      {
        icon: 'edit',
        title: 'Edit',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Buttons',
      prop: '[buttons]',
      description: 'Shows the icons of toolbar.',
      dataType: 'Object',
      typeArray: [
        [{ icon: icon }, { title: 'Cut' }],
        [{ icon: icon }, { title: 'Copy' }],
        [{ icon: icon }, { title: 'Paste' }],
        [{ icon: icon }, { title: 'Color Picker' }],
        [{ icon: icon }, { title: 'Align Left' }],
        [{ icon: icon }, { title: 'Align Right' }],
        [{ icon: icon }, { title: 'Align Center' }],
        [{ icon: icon }, { title: 'Arrow Expand' }],
        [{ icon: icon }, { title: 'Setting' }],
        [{ icon: icon }, { title: 'Cursor' }],
        [{ icon: icon }, { title: 'Upload' }],
        [{ icon: icon }, { title: 'Mail Box' }],
        [{ icon: icon }, { title: 'Edit' }],
      ],
    },
    {
      label: 'Background Color',
      prop: '[background]',
      description: 'Adjust the background color of toolbar.',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevToolbarStore extends ComponentStore<DevToolbarState> {
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
