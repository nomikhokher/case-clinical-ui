import { Component } from '@angular/core'
import { DevProductFeaturesStore } from './dev-product-features.store'

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
        <ui-product-features
          [withTabs]="vm.config.items.withTabs"
          [tabsData]="vm.config.items.tabsData"
          [tabs]="vm.config.items.tabs"
          [featureOverview]="vm.config.items.featureOverview"
        ></ui-product-features>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductFeaturesStore],
})
export class DevProductFeaturesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductFeaturesStore) {}
  public codePreview = [
    `import {WebUiProductFeaturesModule} from '@schema-driven/web/ui/product-features'\n\n
  <ui-product-features [withTabs]="vm.config.items.withTabs" [tabsData]="vm.config.items.tabsData"  [tabs]="vm.config.items.tabs" [featureOverview]="vm.config.items.featureOverview"></ui-product-features>
\n
featureOverview= {
  heading: 'Technical Specifications',
  description: 'Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting digital apps and embrace these small, sturdy pieces of paper.',
},
\n
tabsData= [
  {
    id: 1,
    title: 'Adaptive and modular',
    description: 'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
    productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
  },
  {
    id: 2,
    title: 'Natural wood options',
    description: 'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material.',
    productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
  },
  {
    id: 3,
    title: 'Helpful around the home',
    description: 'Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more.'  ,
    productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
  },
  {
    id: 4,
    title: 'Everything you'll need',
    description: 'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items.',
    productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
  },
],
\n
tabs= [
  { id: 1, name: 'Design' },
  { id: 2, name: 'Material' },
  { id: 3, name: 'Considerations' },
  { id: 4, name: 'Included' },
],\n
withTabs=true,
    `,
  ]
}
