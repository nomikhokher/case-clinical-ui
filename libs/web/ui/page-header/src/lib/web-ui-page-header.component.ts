import { Component, Input, TemplateRef } from '@angular/core'
import { Meta } from './models'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'

@Component({
  selector: 'ui-page-header',
  template: `
    <div class="sm:flex items-center justify-center lg:items-center lg:justify-between mx-auto py-5 block">
      <div class="mr-3" *ngIf="imgSource">
        <img class="h-16 w-16 rounded-full" src="{{ imgSource }}" alt="Invalid URL" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="mb-3">
          <ui-breadcrumbs *ngIf="breadcrumbs" [crumbs]="breadcrumbs"></ui-breadcrumbs>
        </div>
        <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">
          {{ title }}
        </h2>
        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <ng-container *ngFor="let entry of meta">
            <div class="mt-2 flex items-center text-sm dark:text-gray-400 text-gray-500">
              <ui-icon
                *ngIf="entry.icon"
                class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-500 text-gray-400"
                [icon]="entry.icon"
              ></ui-icon>
              {{ entry.label }}
            </div>
          </ng-container>
        </div>
      </div>
      <ng-container *ngIf="controlsTemplate">
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <ng-container *ngTemplateOutlet="controlsTemplate"></ng-container>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebUiPageHeaderComponent {
  @Input() breadcrumbs?: Crumb[]
  @Input() title?: string
  @Input() meta?: Meta[]
  @Input() controlsTemplate: TemplateRef<any>
  @Input() imgSource?: string
}
