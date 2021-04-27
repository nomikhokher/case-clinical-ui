import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-stats',
  template: `
    <div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="relative bg-white-500 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow overflow-hidden"
          [ngClass]="
            stats.border_none === 'first' ? 'rounded-l' : stats.border_none === 'last' ? 'rounded-r' : 'rounded-lg'
          "
        >
          <dt>
            <ng-container *ngIf="stats.icon">
              <div class="absolute bg-indigo-500 rounded-md p-3">
                <ui-icon [icon]="stats.icon"></ui-icon>
              </div>
            </ng-container>
            <p class="text-sm font-medium text-gray-500 truncate" [ngClass]="stats.icon && 'ml-16'">
              {{ stats.title }}
            </p>
          </dt>
          <dd class="pb-6 flex items-baseline" [ngClass]="stats.icon ? 'ml-16 sm:pb-7' : 'mt-1 text-3xl font-semibold'">
            <p class="text-2xl font-semibold text-gray-900">{{ stats.values.current }}</p>
            <p class="ml-2 flex items-baseline text-sm font-semibold">
              <!-- Heroicon name: solid/arrow-sm-up -->
              <svg
                class="self-center flex-shrink-0 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                [ngClass]="increased ? 'text-green-600' : 'text-red-500'"
              >
                <path
                  *ngIf="increased"
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
                <path
                  *ngIf="!increased"
                  fill-rule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only"> {{ increased ? 'Increased by' : 'Decreased by' }} </span>
              <ng-container *ngIf="stats.values.difference.type === 'numeric'">
                {{ stats.values.difference.numeric }}
              </ng-container>
              <ng-container *ngIf="stats.values.difference.type === 'percentage'">
                {{ stats.values.difference.percentage | number: '2.1-1' }} {{ '%' }}
              </ng-container>
            </p>
            <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <a href="{{ stats.link }}" class="font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span class="sr-only"> Total Subscribers stats</span></a
                >
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  `,
})
export class WebUiStatsComponent {
  @Input() stats: any

  public increased: boolean = false
  public avg: number

  ngOnInit() {
    if (!this.stats.values.overwrite) {
      if (+this.stats.values.current > +this.stats.values.previous) {
        let subl = +this.stats.values.current - +this.stats.values.previous
        let mul = subl * 100
        this.avg = mul / +this.stats.values.previous
        this.increased = true
        this.stats.values.difference.numeric = subl
        this.stats.values.difference.percentage = this.avg
      } else {
        let subl = +this.stats.values.previous - +this.stats.values.current
        let mul = subl * 100
        this.avg = mul / +this.stats.values.current
        this.increased = false
        this.stats.values.difference.numeric = subl
        this.stats.values.difference.percentage = this.avg
      }
    }
  }
}
