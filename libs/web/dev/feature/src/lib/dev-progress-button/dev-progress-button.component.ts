import { Component } from '@angular/core'
import { DevProgressButtonStore } from './dev-progress-button.store'

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
        <div class="inline-block mx-3" *ngFor="let item of vm.config.items.buttons; let i = index">
          <ui-progress-button
            [id]="i"
            [text]="item.text"
            [color]="item.color"
            [position]="item.position"
            [icon]="item.icon"
            [showHide]="item.showHide"
          >
          </ui-progress-button>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressButtonStore],
})
export class DevProgressButtonComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProgressButtonStore) {}

  public codePreview = [
    `import { WebUiProgressButtonModule } from '@schema-driven/web/ui/progress-button' \n\n 
    <ui-progress-button 
    [text]="Spin Right"
    [color]="green"
    [position]="right"
    [icon]="spinners"></ui-progress-button>
  `,
  ]
}
