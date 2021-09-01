import { Component } from '@angular/core'
import { DevTooltipStore } from './dev-tooltip.store'

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
        <ui-tooltip
          [text]="vm.config.items.text"
          [color]="vm.config.items.color"
          [position]="vm.config.items.position"
        ></ui-tooltip>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTooltipStore],
})
export class DevTooltipComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTooltipStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTooltipModule } from '@schema-driven/web/ui/tooltip'\n\n
        <ui-tooltip 
          [color]="vm.config.items.color" 
          [text]="vm.config.items.text" 
          [position]="vm.config.items.position"
        ></ui-tooltip> \n\n
        {
          text: ${JSON.stringify(result.config.items.text, null, '\t')}
          color: ${JSON.stringify(result.config.items.color, null, '\t')}
          position:${JSON.stringify(result.config.items.position, null, '\t')}
        }`,
      ]
    })
  }
}
