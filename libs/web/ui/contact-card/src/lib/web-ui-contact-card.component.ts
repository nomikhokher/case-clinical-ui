import { Component, Input } from '@angular/core'
import { Buttons, Contact } from '../../../../dev/feature/src/lib/dev-contact-card/model'

@Component({
  selector: 'ui-contact-card',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul
      class="grid grid-cols-1 gap-6"
      [ngClass]="[
        toggleCard == true ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      ]"
    >
      <li
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        [ngClass]="[toggleCard == true ? '' : 'text-center']"
      >
        <ng-container *ngIf="toggleCard == true">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">{{ contactCard.title }}</h3>
                <span
                  class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                  *ngIf="contactCard.role"
                  >{{ contactCard.role }}</span
                >
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">{{ contactCard.tagLine }}</p>
            </div>

            <span *ngIf="contactCard.image">
              <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="{{ contactCard.image }}" alt="" />
            </span>
            <span *ngIf="contactCard.icon && !contactCard.image">
              <ui-icon icon="{{ contactCard.icon }}" class="-ml-1 mr-1 text-gray-400"></ui-icon>
            </span>
          </div>
        </ng-container>
        <ng-container *ngIf="toggleCard == false">
          <div class="flex-1 flex flex-col p-8">
            <span *ngIf="contactCard.image">
              <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src="{{ contactCard.image }}" alt="" />
            </span>
            <span *ngIf="contactCard.icon && !contactCard.image">
              <ui-icon
                icon="{{ contactCard.icon }}"
                class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              ></ui-icon>
            </span>
            <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ contactCard.title }}</h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Title</dt>
              <dd class="text-gray-500 text-sm">{{ contactCard.tagLine }}</dd>
              <dt class="sr-only">Role</dt>
              <dd class="mt-3">
                <span
                  class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                  *ngIf="contactCard.role"
                  >{{ contactCard.role }}</span
                >
              </dd>
            </dl>
          </div>
        </ng-container>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200" *ngIf="buttons">
            <div class="w-0 flex-1 flex" *ngFor="let button of buttons">
              <a
                href="javascript:void(0)"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <ui-icon class="-ml-1 mr-1 text-gray-400" icon="{{ button.icon }}"></ui-icon>
                <span class="ml-3">{{ button.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </li>

      <!-- More people... -->
    </ul>
  `,
})
export class WebUiContactCardComponent {
  @Input() contactCard: Contact
  @Input() buttons: Buttons
  @Input() toggleCard: boolean
}
