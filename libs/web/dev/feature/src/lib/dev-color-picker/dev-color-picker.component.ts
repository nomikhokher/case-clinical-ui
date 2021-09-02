import { Component } from '@angular/core'
import { NumberValueAccessor } from '@angular/forms'
import { DevColorPickerStore } from './dev-color-picker.store'

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

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiColorPickerModule } from '@schema-driven/web/ui/color-picker'
        \n\n
        <ui-color-picker
          [position]="vm.config.items.position"
          [hideInput]="vm.config.items.hideInput"
          [userColors]="vm.config.items.userColors"
          [userVariants]="vm.config.items.userVariants"
        >
        </ui-color-picker>
   \n\n
        position = ${JSON.stringify(result.config.items.position, null, '\t')}\n
      hideInput = ${JSON.stringify(result.config.items.hideInput, null, '\t')}\n
      userColors = ${JSON.stringify(result.config.items.userColors, null, '\t')}\n
      userVariants = ${JSON.stringify(result.config.items.userVariants, null, '\t')}\n
      `,
      ]
    })
  }
}
