import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-multiple-alert',
  template: `
    <div
      class="bg-blue-100 rounded-lg py-5 px-6 mb-3 text-base text-blue-700 inline-flex items-center w-full"
      *ngFor="let item of tabsData"
      role="alert"
    >
      <ui-icon size="lg" class="h-6 w-6" icon="{{ item.icon }}"></ui-icon>
      <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{{ item.title }}</h3>
    </div>
  `,
})
export class WebUiMultipleAlertComponent {
  @Input() tabsData?: TabsData[]
}
interface TabsData {
  id?: number
  icon?: string
  title?: string
}
