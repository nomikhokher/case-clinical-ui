import { Component } from '@angular/core'
import { DevMaskStore } from './dev-mask.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-mask [items]="vm.config.items.images"></ui-mask>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMaskStore],
})
export class DevMaskComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMaskStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiMaskModule } from '@schema-driven/web/ui/mask'
        \n\n
        <ui-mask
        [items]="vm.config.items.images"
      >
      </ui-mask> \n\n
      items = ${JSON.stringify(result.config.items.images, null, '\t')}\n
      `,
      ]
    })
  }
}
