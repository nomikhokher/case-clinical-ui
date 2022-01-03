import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-feature-sections-by-grid-with-offset-icons',
  template: `
    <!-- <div class="relative bg-white py-16 sm:py-24 lg:py-20"> -->
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-base font-semibold tracking-wider text-indigo-600 uppercase ">Deploy faster</h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
        {{ featureOverview.heading }}
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-400">
        {{ featureOverview.description }}
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div *ngFor="let item of tabsData" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <!-- Heroicon name: outline/cloud-upload -->
                    <ui-icon size="lg" class="h-6 w-6" icon="{{ item.icon }}"></ui-icon>
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ item.title }}</h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  `,
})
export class WebUiFeatureSectionsByGridWithOffsetIconsComponent {
  @Input() tabsData?: TabsData[]
  @Input() featureOverview?: featureOverview
}
interface TabsData {
  id?: number
  icon?: string
  title?: string
  description?: string
}
interface featureOverview {
  heading?: string
  description?: string
}
