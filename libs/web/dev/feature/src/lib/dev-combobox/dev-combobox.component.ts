import { Component } from '@angular/core'
import { DevComboboxStore } from './dev-combobox.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevComboboxStore],
})
export class DevComboboxComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevComboboxStore) {}
}
