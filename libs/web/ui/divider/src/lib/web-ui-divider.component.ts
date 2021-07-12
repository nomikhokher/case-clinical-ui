import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-divider',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <ng-container *ngFor="let divider of dividers">
              <div class="relative flex justify-{{ divider.directionIcon }}">
                <span class="px-2 bg-white text-sm text-gray-500" *ngIf="divider.icon">
                  <ui-icon [icon]="divider.icon"></ui-icon>
                </span>
                <span
                  class="bg-white"
                  *ngIf="divider.label"
                  [ngClass]="divider.title ? 'px-3 text-lg font-medium text-gray-900' : 'px-2 text-sm text-gray-500'"
                >
                  {{ divider.label }}
                </span>
                <ng-container *ngIf="toolbar">
                  <ng-content select="#toolbar"></ng-content>
                </ng-container>
              </div>
            </ng-container>
          </div>
        </code>
      </div>
    </div>
  `,
})
export class WebUiDividerComponent {
  @Input() dividers?: any
  @Input() toolbar?: any
}
