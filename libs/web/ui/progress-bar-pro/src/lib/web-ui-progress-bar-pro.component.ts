import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-progress-bar-pro',
  template: `
    <div class="">
      <h4 class="sr-only">Status</h4>
      <p class="text-sm font-medium text-gray-900">{{ barTitle }}</p>
      <div class="mt-6" aria-hidden="true">
        <div class="bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-2 bg-indigo-600 rounded-full"
            style="width: calc( {{ statusLevel }} / {{ barData.length }} * 100%);"
            [ngClass]="[statusLevel == 1 ? 'w-8' : '', statusLevel == barData.length ? 'w-full' : '']"
          ></div>
        </div>
        <div class="hidden sm:flex justify-between text-sm font-medium text-gray-600 mt-6">
          <div
            class=""
            *ngFor="let item of barData; let i = index"
            [ngClass]="i < statusLevel ? 'text-indigo-600' : 'text-gray-600'"
          >
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProgressBarProComponent {
  @Input() barTitle?: string
  @Input() barData?: any
  @Input() statusLevel?: number | string
}
