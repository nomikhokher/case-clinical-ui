import { Component } from '@angular/core'
import { DevPaginationStore } from './dev-pagination.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-pagination/dev-pagination.component.ts
      </code>
      <ui-pagination [pages]="pages" [isPages]="isPages" [isPageSpan]="isPageSpan" [direction]="direction">
      </ui-pagination>
    </ng-container>
  `,
  providers: [DevPaginationStore],
})
export class DevPaginationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPaginationStore) {}
  // 3 types of parameter can be passed (center, right, simple)
  public direction = 'right'
  public pages: Array<any> = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
    { page: 7 },
    { page: 8 },
    { page: 9 },
    { page: 10 },
    { page: 11 },
    { page: 12 },
    { page: 13 },
    { page: 14 },
    { page: 15 },
    { page: 16 },
    { page: 17 },
    { page: 18 },
    { page: 19 },
    { page: 20 },
    { page: 21 },
    { page: 22 },
    { page: 23 },
    { page: 24 },
    { page: 25 },
    { page: 26 },
    { page: 27 },
    { page: 28 },
    { page: 29 },
    { page: 30 },
    { page: 31 },
    { page: 32 },
    { page: 33 },
    { page: 34 },
  ]

  public isPages: Boolean = this.pages.length ? true : false
  public isPageSpan: Boolean = this.pages.length > 3 ? true : false
}
