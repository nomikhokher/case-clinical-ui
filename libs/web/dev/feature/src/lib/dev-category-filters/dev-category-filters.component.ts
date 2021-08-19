import { Component } from '@angular/core'
import { DevCategoryFiltersStore } from './dev-category-filters.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-category-filters></ui-category-filters>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCategoryFiltersStore],
})
export class DevCategoryFiltersComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCategoryFiltersStore) {}
}
