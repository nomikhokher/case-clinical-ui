import { Component } from '@angular/core'
import { DevCollapseStore } from './dev-collapse.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-collapse [collapse]="vm.config.items.collapse"></ui-collapse>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCollapseStore],
})
export class DevCollapseComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevCollapseStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiCollapseModule } from '@schema-driven/web/ui/collapse' \n\n 
        <ui-preview
        [githubURL]="vm.config.githubURL"
          [title]="vm.config.headerTitle"
          [directory]="vm.config.directory"
          [component_inputs]="vm.config.component_inputs"
          [codeObj]="vm.config.items"
          [code]="codePreview[1]">
          <ui-collapse [collapse]="vm.config.items.collapse"></ui-collapse>
        </ui-preview> \n\n
      
      `,
      ]
    })
  }
}
