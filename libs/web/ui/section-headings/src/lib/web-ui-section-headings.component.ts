import { Component, Input } from '@angular/core'
import { Buttons, Heading, TabLinks } from '../../../../dev/feature/src/lib/dev-section-headings/model'

@Component({
  selector: 'ui-section-headings',
  template: `
    <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
      <div class="md:flex md:items-center md:justify-right space-x-3">
        <div *ngIf="image">
          <img class="h-16 w-16 rounded-full" src="{{ image }}" alt="Invalid URL" />
        </div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ title }}
          </h3>
          <p class="mt-2 max-w-4xl text-sm text-gray-500" *ngIf="description">{{ description }}</p>
        </div>
        <div class="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0" *ngIf="buttons">
          <button
            *ngFor="let button of buttons; i as index"
            type="button"
            [ngClass]="i == 0 ? '' : 'ml-2'"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-{{
              button.fontColor
            }} bg-{{ button.color }} hover:bg-{{
              button.hoverColor
            }} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ button.text }}
          </button>
        </div>
      </div>
      <div class="mt-4">
        <!-- Dropdown menu on small screens -->
        <div class="sm:hidden" *ngIf="tabs">
          <label for="current-tab" class="sr-only">Select a tab</label>
          <select
            *ngFor="let tab of tabs; i as index"
            id="current-tab"
            name="current-tab"
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>{{ tab.title }}</option>
          </select>
        </div>
        <!-- Tabs at small breakpoint and up -->
        <div class="hidden sm:block">
          <nav class="-mb-px flex space-x-8">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <a
              *ngFor="let tab of tabs; i as index"
              (click)="activateClass(tab)"
              href="javascript:void(0)"
              [ngClass]="
                tab.active == true
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              "
              class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            >
              {{ tab.title }}
              <span
                *ngIf="tab.badge && badge == true"
                class="inline-flex items-center px-2 py-1 ml-1.5 rounded-full text-xs font-medium bg-red-200 text-indigo-800"
                [ngClass]="{ 'bg-indigo-200': tab.active == true }"
              >
                {{ tab.badge }}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSectionHeadingsComponent {
  @Input() description?: string
  @Input() title?: string
  @Input() tabs: TabLinks[]
  @Input() buttons: Buttons
  @Input() badge?: boolean
  @Input() image?: string

  activateClass(tab: TabLinks) {
    console.log(true)
    return this.tabs.map((x) => {
      if (x.id === tab.id) {
        console.log(true)
        return (x.active = true)
      }
      return (x.active = false)
    })
  }
}
