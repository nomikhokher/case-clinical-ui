import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-rating',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <div class="flex justify-center items-center">
          <div
            class="flex flex-col items-center justify-center space-y-2 rounded m-2 w-72 h-56 p-3 bg-gray-200 mx-auto"
          >
            <div class="flex space-x-0 bg-gray-100">
              <ng-container *ngFor="let star of ratings">
                <button
                  (click)="rate(star.amount)"
                  (mouseover)="hoverRating = star.amount"
                  (mouseleave)="hoverRating = rating"
                  aria-hidden="true"
                  [title]="star.label"
                  class="rounded-sm text-gray-400 fill-current focus:outline-none focus:shadow-outline p-1 w-12 m-0 cursor-pointer"
                  [ngClass]="{
                    'text-gray-600': hoverRating >= star.amount,
                    'text-yellow-400': rating >= star.amount && hoverRating >= star.amount
                  }"
                >
                  <svg
                    class="w-15 transition duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>
              </ng-container>
            </div>
            <div class="p-2">
              <ng-container *ngIf="rating || hoverRating">
                <p>{{ currentLabel() }}</p>
              </ng-container>
              <ng-container *ngIf="!rating && !hoverRating">
                <p>Please Rate!</p>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiRatingComponent {
  rating = 0
  hoverRating = 0
  @Input() ratings?: Rating[]
  rate(amount) {
    if (this.rating == amount) {
      this.rating = 0
    } else this.rating = amount
  }
  currentLabel() {
    let r = this.rating
    if (this.hoverRating != this.rating) r = this.hoverRating
    let i = this.ratings?.findIndex((e) => e.amount == r)
    if (i >= 0) {
      return this.ratings[i].label
    } else {
      return ''
    }
  }
}

type Rating = {
  amount: string | number
  label: string
}
