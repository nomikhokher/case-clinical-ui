import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-range-slider',
  styles: [
    `
      input[type='range']::-webkit-slider-thumb {
        pointer-events: all;
        width: 24px;
        height: 24px;
        -webkit-appearance: none;
        /* @apply w-6 h-6 appearance-none pointer-events-auto; */
      }
    `,
  ],
  template: `
    <div class="h-screen flex justify-center items-center">
      <div class="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            [min]="min"
            [max]="max"
            (input)="mintrigger()"
            [(ngModel)]="minprice"
            class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="100"
            [min]="min"
            [max]="max"
            (input)="maxtrigger()"
            [(ngModel)]="maxprice"
            class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div class="relative z-10 h-2">
            <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              class="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              [style]="'right:' + maxthumb + '%; left:' + minthumb + '%'"
            ></div>

            <div
              class="absolute z-30 w-6 h-6 top-0 bg-green-300 rounded-full -mt-2 -ml-1"
              [style]="'left: ' + minthumb + '%'"
            ></div>

            <div
              class="absolute z-30 w-6 h-6 top-0 bg-green-300 rounded-full -mt-2 -mr-3"
              [style]="'right: ' + maxthumb + '%'"
            ></div>
          </div>
        </div>

        <div class="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxlength="5"
              (input)="mintrigger()"
              [(ngModel)]="minprice"
              class="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxlength="5"
              (input)="maxtrigger()"
              [(ngModel)]="maxprice"
              class="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiRangeSliderComponent {
  @Input() minprice: number
  @Input() maxprice: number
  @Input() difference: number

  ngOnInit() {
    this.min = this.minprice
    this.max = this.maxprice
    this.mintrigger()
    this.maxtrigger()
  }
  min: number
  max: number
  minthumb: number = 0
  maxthumb: number = 0

  mintrigger() {
    this.minprice = Math.min(this.minprice, this.maxprice - this.difference)
    this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100
  }

  maxtrigger() {
    this.maxprice = Math.max(this.maxprice, this.minprice + this.difference)
    this.maxthumb = 100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100
  }
}
