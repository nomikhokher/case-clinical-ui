import { Component, Input, TemplateRef } from '@angular/core'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Meta } from '@schema-driven/web/ui/page-header'

@Component({
  selector: 'ui-page',
  template: `
    <div class="overflow-y-auto" [style.max-height]="'calc(100vh - 60px)'">
      <ui-breadcrumbs [crumbs]="breadcrumbs"></ui-breadcrumbs>
      <div class="lg:flex lg:items-center px-4 sm:px-6 lg:px-8 lg:justify-between mx-auto" [class.max-w-7xl]="!fluid">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">
            {{ headerTitle }}
          </h2>

          <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div class="mt-2 flex items-center text-sm text-gray-300 dark:text-gray-400 text-gray-500">
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-500 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                />
              </svg>
              <ui-icon></ui-icon>
              Full-time
            </div>
          </div>
        </div>

        <ng-container *ngIf="controlsTemplate">
          <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <ng-container *ngTemplateOutlet="controlsTemplate"></ng-container>
          </div>
        </ng-container>
      </div>

      <div class="flex-grow py-8 overflow-y-auto">
        <div class="mx-auto px-3 md:px-6 lg:px-8 h-full" [class.max-w-7xl]="!fluid">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPageComponent {
  @Input() breadcrumbs?: Crumb[]
  @Input() headerTitle?: string
  @Input() headerMeta?: Meta[]
  @Input() controlsTemplate: TemplateRef<any>
  @Input() fluid: boolean = true
}
