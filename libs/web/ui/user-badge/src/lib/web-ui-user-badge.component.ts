import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-user-badge',
  template: `
    <button
      type="button"
      class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
    >
      <span class="min-w-0 flex-1 flex items-center space-x-3">
        <span class="block flex-shrink-0" *ngIf="userData.img">
          <img class="h-10 w-10 rounded-full" src="{{ userData.img }}" alt="" />
        </span>
        <span class="block min-w-0 flex-1">
          <span class="block text-sm font-medium dark:text-gray-100 text-gray-900 truncate">{{ userData.name }}</span>
          <span class="block text-sm font-medium dark:text-gray-200 text-gray-500 truncate">{{ userData.role }}</span>
        </span>
      </span>
      <span
        (click)="onUserClicked(userData.name)"
        class="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center"
      >
        <svg
          class="h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-200 dark:group-hover:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
  `,
})
export class WebUiUserBadgeComponent {
  @Input() userData: UserData
  @Output() onClicked = new EventEmitter<string>()
  onUserClicked(user: string): void {
    this.onClicked.emit(user)
  }
}
interface UserData {
  name?: string
  role?: string
  img?: string
}
