import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-headings',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div>
      <div>
        <nav class="sm:hidden" aria-label="Back">
          <a href="javascript:void(0)" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
            <ui-icon size="lg" icon="arrow-left" class="text-gray-400 flex-shrink-0 -ml-1 mr-1"></ui-icon>
            Back
          </a>
        </nav>
        <nav class="hidden sm:flex" aria-label="Breadcrumb" *ngIf="upperSubHeadings">
          <ol class="flex items-center space-x-4">
            <li *ngFor="let subHeading of upperSubHeadings; let i = index">
              <div class="flex items-center">
                <ui-icon size="lg" icon="arrowRight" class="text-gray-400 flex-shrink-0" *ngIf="i > 0"></ui-icon>
                <a
                  href="javascript:void(0)"
                  [ngClass]="{ 'ml-4': i > 0 }"
                  class=" text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-700"
                  >{{ subHeading.text }}</a
                >
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
            {{ headingTitle }}
          </h2>
          <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6" *ngIf="lowerSubHeadings">
            <div
              class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300"
              *ngFor="let lowerSubHeading of lowerSubHeadings; let i = index"
            >
              <ui-icon
                size="lg"
                icon="{{ lowerSubHeading.icon }}"
                class="text-gray-400 dark:text-gray-500 flex-shrink-0"
              ></ui-icon>
              {{ lowerSubHeading.text }}
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <p *ngFor="let button of buttons; let i = index">
            <span class="sm:ml-3" [ngClass]="classes(button.icon, i, buttons.length - 1)">
              <button
                type="button"
                class=" ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="mobile-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                [ngClass]="[
                  button.color === 'gray'
                    ? 'text-gray-500 dark:text-white bg-white hover:bg-gray-50 dark:bg-' +
                      button.color +
                      '-600 dark:hover:bg-' +
                      button.color +
                      '-700'
                    : 'hover:bg-' +
                      button.color +
                      '-700 text-white bg-' +
                      button.color +
                      '-600 dark:bg-' +
                      button.color +
                      '-500 dark:hover:bg-' +
                      button.color +
                      '-600'
                ]"
              >
                <ui-icon
                  size="lg"
                  icon="{{ button.icon }}"
                  class="flex-shrink-0 mr-1 text-sm"
                  *ngIf="button.icon"
                ></ui-icon>
                {{ button.text }}
              </button>
              <div
                *ngIf="button.icon == 'chevronDown'"
                class="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="mobile-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="javascript:void(0)"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="mobile-menu-item-0"
                  >Edit</a
                >
                <a
                  href="javascript:void(0)"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="mobile-menu-item-1"
                  >View</a
                >
              </div>
            </span>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPageHeadingsComponent {
  @Input() headingTitle: any
  @Input() upperSubHeadings: any
  @Input() lowerSubHeadings: any
  @Input() buttons: any

  classes(icon: any, index: any, btnLen: any) {
    if (icon == 'chevronDown') {
      return 'ml-3 relative sm:hidden'
    } else if (btnLen == index) {
      return 'sm:ml-3'
    } else if (icon != 'chevronDown') {
      return 'hidden sm:block ml-3'
    }
  }
}
