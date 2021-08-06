import { Component } from '@angular/core'
import { DevModalStore } from './dev-modal.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-modal
          [closeButton]="vm.config.items.closeButton"
          [width]="vm.config.items.width"
          [display]="vm.config.items.display"
          [isActive]="vm.config.items.isActive"
        >
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                Payment successful
              </h3>
              <input
                type="text"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md my-2"
                placeholder="Add some note"
              />
              <div class="mt-2">
                <p class="text-sm h-14 overflow-auto dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              (click)="myFun()"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Go back to dashboard
            </button>
          </div>
        </ui-modal>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevModalStore],
})
export class DevModalComponent {
  readonly vm$ = this.store.vm$

  constructor(private store: DevModalStore) {}
  myFun() {
    this
    let myVal
    this.store.config$.subscribe((x) => {
      myVal = x
    })

    myVal.items.isActive = !myVal.items.isActive
  }
  public codePreview = [
    `import { WebUiModalModule } from '@schema-driven/web/ui/modal' \n\n
     <ui-modal [closeButton]="vm.config.items.closeButton" [width]="vm.config.items.width" [display]="vm.config.items.display" [isActive]="vm.config.items.isActive">
    <div>
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <svg
          class="h-6 w-6 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Payment successful</h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-6">
      <button
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
      >
        Go back to dashboard
      </button>
    </div>
  </ui-modal>`,
  ]
}
