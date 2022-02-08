import { Component } from '@angular/core'
import { DevFileInputStore } from './dev-file-input.store'

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
        <ui-file-input [icon]="vm.config.items.icon"></ui-file-input>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFileInputStore],
})
export class DevFileInputComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevFileInputStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFileInputModule } from '@schema-driven/web/ui/file-input'\n\n
        <ui-file-input
        >
        </ui-file-input>\n\n
       `,
      ]
    })
  }
}
