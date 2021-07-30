import { Component, Input } from '@angular/core'
@Component({
  selector: 'ui-card-heading',
  template: `
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 dark:bg-gray-700">
      <div
        class="-ml-4 -mt-4 flex justify-between  items-center flex-wrap sm:flex-nowrap"
        [ngClass]="sectionToggle == 'true' ? 'flex-row-reverse' : ''"
      >
        <div class="ml-4 mt-4">
          <div class="flex items-center" [ngClass]="sectionToggle == 'true' ? 'flex-row-reverse' : ''">
            <div class="flex-shrink-0" [ngClass]="sectionToggle == 'true' ? 'ml-2' : ''">
              <span *ngIf="profile.image">
                <img class="h-12 w-12 rounded-full" src="{{ profile.image }}" alt="" />
              </span>
            </div>
            <ng-conatiner *ngIf="!profile.image">
              <ui-icon size="lg" icon="{{ profile.icon }}" class="h-6 w-6 text-gray-500 dark:text-gray-200"></ui-icon>
            </ng-conatiner>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                {{ profile.title }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-200">
                <a href="#">
                  {{ profile.tagLine }}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="ml-4 mt-4 flex-shrink-0 flex" *ngIf="buttons">
          <span *ngFor="let button of buttons; index as i">
            <button
              type="button"
              class="relative ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-{{
                button.fontColor
              }}-500 bg-{{ button.color }}-700 dark:text-{{ button.fontColor }}-100 hover:bg-{{
                button.color
              }}-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{{ button.color }}-800"
            >
              <ui-icon icon="{{ button.icon }}" class="-ml-1 mr-1 text-gray-400" *ngIf="button.icon"></ui-icon>
              <span>
                {{ button.text }}
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class WebUiCardHeadingComponent {
  @Input() sectionToggle
  @Input() profile: ProfileLink
  @Input() buttons: Button
}
interface ProfileLink {
  title?: string
  image?: string
  tagLine?: string
  icon?: string
}

interface Button {
  text?: string
  color?: string
  fontColor?: string
  icon?: string
}
