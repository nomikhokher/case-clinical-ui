import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPromoSectionComponent } from './dev-promo-section.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPromoSectionModule } from '@schema-driven/web/ui/promo-section'

@NgModule({
  declarations: [DevPromoSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPromoSectionComponent }]),
    WebUiPreviewModule,
    WebUiPromoSectionModule,
  ],
})
export class DevPromoSectionModule {}
