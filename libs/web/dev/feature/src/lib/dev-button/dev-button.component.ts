import { Component } from '@angular/core'
import { Variant } from '@schema-driven/web/ui/button'
import { DevButtonStore } from './dev-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.header"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
        [component_outputs]="vm.config.component_outputs"
        [codeObj]="vm.config.buttons[4]"
        [code]="codePreview[0]"
      >
        <div class="flex flex-wrap space-x-3">
          <ng-container *ngFor="let button of vm.config.buttons">
            <ui-button [label]="button.label" [variant]="button.variant"></ui-button>
          </ng-container>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevButtonStore],
})
export class DevButtonComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevButtonStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiButtonModule } from '@schema-driven/web/ui/button'
        \n\n
        <ui-button [label]="button.label" [variant]="button.variant"></ui-button> \n\n
      label = ${JSON.stringify(result.config.buttons[4].label, null, '\t')}\n
      variant = ${JSON.stringify(result.config.buttons[4].variant, null, '\t')}\n
      `,
      ]
    })
  }
}
