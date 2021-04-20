import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-notification-image',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>ui-notification-image</code>

        <div
          aria-live="assertive"
          class="fixed inset-16 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
          *ngIf="show"
        >
          <div
            class="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
          >
            <div class="w-0 flex-1 p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 pt-0.5" *ngIf="avatarImg">
                  <img class="h-10 w-10 rounded-full" src="{{ avatarImg }}" alt="" />
                </div>
                <div class="ml-3 w-0 flex-1">
                  <p class="text-sm font-medium text-gray-900" *ngIf="name">{{ name }}</p>
                  <p class="mt-1 text-sm text-gray-500" *ngIf="title">{{ title }}</p>

                  <ng-container *ngIf="bottomSectionButton">
                    <button
                      *ngFor="let itemButton of bottomSectionButton; first as firstElement"
                      [ngClass]="firstElement ? ' ' : 'ml-2'"
                      type="button"
                      (click)="[itemButton.fn('bottom action')]"
                      class="inline-flex items-center mt-2 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {{ itemButton.name }}
                    </button>
                  </ng-container>
                </div>
              </div>
            </div>

            <ng-container *ngIf="leftSectionButton">
              <div class="flex">
                <div class="flex flex-col divide-y divide-gray-200 border-l border-gray-200">
                  <div class="h-0 flex-1 flex" *ngFor="let itemButton of leftSectionButton">
                    <button
                      (click)="[itemButton.fn('left action')]"
                      class="w-full border border-transparent rounded-none rounded-tr-lg px-4 py-3 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-indigo-500"
                    >
                      {{ itemButton.name }}
                    </button>
                  </div>
                </div>
              </div>
            </ng-container>

            <ng-container *ngIf="leftSectionButton && closeBtn">
              <div class="border-l">
                <div class="m-4 flex-shrink-0 flex">
                  <button
                    (click)="close()"
                    class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </ng-container>

            <ng-container *ngIf="closeBtn && !leftSectionButton">
              <div class="m-4 flex-shrink-0 flex">
                <button
                  (click)="close()"
                  class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiNotificationImageComponent {
  @Input() name?: string
  @Input() title?: string
  @Input() avatarImg?: string
  @Input() closeBtn?: boolean
  @Input() leftSectionButton?: any
  @Input() bottomSectionButton?: any
  @Input() show: boolean

  @Output() closeValue = new EventEmitter<any>()

  close() {
    this.closeValue.emit(!this.show)
  }
}
