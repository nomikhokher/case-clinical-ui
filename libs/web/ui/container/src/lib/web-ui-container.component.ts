import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-container',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>
          <div
            class="mx-auto sm:px-6 lg:px-8"
            [ngClass]="[containerWidth ? containerWidth : 'max-w-7xl', containerPadding ? containerPadding : '']"
          >
            <ng-container *ngIf="narrowContainer">
              <ng-content select="#narrowContainer"></ng-content>
            </ng-container>
            <ng-container *ngIf="!narrowContainer">
              <ng-content select="#withoutNarrowContainer"></ng-content>
            </ng-container>
          </div>
        </code>
      </div>
    </div>
  `,
})
export class WebUiContainerComponent {
  @Input() containerWidth?: string
  @Input() containerPadding?: string
  @Input() narrowContainer?: string
}
