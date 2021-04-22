import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-divider-toolbar',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <ng-container *ngFor="let dividerToolbar of dividerToolbars">
              <div class="relative flex justify-{{ dividerToolbar.directionToolbar }}">
                <ng-container *ngIf="dividerToolbar.toolbar">
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
export class WebUiDividerToolbarComponent {
  @Input() dividerToolbars?: any
}
