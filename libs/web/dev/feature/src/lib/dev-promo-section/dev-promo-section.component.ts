import { Component } from '@angular/core'
import { DevPromoSectionStore } from './dev-promo-section.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-promo-section [data]="data"></ui-promo-section>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPromoSectionStore],
})
export class DevPromoSectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPromoSectionStore) {}
  data = {
    heading: 'Get 25% off during our one-time sale',
    descriotion: `Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.`,
    btnText: 'Get access to our one-time sale',
    backgroundImg: 'https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg',
    commentHeading: 'What are people saying?',
    comments: [
      {
        userId: 1,
        text:
          'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        name: 'Sarah',
        location: 'New Orleans',
      },
      {
        userId: 2,
        text:
          'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items',
        name: 'Kelly ',
        location: 'Chicago',
      },
      {
        userId: 3,
        text:
          'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there',
        name: 'Chris Paul',
        location: 'Phoenix',
      },
    ],
  }
}
