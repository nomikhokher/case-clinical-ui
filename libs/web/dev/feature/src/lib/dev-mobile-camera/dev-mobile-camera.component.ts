import { Component } from '@angular/core'
import { DevMobileCameraStore } from './dev-mobile-camera.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileCameraStore],
})
export class DevMobileCameraComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCameraStore) {}
}
