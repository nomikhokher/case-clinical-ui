import { Component } from '@angular/core'
import { DevFooterStore } from './dev-footer.store'

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
        <ui-footer
          [bgColor]="vm.config.items.bgColor"
          [textColor]="vm.config.items.textColor"
          [lists]="vm.config.items.lists"
          [rights]="vm.config.items.rights"
          [icons]="vm.config.items.icons"
        ></ui-footer>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFooterStore],
})
export class DevFooterComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFooterStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFooterModule } from '@schema-driven/web/ui/footer'
        \n\n
        <ui-footer
        [bgColor]="vm.config.items.bgColor"
        [textColor]="vm.config.items.textColor"
        [lists]="vm.config.items.lists"
        [rights]="vm.config.items.rights"
        [icons]="vm.config.items.icons"
      ></ui-footer>
     \n\n
        bgColor = ${JSON.stringify(result.config.items.bgColor, null, '\t')}\n
      textColor = ${JSON.stringify(result.config.items.textColor, null, '\t')}\n
      lists = ${JSON.stringify(result.config.items.lists, null, '\t')}\n
      rights = ${JSON.stringify(result.config.items.rights, null, '\t')}\n
      icons = ${JSON.stringify(result.config.items.icons, null, '\t')}\n
      `,
      ]
    })
  }
}
