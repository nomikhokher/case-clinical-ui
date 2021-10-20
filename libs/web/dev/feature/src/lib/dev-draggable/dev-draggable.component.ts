import { Component } from '@angular/core'
import { DevDraggableStore } from './dev-draggable.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-draggable></ui-draggable>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDraggableStore],
})
export class DevDraggableComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDraggableStore) {}
}
