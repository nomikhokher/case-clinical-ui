import { Component } from '@angular/core'
import { DevMobileGalleryStore } from './dev-mobile-gallery.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileGalleryStore],
})
export class DevMobileGalleryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileGalleryStore) {}
}
