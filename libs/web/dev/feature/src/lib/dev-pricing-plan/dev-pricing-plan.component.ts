import { Component } from '@angular/core'
import { DevPricingPlanStore } from './dev-pricing-plan.store'

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
      >
        <ui-pricing-plan [planSections]="vm.config.items.planSections" [cards]="vm.config.items.cards">
        </ui-pricing-plan>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPricingPlanStore],
})
export class DevPricingPlanComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevPricingPlanStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPricingPlanModule } from '@schema-driven/web/ui/pricing-plan'\n\n
        <ui-pricing-plan 
          [planSections]="vm.config.items.planSections" 
          [cards]="vm.config.items.cards"
        >
        </ui-pricing-plan>\n\n 
        {
          planSections: ${JSON.stringify(result.config.items.planSections, null, '\t')}
          cards: ${JSON.stringify(result.config.items.cards, null, '\t')}
        }`,
      ]
    })
  }
}
