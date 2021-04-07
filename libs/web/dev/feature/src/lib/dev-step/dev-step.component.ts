import { Component } from '@angular/core'
import { DevStepStore } from './dev-step.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-step></ui-step>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStepStore],
})
export class DevStepComponent {
  demo = {
    code: '<ui-step></ui-step>',
    lang: 'html',
  }

  code_toggle = false

  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStepStore) {}
}
