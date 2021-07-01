import { Component } from '@angular/core'
import { tap } from 'rxjs/operators'
import { DevRepeaterStore } from './dev-repeater.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [code]="codePreview[0]"
      >
        <ui-form [fields]="vm.demo.fields" [model]="vm.demo.model"></ui-form>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRepeaterStore],
})
export class DevRepeaterComponent {
  readonly vm$ = this.store.state$

  constructor(private readonly store: DevRepeaterStore) {}

  public codePreview = [
    `import { WebUiFormModule } from '@schema-driven/web/ui/form'\n\n <ui-form [model]="demo.model" [fields]="demo.fields"></ui-form>`,
  ]
}
