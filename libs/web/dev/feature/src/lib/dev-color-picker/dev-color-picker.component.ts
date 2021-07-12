import { Component } from '@angular/core'
import { NumberValueAccessor } from '@angular/forms'
import { DevColorPickerStore } from './dev-color-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-color-picker/dev-color-picker.component.ts
      </code>
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-color-picker
          [position]="vm.config.items.position"
          [hideInput]="vm.config.items.hideInput"
          [userColors]="vm.config.items.userColors"
          [userVariants]="vm.config.items.userVariants"
        >
        </ui-color-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevColorPickerStore],
})
export class DevColorPickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevColorPickerStore) {}

  public codePreview = [
    `import { WebUiColorPickerModule } from '@schema-driven/web/ui/color-picker' \n\n 
    <ui-color-picker [userColors]="userColors" [userVariants]="userVariants" [hideInput]="true" ['position']="right"></ui-color-picker> \n\n
    
    userColors= ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'pink']\n\n
    
    userVariants=[50, 100, 200]
  `,
  ]
}
