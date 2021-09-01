import { Component } from '@angular/core'
import { DevReviewsStore } from './dev-reviews.store'

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
        <ui-reviews [reviews]="vm.config.items.reviews" [customers]="vm.config.items.customers"></ui-reviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevReviewsStore],
})
export class DevReviewsComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevReviewsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiReviewsModule } from '@schema-driven/web/ui/reviews'\n\n
        <ui-reviews 
          [reviews]="vm.config.items.reviews" 
          [customers]="vm.config.items.customers"
        ></ui-reviews>\n
        {
          reviews: ${JSON.stringify(result.config.items.reviews, null, '\t')}
          customers: ${JSON.stringify(result.config.items.customers, null, '\t')}
        }`,
      ]
    })
  }
}
