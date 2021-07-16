import { Component } from '@angular/core'
import { DevSlideOverStore } from './dev-slide-over.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-slide-over/dev-slide-over.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-button [label]="'Open Layout With Overlay'" (click)="openLayoutWithOverlay()" class="mx-5"></ui-button>
        <ui-slide-over
          [width]="'max-w-2xl'"
          [overlay]="overlay"
          [closeButtonOutSide]="closeButtonOutSide"
          [closeLayoutWithOverlay]="closeLayoutWithOverlay"
          *ngIf="!closeLayoutWithOverlay"
        >
          <section id="mainSlideOver" class="p-4">
            <div>
              <label for="project_name" class="block text-sm font-medium text-gray-900"> Project name </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="project_name"
                  id="project_name"
                  class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-900"> Description </label>
              <div class="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
          </section>
          <section id="headerSlideOverLayout" *ngIf="slideOverHeader">
            <div class="py-6 px-4 bg-indigo-700 sm:px-6">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-medium text-white" id="slide-over-title">New Project</h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    type="button"
                    (click)="hideSlide()"
                    class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span class="sr-only">Close panel</span>
                    <!--
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      -->
                  </button>
                </div>
              </div>
              <div class="mt-1">
                <p class="text-sm text-indigo-300">
                  Get started by filling in the information below to create your new project.
                </p>
              </div>
            </div>
          </section>

          <section id="mainSlideOverLayout">
            <div>
              <label for="project_name" class="block text-sm font-medium text-gray-900"> Project name </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="project_name"
                  id="project_name"
                  class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-900"> Description </label>
              <div class="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
          </section>

          <section id="footerSlideOverLayout" *ngIf="slideOverFooter">
            <button
              type="button"
              (click)="hideSlide()"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </section>
        </ui-slide-over>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSlideOverStore],
})
export class DevSlideOverComponent {
  readonly vm$ = this.store.vm$

  public closeButtonOutSide: boolean = true
  public closeLayoutWithOverlay: boolean = false
  public slideOverFooter: boolean = true
  public slideOverHeader: boolean = true
  public overlay: string = 'bg-gray-500 bg-opacity-75 transition-opacity'

  openLayoutWithOverlay() {
    this.closeButtonOutSide = true
    this.closeLayoutWithOverlay = false
    this.overlay = 'bg-gray-500 bg-opacity-75 transition-opacity'
  }

  hideSlide() {
    this.overlay = ''
    this.closeLayoutWithOverlay = true
  }

  constructor(private readonly store: DevSlideOverStore) {}
  public codePreview = [
    `import { WebUiSlideOverModule } from '@schema-driven/web/ui/slide-over'\n\n
    import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'\n\n
    <ui-slide-over
    [width]="'max-w-2xl'"
    [overlay]="'bg-gray-500 bg-opacity-75 transition-opacity'"
    [closeButtonOutSide]="closeButtonOutSide"
    [headerObj]="headerObj"
  >
    <section id="mainSlideOver" class="p-4">
      <div>
        <label for="project_name" class="block text-sm font-medium text-gray-900"> Project name </label>
        <div class="mt-1">
          <input
            type="text"
            name="project_name"
            id="project_name"
            class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-900"> Description </label>
        <div class="mt-1">
          <textarea
            id="description"
            name="description"
            rows="4"
            class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>
    </section>
  </ui-slide-over> \n\n
  
   closeButtonOutSide = true`,
  ]
}
