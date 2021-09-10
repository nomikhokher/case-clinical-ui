import { Component } from '@angular/core'
import { DevPopConfirmStore } from './dev-pop-confirm.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-pop-confirm
          [title]="vm.config.items.title"
          [buttons]="vm.config.items.buttons"
          [position]="vm.config.items.position"
        ></ui-pop-confirm>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPopConfirmStore],
})
export class DevPopConfirmComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPopConfirmStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPopConfirmModule } from '@schema-driven/web/ui/pop-confirm'\n\n 
        <ui-pop-confirm
        [title]="vm.config.items.title"
        [buttons]="vm.config.items.buttons"
        [position]="vm.config.items.position"
      ></ui-pop-confirm> \n\n
      
        title = ${JSON.stringify(result.config.items.title, null, '\t')}\n
        position = ${JSON.stringify(result.config.items.position, null, '\t')}\n
        buttons = ${JSON.stringify(result.config.items.buttons, null, '\t')}\n
        `,
      ]
    })
  }
}
