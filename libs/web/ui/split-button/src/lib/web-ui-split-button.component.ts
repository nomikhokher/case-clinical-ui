import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-split-button',
  template: `
    <div class="flex">
      <div class="flex items-center border">
        <button
          class="py-2 px-4 capitalize tracking-wide border-r bg-gray-800 text-white font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </button>

        <div class="relative">
          <button
            (click)="dropdownOpen = !dropdownOpen"
            class="relative z-10 block bg-gray-800 border-l p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          <div *ngIf="dropdownOpen" (click)="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>

          <div
            *ngIf="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white border dark:bg-gray-800 rounded-md overflow-hidden shadow-xl z-20"
          >
            <ng-container *ngFor="let list of lists">
              <li class="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-2">
                <ui-icon [icon]="list.icon" [class]="'h6 w-6 dark:text-gray-200'"></ui-icon>
                <a href="javascript:void(0)" class="block px-2 dark:text-gray-200">{{ list.label }}</a>
              </li>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSplitButtonComponent {
  @Input() lists: Lists[]

  dropdownOpen: boolean = false
}

interface Lists {
  id?: string
  icon?: string
  label?: string
}
