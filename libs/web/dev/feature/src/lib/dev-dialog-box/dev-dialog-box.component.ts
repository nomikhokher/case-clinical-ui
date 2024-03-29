import { Component } from '@angular/core'
import { DevDialogBoxStore } from './dev-dialog-box.store'

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
        <ui-dialog-box
          [desc]="vm.config.items.desc"
          [width]="vm.config.items.width"
          [display]="vm.config.items.display"
          [isActive]="vm.config.items.isActive"
          [buttons]="vm.config.items.buttons"
        >
          <div>
            <!-- <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
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
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Enter Name</h3>
              <input
                type="text"
                [(ngModel)]="name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md my-2"
                placeholder="Add some note"
              />
            </div>-->
            {{ vm.config.items.desc }}
          </div>
          <!-- <div class="mt-5 sm:mt-6">
            <button
              type="button"
              (click)="myFun()"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Back to Dashboard
            </button>
          </div> -->
        </ui-dialog-box>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDialogBoxStore],
})
export class DevDialogBoxComponent {
  readonly vm$ = this.store.vm$
  name: string
  constructor(private readonly store: DevDialogBoxStore) {}
  myFun() {}

  public codePreview: Array<any>

  ngOnInit(): void {
    // console.log(this.name);

    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiDialogBoxModule } from '@schema-driven/web/ui/dialog-box' \n\n
        <ui-dialog-box
        [closeButton]="vm.config.items.closeButton"
          [width]="vm.config.items.width"
          [display]="vm.config.items.display"
          [isActive]="vm.config.items.isActive"
          [name]= name
          [buttons]="vm.config.items.buttons"
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
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                Enter Name
              </h3>
              <input
                type="text" [(ngModel)]="name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md my-2"
                placeholder="Add some note"
              />
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              (click)="myFun()"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Back to Dashboard
            </button>
          </div>
        </ui-dialog-box>\n\n

        isActive = ${JSON.stringify(result.config.items.isActive, null, '\t')}\n
        width = ${JSON.stringify(result.config.items.width, null, '\t')}\n
        description = ${JSON.stringify(result.config.items.desc, null, '\t')}\n
        `,
      ]
    })
  }
}
