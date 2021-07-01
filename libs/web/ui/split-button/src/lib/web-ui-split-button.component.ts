import { Component, Input } from '@angular/core'
import { Lists } from '../../../../dev/feature/src/lib/dev-split-button/dev-split-button.component'

@Component({
  selector: 'ui-split-button',
  styles: [
    `
      #sortbox:checked ~ #sortboxmenu {
        opacity: 1;
      }
    `,
  ],
  template: `
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div class="flex mb-2 items-center justify-between">
          <input type="checkbox" id="sortbox" class="hidden absolute" />
          <span
            class="text-xs font-semibold inline-block py-1 px-4 uppercase cursor-pointer bg-indigo-500 border-r-2 border-white rounded-l"
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
          </span>
          <label for="sortbox" class="flex cursor-pointer">
            <span class="text-xs font-semibold inline-block py-1 px-2 cursor-pointer bg-indigo-500 rounded-r">
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
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </span>
          </label>
          <div
            id="sortboxmenu"
            class="absolute mt-1 left-1 top-full min-w-max shadow rounded opacity-0 bg-gray-200 border border-gray-400 transition delay-75 ease-in-out z-10"
          >
            <ul class="block text-gray-900">
              <ng-container *ngFor="let list of lists">
                <li class="flex hover:bg-gray-100 py-2">
                  <ui-icon [icon]="list.icon" [class]="'h6 w-6'"></ui-icon>
                  <a href="#" class="block px-2">{{ list.text }}</a>
                </li>
              </ng-container>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSplitButtonComponent {
  @Input() lists: Lists[]
}
