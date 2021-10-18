import { Component } from '@angular/core'
import { DevSlideOverStore } from './dev-slide-over.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-button [label]="'Open Layout With Overlay'" (click)="openWithOverlay()"></ui-button>
        <ui-button [label]="'Open Layout With Out Overlay'" (click)="openWithOutOverlay()" class="mx-2"></ui-button>
        <ui-slide-over
          [width]="vm.config.items.width"
          [overlayOpacity]="vm.config.items.overlayOpacity"
          [overlayColor]="vm.config.items.overlayColor"
          [closeButtonOutSide]="vm.config.items.closeButtonOutSide"
          *ngIf="openLayoutWithOverlay"
          (hideCurrentLayout)="hideLayout()"
        >
          <section id="mainSlideOver" class="p-4">
            <div>
              <label for="project_name" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Project name
              </label>
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
              <label for="description" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Description
              </label>
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
        </ui-slide-over>
        <ui-slide-over-layout
          [width]="vm.config.items.width"
          [slideOverHeader]="vm.config.items.slideOverHeader"
          [slideOverFooter]="vm.config.items.slideOverFooter"
          *ngIf="openLayoutWithOutOverlay"
        >
          <section id="headerSlideOverLayout">
            <div class="py-6 px-4 bg-indigo-700 sm:px-6">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-medium text-white" id="slide-over-title">New Project</h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    (click)="hideLayout()"
                    type="button"
                    class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span class="sr-only">Close panel</span>
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
              <label for="project_name" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Project name
              </label>
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
              <label for="description" class="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Description
              </label>
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

          <section id="footerSlideOverLayout">
            <button
              (click)="hideLayout()"
              type="button"
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
        </ui-slide-over-layout>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSlideOverStore],
})
export class DevSlideOverComponent {
  readonly vm$ = this.store.vm$

  public codePreview

  public openLayoutWithOutOverlay = false
  public openLayoutWithOverlay = false

  openWithOutOverlay() {
    this.openLayoutWithOutOverlay = true
    this.openLayoutWithOverlay = false
  }

  openWithOverlay() {
    this.openLayoutWithOutOverlay = false
    this.openLayoutWithOverlay = true
  }

  hideLayout() {
    this.openLayoutWithOutOverlay = false
    this.openLayoutWithOverlay = false
  }

  constructor(private readonly store: DevSlideOverStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiSlideOverModule } from '@schema-driven/web/ui/slide-over'\n\n
        import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'\n\n
        <ui-button [label]="'Open Layout With Overlay'" (click)="openWithOverlay()"></ui-button>
        <ui-button [label]="'Open Layout With Out Overlay'" (click)="openWithOutOverlay()" class="mx-2"></ui-button>
        \n\n
        <ui-slide-over
          [width]="'max-w-2xl'"
          [overlay]="'bg-gray-500 bg-opacity-75 transition-opacity'"
          [closeButtonOutSide]="true"
          *ngIf="openLayoutWithOverlay"
          (hideCurrentLayout)="hideLayout()"
        >
          <section id="mainSlideOver" class="p-4">
            <div>
              <label for="project_name" class="block text-sm font-medium text-gray-900 dark:text-gray-100"> Project name </label>
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
              <label for="description" class="block text-sm font-medium text-gray-900 dark:text-gray-100"> Description </label>
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
        <ui-slide-over-layout
            [width]="'max-w-2xl'"
            [slideOverHeader]="true"
            [slideOverFooter]="true"
            *ngIf="openLayoutWithOutOverlay"
          >
            <section id="headerSlideOverLayout">
              <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-medium text-white" id="slide-over-title">New Project</h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button
                      (click)="hideLayout()"
                      type="button"
                      class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span class="sr-only">Close panel</span>
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
                <label for="project_name" class="block text-sm font-medium text-gray-900 dark:text-gray-100"> Project name </label>
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
                <label for="description" class="block text-sm font-medium text-gray-900 dark:text-gray-100"> Description </label>
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
  
            <section id="footerSlideOverLayout">
              <button
                (click)="hideLayout()"
                type="button"
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
          </ui-slide-over-layout>`,
      ]
    })
  }
}
