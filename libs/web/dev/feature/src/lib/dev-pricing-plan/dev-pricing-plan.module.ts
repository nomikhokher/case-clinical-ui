import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPricingPlanComponent } from './dev-pricing-plan.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPricingPlanModule } from '@schema-driven/web/ui/pricing-plan'

@NgModule({
  declarations: [DevPricingPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPricingPlanComponent }]),
    WebUiPreviewModule,
    WebUiPricingPlanModule,
  ],
})
export class DevPricingPlanModule {}
