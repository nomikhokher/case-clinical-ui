import { Component } from '@angular/core'
import { DevToolbarStore } from './dev-toolbar.store'

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
        <ui-toolbar [buttons]="vm.config.items.buttons" [background]="vm.config.items.background"></ui-toolbar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevToolbarStore],
})
export class DevToolbarComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevToolbarStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiToolbarModule } from '@schema-driven/web/ui/toolbar' \n\n 
        <ui-toolbar 
          [buttons]="buttons"
        ></ui-toolbar> \n\n
        {
          buttons: ${JSON.stringify(result.config.items.buttons, null, '\t')}
        }`,
      ]
    })
  }
}
