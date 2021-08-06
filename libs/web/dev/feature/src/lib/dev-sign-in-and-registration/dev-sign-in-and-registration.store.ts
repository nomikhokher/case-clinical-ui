import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'
import { UiIcon } from '@schema-driven/web/ui/icon'
export interface Item {
  id?: string
  name?: string
}

interface DevSignInAndRegistrationState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

let icon = Object.values(UiIcon)
const config: Configs = {
  headerTitle: 'Registration From',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/sign-in-and-registration/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Registration From', path: '/dev/sign-in-and-registration' },
  ],
  directory: '/libs/web/dev/feature/src/lib/devsign-in-and-registration/dev-sign-in-and-registration.component.ts',
  items: {
    title: 'Registration Form',
    image:
      'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    icons: [{ icon: 'github' }, { icon: 'email' }],
  },
  component_inputs: [
    { label: 'Title', prop: '[title]', description: 'Shows the title of form.', dataType: 'String' },
    { label: 'Image or Icon', prop: '[image]', description: 'Shows the image or icon on the top.', dataType: 'String' },
    {
      label: 'Icon Buttons',
      prop: '[icons]',
      description: 'Shows the buttons on bottom of form.',
      dataType: 'Array<string>',
      typeArray: [[{ icon: icon }], [{ icon: icon }]],
    },
  ],
}

@Injectable()
export class DevSignInAndRegistrationStore extends ComponentStore<DevSignInAndRegistrationState> {
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
