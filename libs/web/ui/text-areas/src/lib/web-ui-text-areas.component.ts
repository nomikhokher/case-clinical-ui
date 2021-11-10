import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-text-areas',
  template: `
    <form action="#">
      <div>
        <div class="flex items-center" aria-orientation="horizontal" role="tablist">
          <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
          <button
            (click)="isEditMode = true"
            id="tabs-1-tab-1"
            class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
            aria-controls="tabs-1-panel-1"
            role="tab"
            type="button"
          >
            Write
          </button>
          <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
          <button
            (click)="isEditMode = false"
            id="tabs-1-tab-2"
            class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
            aria-controls="tabs-1-panel-2"
            role="tab"
            type="button"
          >
            Preview
          </button>

          <!-- These buttons are here simply as examples and don't actually do anything. -->
          <div *ngIf="iconPosition === 'top'" class="ml-auto flex items-center space-x-5">
            <div class="flex items-center" *ngFor="let item of icon">
              <button
                type="button"
                class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Insert link</span>
                <ui-icon class="h-6 w-6" size="lg" [icon]="item.icon"></ui-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div
            *ngIf="isEditMode"
            id="tabs-1-panel-1"
            class="p-0.5 -m-0.5 rounded-lg"
            aria-labelledby="tabs-1-tab-1"
            role="tabpanel"
            tabindex="0"
          >
            <label for="comment" class="sr-only">Comment</label>
            <div>
              <textarea
                (change)="textUpdate($event)"
                [value]="showText"
                rows="5"
                name="comment"
                id="comment"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Add your comment..."
              ></textarea>
            </div>
          </div>
          <div
            *ngIf="!isEditMode"
            id="tabs-1-panel-2"
            class="p-0.5 -m-0.5 rounded-lg"
            aria-labelledby="tabs-1-tab-2"
            role="tabpanel"
            tabindex="0"
          >
            <div class="border-b">
              <div class="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                {{ showText }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 flex" [ngClass]="iconPosition == 'bottom' ? 'justify-between' : 'justify-end'">
        <div *ngIf="iconPosition === 'bottom'" class="flex items-center space-x-5">
          <div class="flex items-center" *ngFor="let item of icon">
            <button
              type="button"
              class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Insert link</span>
              <ui-icon class="h-6 w-6" size="lg" [icon]="item.icon"></ui-icon>
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-{{
            button.bg
          }}-600 hover:bg-{{ button.bg }}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{{
            button.bg
          }}-500"
        >
          {{ button.name }}
        </button>
      </div>
    </form>
  `,
})
export class WebUiTextAreasComponent {
  @Input() button
  @Input() icon
  @Input() iconPosition
  isEditMode = true
  showText?: string = ''
  textUpdate(e) {
    this.showText = e.target.value
  }
}
