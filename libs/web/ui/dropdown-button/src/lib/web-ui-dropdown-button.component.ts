import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dropdown-button',
  template: `
    <span class="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Save changes
      </button>
      <span class="-ml-px relative block">
        <button
          type="button"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          id="option-menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          (click)="menuToggle()"
        >
          <span class="sr-only">Open options</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="option-menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none" *ngIf="dropDownToggle">
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="option-menu-item-0"
              *ngFor="let dropDown of dropDownMenus"
            >
              {{ dropDown.name }}
            </a>
          </div>
        </div>
      </span>
    </span>
  `,
})
export class WebUiDropdownButtonComponent {
  @Input() dropDownMenus: [{ id?: string; name: string }]
  public dropDownToggle: boolean = false

  menuToggle() {
    this.dropDownToggle = !this.dropDownToggle
  }
}
