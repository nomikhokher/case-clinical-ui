import { Component } from '@angular/core'
import { DevPromoSectionStore } from './dev-promo-section.store'

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
        <ui-promo-section
          [heading]="vm.config.items.heading"
          [description]="vm.config.items.description"
          [btnText]="vm.config.items.btnText"
          [backgroundImg]="vm.config.items.backgroundImg"
          [commentHeading]="vm.config.items.commentHeading"
          [comments]="vm.config.items.comments"
        ></ui-promo-section>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPromoSectionStore],
})
export class DevPromoSectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPromoSectionStore) {}

  public codePreview = [
    `import { WebUiPromoSectionModule } from '@schema-driven/web/ui/promo-section' \n\n 
    <ui-promo-section 
      [heading]="vm.config.items.heading"
      [description]="vm.config.items.description"
      [btnText]="vm.config.items.btnText"
      [backgroundImg]="vm.config.items.backgroundImg"
      [commentHeading]="vm.config.items.commentHeading"
      [comments]="vm.config.items.comments"
    ></ui-promo-section> \n\n
    {
      heading: 'Get 25% off during our one-time sale',
      description: Most of our products are limited releases that won't come back. Get your favorite items while theyre in stock.',
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
  `,
  ]
}
