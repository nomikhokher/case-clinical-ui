import { Component } from '@angular/core'
import { DevRatingStore } from './dev-rating.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-rating
          [ratingColor]="vm.config.items.ratingColor"
          [icon]="vm.config.items.icon"
          [iconSize]="vm.config.items.iconSize"
          [ratings]="vm.config.items.ratings"
        ></ui-rating>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRatingStore],
})
export class DevRatingComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevRatingStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiRatingModule } from '@schema-driven/web/ui/rating'n\n
        <ui-rating 
          [ratingColor]="vm.config.items.ratingColor"
          [icon]="vm.config.items.icon"
          [iconSize]="vm.config.items.iconSize"
          [ratings]="vm.config.items.ratings"
        ></ui-rating>\n\n
        {
          ratingColor: ${JSON.stringify(result.config.items.ratingColor, null, '\t')}
          icon: ${JSON.stringify(result.config.items.icon, null, '\t')}
          iconSize:${JSON.stringify(result.config.items.iconSize, null, '\t')}
          ratings:${JSON.stringify(result.config.items.ratings, null, '\t')}
        }`,
      ]
    })
  }
}
