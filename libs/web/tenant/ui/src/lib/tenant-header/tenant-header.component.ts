import { Component, Input } from '@angular/core'

@Component({
  selector: 'tenant-header',
  template: `
    <div class="mb-3 md:mb-6 pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ title }}
      </h3>
      <div class="mt-3 sm:mt-0 sm:ml-4">
        <a
          [routerLink]="linkPath"
          *ngIf="linkPath && linkTitle"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ linkTitle }}
        </a>
      </div>
    </div>
  `,
})
export class TenantHeaderComponent {
  @Input() title?: string
  @Input() linkPath?: string
  @Input() linkTitle?: string
}
