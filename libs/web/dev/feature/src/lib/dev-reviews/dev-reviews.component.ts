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
  constructor(private readonly store: DevReviewsStore) {}
  public codePreview = [
    `import { WebUiReviewsModule } from '@schema-driven/web/ui/reviews'\n\n
    <ui-reviews [reviews]="vm.config.items.reviews" [customers]="vm.config.items.customers"></ui-reviews>\n
    reviews = {
      fiveStar : 1023,
      fourStar : 123,
      threeStar: 43,
      twoStar: 12,
      oneStar : 190,
    }\n
    customers = [
      {
        id: 1,
        name: 'Emily John',
        img:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        review: 4,
        comment:
          'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.',
      },
      {
        id: 2,
        name: 'Hector Gibbons',
        img:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        review: 5,
        comment:  'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!',
      },
    ],
    `,
  ]
}
