import { Component } from '@angular/core'
import { DevListContainerStore } from './dev-list-container.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-list-container/dev-list-container.component.ts
      </code>
      <ui-preview>
        <ui-list-container [classNames]="''" [roundedDividers]="">
          <ng-container class="roundedDividers">
          <p class="py-4">Simple with dividers</p>
          <p class="py-4">Simple with dividers</p>
          </ng-container>
         
        </ui-list-container>
      </ui-preview>
      <ui-preview>
        <ui-list-container [classNames]="''" [roundedDividers]="roundedDividers">
        <ng-container class="roundedDividersNot">
        <p class="py-4">Simple with dividers</p>
          <p class="py-4">Simple with dividers</p>
        </ng-container>
         
        </ui-list-container>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevListContainerStore],
})
export class DevListContainerComponent {
  readonly vm$ = this.store.vm$
  public classNames:string;
  public roundedDividers:boolean = true;
  constructor(private readonly store: DevListContainerStore) {}
}
