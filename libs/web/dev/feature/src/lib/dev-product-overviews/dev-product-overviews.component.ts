import { Component } from '@angular/core'
import { DevProductOverviewsStore } from './dev-product-overviews.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-product-overviews [product]="vm.config.items.product"></ui-product-overviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductOverviewsStore],
})
export class DevProductOverviewsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductOverviewsStore) {}

  public codePreview = [
    `import { WebUiProductOverviewsModule } from '@schema-driven/web/ui/product-overviews' \n\n 
    <ui-product-overviews 
      [product]="vm.config.items.product"
    ></ui-product-overviews> \n\n
    {
      product: {
        title: 'Basic Tee',
        description: 'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-			shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn 			locally, with a special dye technique that gives each tee it's own look.',
        category: {
          title: 'Shirt',
        },
        price: 35,
        is_active: true,
        review: {
          total_rating: 3.5,
          reviews: 515,
        },
        variants: [
          {
            color: [
              {
                values: 'gray',
                images: [
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505001381alt1_3.jpg',
                    is_active: true,
                  },
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505001382alt2_3.jpg',
                    is_active: false,
                  },
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505001383alt3_4.jpg',
                    is_active: false,
                  },
                ],
              },
              {
                values: 'yellow',
                images: [
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505003311alt1_3.jpg',
                    is_active: true,
                  },
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505003312alt2_3.jpg',
                    is_active: false,
                  },
                  {
                    name: '',
                    image: 'https://www.bellacanvas.com/bella/product/hires/7505003313alt3_4.jpg',
                    is_active: false,
                  },
                ],
              },
            ],

            size: [{ values: 'xxs' }, { values: 'xs' }, { values: 'm' }],
          },
        ],
        specification: [
          {
            title: 'Care',
            show: false,
            specification_description: [
              { description: 'Spot clean as needed' },
              { description: 'Hand wash with mild soap' },
            ],
          },
          {
            title: 'Shipping',
            show: false,
            specification_description: [
              { description: 'Free shipping on orders over $300' },
              { description: 'nternational shipping available' },
            ],
          },
        ],
        images: [
          {
            name: '',
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
            is_active: true,
          },
          {
            name: '',
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg',
            is_active: false,
          },
          {
            name: '',
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
            is_active: false,
          },
        ],
        reviews_customer: [
          {
            id: 1,
            name: 'Hammad Hassan',
            url: 'https://www.pngarts.com/files/11/Avatar-Transparent-Background-PNG.png',
            rating: 5,
            comment: 'nice product in my life',
            created_at: 'July 12, 2021',
          },
          {
            id: 2,
            name: 'Maria Afzal',
            url: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
            rating: 3,
            comment: 'nice product in my life',
            created_at: 'July 27, 2021',
          },
        ],
        faqs: [
          {
            id: 1,
            question: 'What format are these icons?',
            answer:
              'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
          },
          {
            id: 2,
            question: 'What format are these icons?',
            answer:
              'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in	code.',
          },
        ],
        license: [
          {
            id: 1,
            heading: 'Overview',
            description: 'What format are these icons',
            license_detail: [
              { detail: 'You're allowed to use the icons in unlimited projects.' },
              { detail: 'You're allowed to use the icons in unlimited projects.' },
            ],
          },

          {
            id: 2,
            heading: 'Overview all products',
            license_detail: [
              { detail: 'You're allowed to use the icons in unlimited projects.' },
              { detail: 'You're allowed to use the icons in unlimited projects.' },
            ],
          },
        ],
      },
    }`,
  ]
}
