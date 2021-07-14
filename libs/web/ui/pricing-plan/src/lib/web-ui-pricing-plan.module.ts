import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiPricingPlanComponent } from './web-ui-pricing-plan.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiPricingPlanComponent],
  exports: [WebUiPricingPlanComponent],
})
export class WebUiPricingPlanModule {}
