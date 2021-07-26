import { Component } from '@angular/core'
import { DevMultiCheckboxStore } from './dev-multi-checkbox.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-6">
        <ui-preview
          [code]="codePreview[0]"
          [title]="vm.config.headerTitle"
          [githubURL]="vm.config.githubURL"
          [directory]="vm.config.directory"
          [breadcrumbs]="vm.config.breadcrumbs"
          [component_inputs]="vm.config.component_inputs"
        >
          <ng-container *ngFor="let demo of vm.demos">
            <div>
              <div class="shadow rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <h1 class="p-4 bg-indigo-700 text-white text-xl md:text-1xl font-bold leading-tight ">
                  {{ demo.name }}
                </h1>
                <div class="p-4">
                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div>
                      <ui-form [model]="demo.model" [fields]="demo.fields"></ui-form>
                    </div>
                    <div>
                      <pre class="dark:bg-gray-900 rounded-md p-2 text-xs">{{ demo.model | json }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </ui-preview>
      </div>
    </ng-container>
  `,
  providers: [DevMultiCheckboxStore],
})
export class DevMultiCheckboxComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMultiCheckboxStore) {}

  public codePreview = [
    `<ui-preview [code]="codePreview[0]" [title]="vm.config.headerTitle"
      [githubURL]="vm.config.githubURL"
      [directory]="vm.config.directory"
      [breadcrumbs]="vm.config.breadcrumbs"
      [component_inputs]="vm.config.component_inputs">
      <ng-container *ngFor="let demo of vm.demos">
        <ui-modal [closeButton]="vm.config.items.closeButton" [width]="vm.config.items.width" [display]="vm.config.items.display" [isActive]="vm.config.items.isActive">
        <ng-container *ngFor="let demo of vm.demos">
        <div>
          <div class="shadow rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <h1 class="p-4 bg-indigo-700 text-white text-xl md:text-1xl font-bold leading-tight ">
              {{ demo.name }}
            </h1>
            <div class="p-4">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div>
                  <ui-form [model]="demo.model" [fields]="demo.fields"></ui-form>
                </div>
                <div>
                  <pre class="dark:bg-gray-900 rounded-md p-2 text-xs">{{ demo.model | json }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
   </ui-preview>`,
  ]
}
