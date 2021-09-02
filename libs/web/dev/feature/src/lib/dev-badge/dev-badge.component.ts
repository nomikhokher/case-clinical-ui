import { Component } from '@angular/core'
import { DevBadgeStore } from './dev-badge.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-badge
          [text]="vm.config.items.text"
          [color]="vm.config.items.color"
          [size]="vm.config.items.size"
          [rounded]="vm.config.items.rounded"
          [icon]="vm.config.items.icon"
          [position]="vm.config.items.position"
        ></ui-badge>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBadgeStore],
})
export class DevBadgeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBadgeStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiBadgeModule } from '@schema-driven/web/ui/badge' \n\n 
       <ui-badge
       [text]="vm.config.items.text"
       [color]="vm.config.items.color"
       [size]="vm.config.items.size"
       [rounded]="vm.config.items.rounded"
       [icon]="vm.config.items.icon"
       [position]="vm.config.items.position"
     ></ui-badge> \n\n
       
         text = ${JSON.stringify(result.config.items.text, null, '\t')}\n
         color = ${JSON.stringify(result.config.items.color, null, '\t')}\n
         rounded = ${JSON.stringify(result.config.items.rounded, null, '\t')}\n
         size = ${JSON.stringify(result.config.items.size, null, '\t')}\n
         position = ${JSON.stringify(result.config.items.position, null, '\t')}\n
         icon = ${JSON.stringify(result.config.items.icon, null, '\t')}\n`,
      ]
    })
  }
}
