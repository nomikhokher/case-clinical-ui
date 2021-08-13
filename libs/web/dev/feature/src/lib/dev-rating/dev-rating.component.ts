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
  constructor(private readonly store: DevRatingStore) {}
  public codePreview = [
    `import { WebUiRatingModule } from '@schema-driven/web/ui/rating'n\n
    <ui-rating [ratingColor]="ratingColor" [icon]="icon"  [iconSize]="iconSize" [ratings]="ratings"></ui-rating>\n
        ratingColor= 'yellow'\n
        icon= 'ratingStar'\n
        iconSize= 12\n
        ratings=[
          { amount: 1, label: 'Terrible' },
          { amount: 2, label: 'Bad' },
          { amount: 3, label: 'Okay' },
          { amount: 4, label: 'Good' },
          { amount: 5, label: 'Great' },
        ],
    `,
  ]
}
