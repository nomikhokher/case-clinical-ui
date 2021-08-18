import { Component } from '@angular/core'
import { DevReviewsStore } from './dev-reviews.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-reviews [data]="data"></ui-reviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevReviewsStore],
})
export class DevReviewsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevReviewsStore) {}
  data = {
    totalReviews: 5341,
    customers: [
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
        comment: `Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!`,
      },
    ],
  }
}
