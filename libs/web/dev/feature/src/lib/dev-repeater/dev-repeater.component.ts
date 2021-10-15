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
        [codeObj]="vm.demo"
        [component_inputs]="vm.component_inputs"
      >
        <ui-form [fields]="vm.demo.fields" [model]="vm.demo.model"></ui-form>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRepeaterStore],
})
export class DevRepeaterComponent {
  readonly vm$ = this.store.state$
  public codePreview

  constructor(private readonly store: DevRepeaterStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFormModule } from '@schema-driven/web/ui/form'\n\n 
        <ui-form 
          [model]="demo.model" 
          [fields]="demo.fields"
        ></ui-form>\n\n
        {
          model: ${JSON.stringify(result.demo.model, null, '\t')}
          fields: ${JSON.stringify(result.demo.fields, null, '\t')}
        }`,
      ]
    })
  }
}
