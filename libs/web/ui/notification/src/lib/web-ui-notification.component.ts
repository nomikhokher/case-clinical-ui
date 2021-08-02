import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-notification',
  template: `
    <div
      class="dark:bg-gray-800 dark:text-gray-100 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow"
    >
      <div>
        <code>ui-notification</code>
        <div
          aria-live="assertive"
          class="fixed inset-16 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
          *ngIf="show"
        >
          <div
            class="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="p-4 {{ background ? 'bg-' + background + '-200' : '' }} dark:bg-gray-800">
              <ng-container *ngIf="icon || title || bottomSectionButton || name || closeBtn">
                <div class="flex items-start">
                  <img *ngIf="avatarImg" class="h-10 w-10 rounded-full" src="{{ avatarImg }}" alt="" />
                  <ui-icon *ngIf="avatarImg ? '' : icon" size="lg" icon="{{ icon }}" class="h-6 w-6"></ui-icon>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100" *ngIf="name">{{ name }}</p>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" *ngIf="title">{{ title }}</p>
                    <div class="mt-3 flex space-x-4" *ngIf="bottomSectionButton">
                      <ng-container *ngFor="let itemButton of bottomSectionButton">
                        <button
                          (click)="[itemButton.fn('bottom action')]"
                          class="bg-transparent capitalize rounded-md px-3 py-2 transition-all ease-in-out delay-30 text-sm font-medium text-gray-600 dark:text-gray-400 dark:hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {{ itemButton.name }}
                        </button>
                      </ng-container>
                    </div>
                  </div>
                  <ng-container *ngIf="closeBtn">
                    <div class="ml-4 flex-shrink-0 flex">
                      <button
                        (click)="close()"
                        class="bg-transparent rounded-md inline-flex text-gray-400 dark:text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiNotificationComponent {
  @Input() name?: string
  @Input() title?: string
  @Input() icon?: string
  @Input() closeBtn?: boolean
  @Input() show: boolean
  @Input() bottomSectionButton?: ButtonReply[]
  @Input() timeInSec?: number
  @Input() avatarImg?: string
  @Input() background?: string

  @Output() closeValue = new EventEmitter<any>()
  @Output() timeSec = new EventEmitter<number>()
  ngOnInit(): void {
    this.timeSec.emit(this.timeInSec ? this.timeInSec : 3)
  }

  close() {
    this.closeValue.emit(!this.show)
  }
}

interface ButtonReply {
  id?: number
  name: string
  fn?: (x: any) => any
}
