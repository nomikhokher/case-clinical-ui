import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-incentives',
  template: `
    <ng-container *ngIf="direction == 'horizontal'">
      <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
        <div>
          <div class="bg-gray-50 dark:bg-gray-700">
            <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
              <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
                <div class="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                  <div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                      We built our business on great customer service
                    </h2>
                    <p class="mt-4 text-gray-500 dark:text-gray-100">
                      At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                      caring about that. Our new strategy is to write a bunch of things that look really good in the
                      headlines, then clarify in the small print but hope people don't actually read it.
                    </p>
                  </div>
                  <div class="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                      alt=""
                      class="object-center object-cover"
                    />
                  </div>
                </div>
                <div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                  <ng-container *ngFor="let incentive of incentives">
                    <div class="sm:flex lg:block">
                      <div class="sm:flex-shrink-0">
                        <img class="w-16 h-16 dark:bg-white dark:rounded" src="{{ incentive.imageSrc }}" alt="" />
                      </div>
                      <div class="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ incentive.name }}</h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-white">
                          {{ incentive.description }}
                        </p>
                      </div>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="direction == 'vertical'">
      <div class="bg-gray-50 dark:bg-gray-700">
        <h2 class="sr-only">Our perks</h2>
        <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div
            class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            <ng-container *ngFor="let incentive of incentives">
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="w-28 h-24 dark:bg-white dark:rounded" src="{{ incentive.imageSrc }}" alt="" />
                  </div>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ incentive.name }}</h3>
                  <p class="mt-2 text-sm text-gray-500 dark:text-white">
                    {{ incentive.description }}
                  </p>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class WebUiIncentivesComponent {
  @Input() direction: string
  @Input() incentives: Incentives[]
}

type Incentives = {
  name: string
  imageSrc: string
  description: string
}
