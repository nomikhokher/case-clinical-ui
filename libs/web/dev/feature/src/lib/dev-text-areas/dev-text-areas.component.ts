import { Component } from '@angular/core'
import { DevTextAreasStore } from './dev-text-areas.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-text-areas
          [iconPosition]="vm.config.items.iconPosition"
          [icon]="vm.config.items.icon"
          [button]="vm.config.items.button"
        ></ui-text-areas>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTextAreasStore],
})
export class DevTextAreasComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTextAreasStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTextAreasModule } from '@schema-driven/web/ui/text-areas' \n\n 
        <ui-text-areas [iconPosition]="vm.config.items.iconPosition" [icon]="vm.config.items.icons" [button]="vm.config.items.button"></ui-text-areas>
        \n\n 
        
          iconPosition = ${JSON.stringify(result.config.items.iconPosition, null, '\t')}\n\n
          icon = ${JSON.stringify(result.config.items.icon, null, '\t')}\n\n
          button = ${JSON.stringify(result.config.items.button, null, '\t')}\n\n
        `,
      ]
    })
  }
}
