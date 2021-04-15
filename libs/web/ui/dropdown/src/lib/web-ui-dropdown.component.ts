import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dropdown',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <h1 class="py-2" *ngIf="!icon && !heading">Simple Dropdowns</h1>
        <h1 class="py-2" *ngIf="icon">Icon Dropdowns</h1>
        <h1 class="py-2" *ngIf="heading">Header Dropdowns</h1>
        <div class="relative inline-block text-left">
          <div>
            <button
              *ngIf="!icon"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              (click)="closeMenu()"
            >
              Options
              <!-- Heroicon name: solid/chevron-down -->
              <svg
                class="-mr-1 ml-2 h-5 w-5"
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
            <button
              type="button"
              *ngIf="icon"
              class="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              (click)="closeMenu()"
            >
              <span class="sr-only">Open options</span>
              <ui-icon [icon]="icon"></ui-icon>
            </button>
          </div>

          <div
            class="origin-top-{{ direction }} absolute {{
              direction
            }}-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            *ngIf="show"
          >
            <div class="py-1" role="none">
              <div class="px-4 py-3" role="none" *ngIf="heading">
                <p class="text-sm" role="none">Signed in as</p>
                <p class="text-sm font-medium text-gray-900 truncate" role="none">tom@example.com</p>
              </div>
              <a
                *ngFor="let item of items"
                href="#"
                [ngClass]="item.icons ? 'group flex' : 'block'"
                class="items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/pencil-alt -->
                <ui-icon
                  *ngIf="item.icons"
                  [icon]="item.icons"
                  size="lg"
                  class="mr-3 h-7 w-7 text-gray-400 group-hover:text-gray-500"
                ></ui-icon>
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiDropdownComponent {
  @Input() direction?: string
  @Input() icon?: string
  @Input() heading?: string
  @Input() items: { id: string; name: string; icons: string }[]

  public show: boolean = false

  ngOnInit() {
    if (!this.direction) {
      this.direction = 'left'
    }
  }
  closeMenu() {
    this.show = !this.show
  }
}
