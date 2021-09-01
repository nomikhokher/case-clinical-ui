import { Component } from '@angular/core'
import { DevIncentivesStore } from './dev-incentives.store'

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
        <ui-incentives
          [incentives]="vm.config.items.incentives"
          [direction]="vm.config.items.direction"
        ></ui-incentives>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevIncentivesStore],
})
export class DevIncentivesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevIncentivesStore) {}

  public codePreview = [
    `import { WebUiIncentivesModule } from '@schema-driven/web/ui/incentives' \n\n 
    <ui-incentives 
      [incentives]="vm.config.items.incentives"
      [direction]="vm.config.items.direction"
    ></ui-incentives> \n\n
    {
      direction: 'vertical',
      incentives: [
        {
          name: 'Free shipping',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
          description:
            "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
        },
        {
          name: '10-year warranty',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
          description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
        },
        {
          name: 'Exchanges',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
          description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
        },
      ],
    }`,
  ]
}
