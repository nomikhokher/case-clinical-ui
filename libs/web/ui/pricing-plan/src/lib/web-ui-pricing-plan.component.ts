import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-pricing-plan',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center">
          <h1 class="text-5xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-center">
            {{ planSections.title }}
          </h1>
          <p class="mt-5 text-xl text-gray-500 dark:text-gray-300 sm:text-center">{{ planSections.description }}</p>
          <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <ng-container *ngFor="let btn of planSections.buttons">
              <button
                type="button"
                class="relative w-1/2  border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 bg-{{
                  btn.bgColor ? btn.bgColor : 'bg-white'
                }}-200"
              >
                {{ btn.label }}
              </button>
            </ng-container>
          </div>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
        >
          <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200" *ngFor="let card of cards">
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">
                {{ card.cardHeader.heading }}
              </h2>
              <p class="mt-4 text-sm text-gray-500 dark:text-gray-300">All the basics for starting a new business</p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900 dark:text-gray-50">{{
                  '$' + card.cardHeader.price
                }}</span>
                <span class="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>
              </p>
              <a
                href="javascript:void(0)"
                class="mt-8 block w-full border border-gray-800 rounded-md py-2 text-sm font-semibold
              text-white dark:text-gray-800 dark:bg-gray-200 text-center dark:hover:bg-gray-50 hover:bg-{{
                  card.cardHeader.btnColor ? card.cardHeader.btnColor : 'gray'
                }}-900 bg-{{ card.cardHeader.btnColor ? card.cardHeader.btnColor : 'gray' }}-800"
              >
                {{ card.cardHeader.btnLabel }}</a
              >
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3 class="text-xs font-medium text-gray-900 dark:text-gray-50 tracking-wide uppercase">
                {{ card.cardBody.heading }}
              </h3>
              <ul class="mt-6 space-y-4">
                <li class="flex space-x-3" *ngFor="let point of card.cardBody.points">
                  <!-- Heroicon name: solid/check -->
                  <ui-icon icon="{{ point.icon }}" [class]="'flex-shrink-0 h-4 w-4 text-green-500'"></ui-icon>
                  <span class="text-sm text-gray-500 dark:text-gray-300">{{ point.text }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPricingPlanComponent {
  @Input() cards: Card[]
  @Input() planSections: PlanSection
}

interface PlanSection {
  title?: string
  description?: string
  buttons?: Buttons[]
}

interface Buttons {
  label?: string
  bgColor?: string
}

interface Card {
  cardHeader?: CardHead
  cardBody?: CardBody
}

interface CardHead {
  heading?: string
  description?: string
  icon?: string
  price?: number
  btnLabel?: string
  btnColor?: string
}

interface CardBody {
  heading?: string
  points?: Point[]
}

interface Point {
  text?: string
  icon?: string
}
