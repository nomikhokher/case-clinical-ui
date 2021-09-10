import { Component } from '@angular/core'
import { DevOrderSummariesStore } from './dev-order-summaries.store'

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
        <ui-order-summaries
          [productOverview]="vm.config.items.productOverview"
          [productDetail]="vm.config.items.productDetail"
          [paymentDetails]="vm.config.items.paymentDetails"
        ></ui-order-summaries>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevOrderSummariesStore],
})
export class DevOrderSummariesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevOrderSummariesStore) {}
  public codePreview = [
    `import {WebUiOrderSummariesModule} from '@schema-driven/web/ui/order-summaries'\n\n
    <ui-order-summaries [productOverview]="vm.config.items.productOverview" [productDetail]="vm.config.items.productDetail" [paymentDetails]="vm.config.items.paymentDetails"></ui-order-summaries>\n

     productOverview = {
      heading: 'Order Detail',
      orderNum: 'W086438695',
      date: 'March 22, 2021',
    },\n
    productDetail = [
      {
        id: 12,
        productName : 'Distant Mountains Artwork Tee',
        productPrice : '36.00',
        productDescription : 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean',
        productAdress :'Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8',
        buyerEmail : 'testing@example.com',
        buyerPhone : '111-222-333',
        deliveryDate : 'March 24, 2021  ',
        deliveryStatusLevel: 4
      }
    ],\n
    paymentDetails = {
      billingAdress : 'Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8',
      cardNumber : '4242q345234624',
      cardExpiry : '02 / 24',
      subTotal : 72,
      shippingCost :5,
      tax : 6.16,
  
    }
    `,
  ]
}
