import { Component } from '@angular/core'
import { DevRepeatStore } from './dev-repeat.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-6">
        <ui-preview
          [code]="codePreview[0]"
          [codeObj]="vm.demos[0]"
          [title]="vm.config.headerTitle"
          [githubURL]="vm.config.githubURL"
          [directory]="vm.config.directory"
          [breadcrumbs]="vm.config.breadcrumbs"
          [component_outputs]="vm.config.component_outputs"
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
                      <pre class="dark:bg-gray-900 dark:text-gray-100 rounded-md p-2 text-xs">{{
                        demo.model | json
                      }}</pre>
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
  providers: [DevRepeatStore],
})
export class DevRepeatComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevRepeatStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiRepeatModule } from '@schema-driven/web/ui/form/src/lib/types/repeat'\n\n
        <ui-preview 
          [title]="vm.config.headerTitle"
          [githubURL]="vm.config.githubURL"
          [directory]="vm.config.directory"
          [breadcrumbs]="vm.config.breadcrumbs"
          [component_outputs]="vm.config.component_outputs"
          [component_inputs]="vm.config.component_inputs">
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
    })
  }
}
