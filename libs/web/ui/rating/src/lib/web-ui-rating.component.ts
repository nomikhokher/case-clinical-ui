import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-rating',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 md:mb-6 rounded-lg shadow">
      <div>
        <div class="flex justify-center items-center">
          <div class="flex flex-col items-center justify-center rounded m-2 w-auto h-auto mx-auto">
            <div class="flex space-x-0">
              <ng-container *ngFor="let star of ratings">
                <button
                  (click)="rate(star.amount)"
                  (mouseover)="hoverRating = star.amount"
                  (mouseleave)="hoverRating = rating"
                  aria-hidden="true"
                  [title]="star.label"
                  class="rounded-sm text-gray-400 fill-current w-{{
                    iconSize
                  }} focus:outline-none focus:shadow-outline p-1 m-0 cursor-pointer"
                  [ngClass]="{
                    'text-gray-600': hoverRating >= star.amount
                  }"
                  [ngClass]="rating >= star.amount && hoverRating >= star.amount ? changeColor() : ''"
                >
                  <ui-icon icon="{{ icon }}" class="w-{{ iconSize }} bg-{{ ratingColor }}-400"></ui-icon>
                </button>
              </ng-container>
            </div>
            <div class="p-2">
              <ng-container *ngIf="rating || hoverRating">
                <p class="dark:text-gray-100">{{ currentLabel() }}</p>
              </ng-container>
              <ng-container *ngIf="!rating && !hoverRating">
                <p class="dark:text-gray-100">Please Rate!</p>
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
  @Input() ratingColor?: String
  @Input() icon?: String
  @Input() iconSize?: String
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

  changeColor() {
    return 'text-' + this.ratingColor + '-400'
  }
}

type Rating = {
  amount: string | number
  label: string
}
