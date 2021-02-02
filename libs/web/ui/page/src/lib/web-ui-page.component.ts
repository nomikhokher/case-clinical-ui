import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page',
  template: `
    <div class="h-full flex flex-col justify-between">
      <header class="bg-gray-800 text-gray-300 shadow" *ngIf="headerTitle">
        <div class="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-bold leading-tight ">
            {{ headerTitle }}
          </h1>
          <div class="mt-0">
            <ng-content select="ui-page-header"></ng-content>
          </div>
        </div>
      </header>
      <div class="flex-grow">
        <div class="max-w-7xl mx-auto py-3 md:py-6 lg:py-12 px-3 md:px-6 lg:px-8 h-full overflow-auto">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPageComponent {
  @Input() headerTitle?: string
}
