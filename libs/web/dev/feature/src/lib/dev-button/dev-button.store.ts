import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Variant } from '@schema-driven/web/ui/button'

export interface Item {
  id?: string
  name?: string
}

interface DevButtonState {
  items?: Item[]
  loading?: boolean
  config?
}

const config = {
  header: 'Buttons',
  directory: `libs/web/dev/feature/src/lib/dev-button/dev-button.component.ts`,
  buttons: [
    { label: 'Primary Button', variant: Variant.Primary },
    { label: 'Secondary Button', variant: Variant.Secondary },
    { label: 'White Button', variant: Variant.White },
    { label: 'Danger Button', variant: Variant.Danger },
    { label: 'Customizable Button', variant: Variant.Danger },
  ],
  component_inputs: [
    { label: 'Label', prop: '[label]', description: 'The text displayed in the button', dataType: 'String' },
    { label: 'Size', prop: '[size]', description: 'Adjusts button size', dataType: 'Size' },
    {
      label: 'Variant',
      prop: '[variant]',
      description: 'Adjusts button color',
      dataType: 'Variant',
      type: [Variant.Primary, Variant.Secondary, Variant.White, Variant.Danger, Variant.Success, Variant.Warning],
    },
  ],
  component_outputs: [
    { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
  ],
}

@Injectable()
export class DevButtonStore extends ComponentStore<DevButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
