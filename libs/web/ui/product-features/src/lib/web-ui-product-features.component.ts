import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-features',
  template: `
    <!-- With Tabs Section -->
    <div class="bg-white dark:bg-gray-800" *ngIf="withTabs === 'true' || withTabs === true">
      <section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
        <div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div class="max-w-3xl">
            <h2
              id="features-heading"
              class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl"
            >
              {{ featureOverview.heading }}
            </h2>
            <p class="mt-4 text-gray-500 dark:text-gray-100">
              {{ featureOverview.description }}
            </p>
          </div>

          <div class="mt-4">
            <div class="-mx-4 flex overflow-x-auto sm:mx-0">
              <div class="flex-auto px-4 border-b border-gray-200 dark:border-gray-600 sm:px-0">
                <div class="-mb-px flex space-x-10" aria-orientation="horizontal" role="tablist">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                  <button
                    *ngFor="let item of tabs"
                    (click)="activeTab(item.id)"
                    id="features-tab-1"
                    class=" hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 whitespace-nowrap py-6 border-b-2 font-medium text-sm focus:outline-none"
                    aria-controls="features-panel-1"
                    role="tab"
                    type="button"
                    [ngClass]="
                      selectedTab == item.id
                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                        : 'border-transparent text-gray-500 dark:text-gray-300'
                    "
                  >
                    {{ item.name }}
                  </button>
                </div>
              </div>
            </div>
            <ng-container *ngFor="let item of tabsData">
              <div
                *ngIf="selectedTab == item.id"
                id="features-panel-1"
                class="space-y-16 pt-10 lg:pt-16"
                aria-labelledby="features-tab-1"
                role="tabpanel"
                tabindex="0"
              >
                <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <div class="mt-6 lg:mt-0 lg:col-span-5">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-300">{{ item.title }}</h3>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-100">
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="lg:col-span-7">
                    <div
                      class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
                    >
                      <img
                        src="{{ item.productImg }}"
                        alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
                        class="object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </section>
    </div>

    <!-- Without Tabs Section -->

    <div class="bg-white dark:bg-gray-800" *ngIf="withTabs === 'false' || withTabs === false">
      <div class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="max-w-3xl">
          <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            {{ featureOverview.heading }}
          </p>
          <p class="mt-4 text-gray-500 dark:text-gray-100">
            {{ featureOverview.description }}
          </p>
        </div>

        <div
          class="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
          <div class="flex flex-col-reverse" *ngFor="let item of tabsData">
            <div class="mt-6">
              <h3 class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.title }}</h3>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-100">
                {{ item.description }}
              </p>
            </div>
            <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
              <img
                [src]="item.productImg"
                alt="Green cardstock box containing white, beige, and brown cards."
                class="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductFeaturesComponent {
  @Input() withTabs: boolean | string = true
  @Input() tabs?: Tabs[]
  @Input() tabsData?: TabsData[]
  @Input() featureOverview?: featureOverview
  public selectedTab = 1

  activeTab(id) {
    this.selectedTab = Number(id)
  }
}

interface Tabs {
  id?: number
  name?: string
}
interface TabsData {
  id?: number
  title?: string
  description?: string
  productImg?: string
}
interface featureOverview {
  heading?: string
  description?: string
}
