import { Component } from '@angular/core'
import { DevTestimonialsStore } from './dev-testimonials.store'

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
        <ui-testimonials [data]="vm.config.items.data"></ui-testimonials>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTestimonialsStore],
})
export class DevTestimonialsComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTestimonialsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTestimonialsModule } from '@schema-driven/web/ui/testimonials' \n\n 
        <ui-testimonials [data]="vm.config.items.data"></ui-testimonials> \n\n 
        {
          data: ${JSON.stringify(result.config.items.data, null, '\t')}
        }`,
      ]
    })
  }
}
